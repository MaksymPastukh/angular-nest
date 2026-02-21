import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import {RxMethod, rxMethod} from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, exhaustMap, filter, Observable, pipe, switchMap, tap } from 'rxjs'
import { ProductQuestionService } from '../data-access/product-questions.service'
import { CreateQuestionInterface } from '../domain/interfaces/create-questin.inteface'
import { ProductQuestionStateInterface } from '../domain/interfaces/product-question-state.interface'
import { ProductQuestionInterface } from '../domain/interfaces/product-question.interface'
import { QuestionsPageChangeInterface } from '../domain/interfaces/question-page-change.interface'
import { QuestionsPageInterface } from '../domain/interfaces/question-page.interface'

const initialState: ProductQuestionStateInterface = {
  productId: null,
  items: [],
  total: 0,
  page: 1,
  pageSize: 10,
  myQuestion: null,
  isLoading: false,
  isLoadingMy: false,
  isSubmitting: false,
  error: null,
  existingQuestionId: null,
}

export const ProductQuestionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    hasProduct: computed(() => !!store.productId()),
    isEmpty: computed(() => !store.isLoading() && store.items().length === 0),
    hasMore: computed(() => store.items().length < store.total()),
    totalPages: computed(() => Math.max(1, Math.ceil(store.total() / store.pageSize()))),
    hasMyQuestion: computed(() => store.myQuestion() !== null),
    myStatus: computed(() => store.myQuestion()?.status ?? null),
  })),
  withMethods((store, questionService = inject(ProductQuestionService)) => {
    const setPending = (kind: 'list' | 'my' | 'submit' = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'my') patchState(store, { isLoadingMy: true })
      if (kind === 'submit')
        patchState(store, { isSubmitting: true, error: null, existingQuestionId: null })
    }

    const setListSuccess = (response: QuestionsPageInterface): void => {
      patchState(store, {
        items: response.items,
        total: response.total,
        page: response.page,
        pageSize: response.pageSize, // Исправлено: было response.page
        isLoading: false,
        error: null,
      })
    }

    const setMySuccess = (myQuestion: ProductQuestionInterface | null): void => {
      patchState(store, { myQuestion, isLoading: false })
    }

    const setSubmitSuccess = (): void => {
      patchState(store, { isSubmitting: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, {
        error: { message },
        isLoading: false,
        isLoadingMy: false,
        isSubmitting: false,
      })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return `An unknown error occurred.`

      const apiMessage = (error.error as { message?: unknown })?.message

      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const getErrorCode = (error: unknown): string | null => {
      if (!(error instanceof HttpErrorResponse)) return null
      const code = (error.error as { code?: unknown })?.code
      return typeof code === 'string' ? code : null
    }

    const getExistingQuestionId = (error: unknown): string | null => {
      if (!(error instanceof HttpErrorResponse)) return null
      const id = (error.error as { existingQuestionId?: unknown })?.existingQuestionId
      return typeof id === 'string' ? id : null
    }

    const requireProductId = <T>() => pipe(filter<T>(() => !!store.productId()))

    const loadListCommand = () =>
      pipe(
        requireProductId<void>(),
        tap<void>(() => setPending('list')),
        switchMap(() =>
          questionService
            .getAllQuestions({
              productId: store.productId() as string,
              page: store.page(),
              pageSize: store.pageSize(),
            })
            .pipe(
              tap((response) => setListSuccess(response)),
              catchError((error) => {
                setFailure(getErrorMessage(error))
                return EMPTY
              })
            )
        )
      )

    const loadMyCommand = () =>
      pipe(
        requireProductId<void>(),
        tap<void>(() => setPending('my')),
        switchMap(() =>
          questionService.getMyQuestion(store.productId() as string).pipe(
            tap((myQuestion) => setMySuccess(myQuestion)),
            catchError(() => {
              setMySuccess(null)
              return EMPTY
            })
          )
        )
      )

    const submitCommand = <T>(
      request: (data: T) => Observable<unknown>,
      afterSuccess: () => void,
      onError?: (error: unknown) => void
    ) =>
      pipe(
        requireProductId<T>(),
        tap<T>(() => setPending('submit')),
        exhaustMap((data: T) =>
          request(data).pipe(
            tap(() => {
              setSubmitSuccess()
              afterSuccess()
            }),
            catchError((error: unknown) => {
              if (onError) onError(error)
              else setFailure(getErrorMessage(error))
              return EMPTY
            })
          )
        )
      )

    const load: RxMethod<void> = rxMethod<void>(loadListCommand())
    const loadMy: RxMethod<void>  = rxMethod<void>(loadMyCommand())

    const goToPage: RxMethod<QuestionsPageChangeInterface>  = rxMethod<QuestionsPageChangeInterface>(
      pipe(
        requireProductId<QuestionsPageChangeInterface>(),
        tap(({ page, pageSize }:QuestionsPageChangeInterface):void => {
          patchState(store, { page, pageSize })
          setPending('list')
        }),
        switchMap(({ page, pageSize }:QuestionsPageChangeInterface) =>
          questionService
            .getAllQuestions({
              productId: store.productId() as string,
              page,
              pageSize,
            })
            .pipe(
              tap((response: QuestionsPageInterface) => setListSuccess(response)),
              catchError((error) => {
                setFailure(getErrorMessage(error))
                return EMPTY
              })
            )
        )
      )
    )

    const createQuestion = rxMethod<CreateQuestionInterface>(
      submitCommand<CreateQuestionInterface>(
        (data) =>
          questionService.createQuestion({
            productId: store.productId() as string,
            question: data.question,
          }),
        () => {
          patchState(store, { page: 1 })
          goToPage({ page: 1, pageSize: store.pageSize() })
          loadMy()
        },
        (error) => {
          if (getErrorCode(error) === 'QUESTION_ALREADY_EXISTS') {
            patchState(store, {
              isSubmitting: false,
              existingQuestionId: getExistingQuestionId(error),
              error: { message: getErrorMessage(error) },
            })
            loadMy()
            return
          }

          setFailure(getErrorMessage(error))
        }
      )
    )

    const remove = rxMethod<{ id: string }>(
      submitCommand<{ id: string }>(
        ({ id }) => questionService.removeQuestion(id),
        () => {
          patchState(store, { myQuestion: null, page: 1 })
          goToPage({ page: 1, pageSize: store.pageSize() })
          loadMy()
        }
      )
    )

    const setContext = (params: { productId: string }): void => {
      patchState(store, {
        productId: params.productId,
        items: [],
        total: 0,
        page: 1,
        error: null,
        existingQuestionId: null,
        myQuestion: null,
      })
    }

    const setPageSize = (pageSize: number): void => {
      patchState(store, { pageSize, page: 1 })
      goToPage({ page: 1, pageSize })
    }

    return {
      setContext,
      load,
      goToPage,
      setPageSize,
      loadMy,
      createQuestion,
      remove,
    }
  })
)
