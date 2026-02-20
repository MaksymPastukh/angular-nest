import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, exhaustMap, Observable, pipe, switchMap, tap } from 'rxjs'

import { ProductQuestionInterface } from '@features/product-questions/domain/interfaces'
import { AdminQuestionsService } from '../data-access/admin-questions.service'
import type { AdminQuestionsFilterInterface } from '../domain/interfaces/admin-questions-filter.interface'
import type { AdminQuestionsPageChangeInterface } from '../domain/interfaces/admin-questions-page-change.interface'
import type { AdminQuestionsStateInterface } from '../domain/interfaces/admin-questions-state.interface'

const initialState: AdminQuestionsStateInterface = {
  items: [],
  total: 0,
  page: 1,
  pageSize: 20,

  filter: {
    status: 'PENDING',
    productId: null,
  },

  isLoading: false,
  isSubmitting: false,
  error: null,
}

export const AdminQuestionsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    isEmpty: computed(() => !store.isLoading() && store.items().length === 0),
    totalPages: computed(() => Math.max(1, Math.ceil(store.total() / store.pageSize()))),
    hasProductFilter: computed(() => !!store.filter().productId),
  })),
  withMethods((store, api = inject(AdminQuestionsService)) => {
    const setPending = (kind: 'list' | 'submit' = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'submit') patchState(store, { isSubmitting: true, error: null })
    }

    const setListSuccess = (res: {
      items: ProductQuestionInterface[]
      total: number
      page: number
      pageSize: number
    }): void => {
      patchState(store, {
        items: res.items,
        total: res.total,
        page: res.page,
        pageSize: res.pageSize,
        isLoading: false,
        error: null,
      })
    }

    const setSubmitSuccess = (): void => {
      patchState(store, { isSubmitting: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, {
        error: { message },
        isLoading: false,
        isSubmitting: false,
      })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return 'An unknown error occurred.'

      const apiMessage = (error.error as { message?: unknown })?.message

      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const loadCommand = () =>
      pipe(
        tap<void>(() => setPending('list')),
        switchMap(() =>
          api
            .getQuestions({
              page: store.page(),
              pageSize: store.pageSize(),
              status: store.filter().status,
              productId: store.filter().productId ?? undefined,
            })
            .pipe(
              tap((res) => setListSuccess(res)),
              catchError((error) => {
                setFailure(getErrorMessage(error))
                return EMPTY
              })
            )
        )
      )

    const goToPageCommand = () =>
      pipe(
        tap<AdminQuestionsPageChangeInterface>(({ page, pageSize }) => {
          // Обновляем state перед запросом, чтобы UI отобразил корректную страницу
          patchState(store, { page, pageSize })
          setPending('list')
        }),
        switchMap(({ page, pageSize }) =>
          api
            .getQuestions({
              page,
              pageSize,
              status: store.filter().status,
              productId: store.filter().productId ?? undefined,
            })
            .pipe(
              tap((res) => setListSuccess(res)),
              catchError((error) => {
                setFailure(getErrorMessage(error))
                return EMPTY
              })
            )
        )
      )

    const submitCommand = <T>(
      request: (data: T) => Observable<ProductQuestionInterface>,
      afterSuccess: (updated: ProductQuestionInterface) => void
    ) =>
      pipe(
        tap<T>(() => setPending('submit')),
        exhaustMap((data: T) =>
          request(data).pipe(
            tap((updated) => {
              setSubmitSuccess()
              afterSuccess(updated)
            }),
            catchError((error) => {
              setFailure(getErrorMessage(error))
              return EMPTY
            })
          )
        )
      )

    const load = rxMethod<void>(loadCommand())

    const goToPage = rxMethod<AdminQuestionsPageChangeInterface>(goToPageCommand())

    const answer = rxMethod<{ id: string; answer: string }>(
      submitCommand<{ id: string; answer: string }>(
        ({ id, answer }) => api.answerQuestion(id, { answer }),
        (updated) => {
          // после ответа вопрос пропадает из PENDING списка (если фильтр PENDING)
          // 1) быстрый optimistic: удаляем из текущего списка
          patchState(store, {
            items: store.items().filter((q) => q.id !== updated.id),
            total: Math.max(0, store.total() - 1),
          })

          // 2) для идеальной синхронизации можно перезагрузить текущую страницу:
          // load()
        }
      )
    )

    const setFilter = (patch: Partial<AdminQuestionsFilterInterface>): void => {
      patchState(store, {
        filter: { ...store.filter(), ...patch },
        page: 1,
      })
    }

    const setContext = (ctx: { productId?: string | null }): void => {
      patchState(store, {
        page: 1,
        filter: { ...store.filter(), productId: ctx.productId ?? null },
        error: null,
      })
    }

    return {
      setContext,
      setFilter,
      load,
      goToPage,
      answer,
    }
  })
)
