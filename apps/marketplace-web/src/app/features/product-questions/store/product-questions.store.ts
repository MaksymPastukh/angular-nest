import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, exhaustMap, filter, map, of, pipe, switchMap, tap } from 'rxjs'
import { LoadKindType } from '@marketplace/frontend-shared-types'
import { ProductQuestionService } from '../data-access/product-questions.service'
import { CreateQuestionInterface } from '../domain/interfaces/create-questin.inteface'
import { ProductQuestionStateInterface } from '../domain/interfaces/product-question-state.interface'
import { ProductQuestionInterface } from '../domain/interfaces/product-question.interface'
import { QuestionsPageChangeInterface } from '../domain/interfaces/question-page-change.interface'
import { QuestionsPageInterface } from '../domain/interfaces/question-page.interface'
import { QuestionStatusType } from '../domain/types/question-status.type'

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
    hasProduct: computed((): boolean => !!store.productId()),
    isEmpty: computed((): boolean => !store.isLoading() && store.items().length === 0),
    hasMore: computed((): boolean => store.items().length < store.total()),
    totalPages: computed((): number => Math.max(1, Math.ceil(store.total() / store.pageSize()))),
    hasMyQuestion: computed((): boolean => store.myQuestion() !== null),
    myStatus: computed((): QuestionStatusType | null => store.myQuestion()?.status ?? null),
  })),
  withMethods((store, questionService = inject(ProductQuestionService)) => {
    const setPending = (kind: LoadKindType = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'my') patchState(store, { isLoadingMy: true })
      if (kind === 'submit')
        patchState(store, { isSubmitting: true, error: null, existingQuestionId: null })
    }

    const stop = (kind: LoadKindType = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: false })
      if (kind === 'my') patchState(store, { isLoadingMy: false })
      if (kind === 'submit') patchState(store, { isSubmitting: false })
    }

    const setMySuccess = (myQuestion: ProductQuestionInterface | null): void => {
      patchState(store, { myQuestion })
    }

    const setListSuccess = (response: QuestionsPageInterface): void => {
      patchState(store, {
        items: response.items,
        total: response.total,
        page: response.page,
        pageSize: response.pageSize,
        error: null,
      })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: { message } })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return `An unknown error occurred.`
      const apiMessage: unknown = (error.error as { message?: unknown })?.message
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

    const hasProductId = <T>(x: {
      data: T
      productId: string | null
    }): x is { data: T; productId: string } =>
      typeof x.productId === 'string' && x.productId.length > 0

    const requireProductId = <T>() =>
      pipe(
        map((data: T) => ({ data, productId: store.productId() })),
        tap((x) => {
          if (!x.productId) setFailure('productId is missing')
        }),
        filter(hasProductId)
      )

    const load: RxMethod<void> = rxMethod<void>(
      pipe(
        requireProductId<void>(),
        tap(() => setPending('list')),
        switchMap(({ productId }) =>
          questionService
            .getAllQuestions({ productId, page: store.page(), pageSize: store.pageSize() })
            .pipe(
              tapResponse({
                next: setListSuccess,
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop('list'),
              })
            )
        )
      )
    )

    const goToPage: RxMethod<QuestionsPageChangeInterface> = rxMethod<QuestionsPageChangeInterface>(
      pipe(
        requireProductId<QuestionsPageChangeInterface>(),
        tap(({ data }) => {
          patchState(store, { page: data.page, pageSize: data.pageSize })
          setPending('list')
        }),
        switchMap(({ data, productId }) =>
          questionService
            .getAllQuestions({ productId, page: data.page, pageSize: data.pageSize })
            .pipe(
              tapResponse({
                next: setListSuccess,
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop('list'),
              })
            )
        )
      )
    )

    const loadMy: RxMethod<void> = rxMethod<void>(
      pipe(
        requireProductId<void>(),
        tap(() => setPending('my')),
        switchMap(({ productId }) =>
          questionService.getMyQuestion(productId).pipe(
            catchError(() => of(null)),
            tapResponse({
              next: setMySuccess,
              error: () => {}, // error is converted to null already
              finalize: () => stop('my'),
            })
          )
        )
      )
    )

    const createQuestion: RxMethod<CreateQuestionInterface> = rxMethod<CreateQuestionInterface>(
      pipe(
        requireProductId<CreateQuestionInterface>(),
        tap(() => setPending('submit')),
        exhaustMap(({ data, productId }) =>
          questionService.createQuestion({ productId, question: data.question }).pipe(
            tapResponse({
              next: () => {
                patchState(store, { page: 1 })
                goToPage({ page: 1, pageSize: store.pageSize() })
                loadMy()
              },
              error: (error) => {
                if (getErrorCode(error) === 'QUESTION_ALREADY_EXISTS') {
                  patchState(store, {
                    existingQuestionId: getExistingQuestionId(error),
                    error: { message: getErrorMessage(error) },
                  })
                  loadMy()
                  return
                }
                setFailure(getErrorMessage(error))
              },
              finalize: () => stop('submit'),
            })
          )
        )
      )
    )

    const remove: RxMethod<{ id: string }> = rxMethod<{ id: string }>(
      pipe(
        requireProductId<{ id: string }>(),
        tap(() => setPending('submit')),
        exhaustMap(({ data }) =>
          questionService.removeQuestion(data.id).pipe(
            tapResponse({
              next: () => {
                patchState(store, { myQuestion: null, page: 1 })
                goToPage({ page: 1, pageSize: store.pageSize() })
                loadMy()
              },
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop('submit'),
            })
          )
        )
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

    return { setContext, load, goToPage, setPageSize, loadMy, createQuestion, remove }
  })
)

