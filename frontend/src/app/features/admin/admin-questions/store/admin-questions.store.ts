import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { exhaustMap, pipe, switchMap, tap } from 'rxjs'

import { LoadKindType } from '../../../../shared/domain/types/load-kind.type'
import { QuestionsPageInterface } from '../../../product-questions/domain/interfaces'
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
  withMethods((store, questionsService = inject(AdminQuestionsService)) => {
    const setPending = (kind: LoadKindType = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'submit') patchState(store, { isSubmitting: true, error: null })
    }

    const stop = (kind: LoadKindType = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: false })
      if (kind === 'submit') patchState(store, { isSubmitting: false })
    }

    const setListSuccess = (res: QuestionsPageInterface): void => {
      patchState(store, {
        items: res.items,
        total: res.total,
        page: res.page,
        pageSize: res.pageSize,
        error: null,
      })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: { message } })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return 'An unknown error occurred.'

      const apiMessage: unknown = (error.error as { message?: unknown })?.message

      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const load: RxMethod<void> = rxMethod<void>(
      pipe(
        tap(() => setPending('list')),
        switchMap(() =>
          questionsService
            .getQuestions({
              page: store.page(),
              pageSize: store.pageSize(),
              status: store.filter().status,
              productId: store.filter().productId ?? undefined,
            })
            .pipe(
              tapResponse({
                next: (res) => setListSuccess(res),
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop('list'),
              })
            )
        )
      )
    )

    const goToPage: RxMethod<AdminQuestionsPageChangeInterface> =
      rxMethod<AdminQuestionsPageChangeInterface>(
        pipe(
          tap(({ page, pageSize }) => {
            // update state before request so UI reflects requested page immediately
            patchState(store, { page, pageSize })
            setPending('list')
          }),
          switchMap(({ page, pageSize }) =>
            questionsService
              .getQuestions({
                page,
                pageSize,
                status: store.filter().status,
                productId: store.filter().productId ?? undefined,
              })
              .pipe(
                tapResponse({
                  next: (res) => setListSuccess(res),
                  error: (e) => setFailure(getErrorMessage(e)),
                  finalize: () => stop('list'),
                })
              )
          )
        )
      )

    const answer: RxMethod<{ id: string; answer: string }> = rxMethod<{
      id: string
      answer: string
    }>(
      pipe(
        tap(() => setPending('submit')),
        exhaustMap(({ id, answer }) =>
          questionsService.answerQuestion(id, { answer }).pipe(
            tapResponse({
              next: (updated) => {
                // optimistic: remove from current list (relevant for PENDING filter)
                patchState(store, {
                  items: store.items().filter((q) => q.id !== updated.id),
                  total: Math.max(0, store.total() - 1),
                })
              },
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop('submit'),
            })
          )
        )
      )
    )

    const setFilter = (patch: Partial<AdminQuestionsFilterInterface>): void => {
      patchState(store, { filter: { ...store.filter(), ...patch }, page: 1 })
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
