import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { EMPTY, pipe, switchMap, tap } from 'rxjs'
import { WishlistService } from '../data-access/wishlist.service'
import { WishlistItemSource } from '../domain/constants/wishlist-item-sourse.constants'
import { EnrichedWishlistItem } from '../domain/interfaces/enriched-wishlist-item.interface'
import { WishListStateInterface } from '../domain/interfaces/wish-list-state.interface'

type LoadKind = 'list' | 'submit'

const initialState: WishListStateInterface = {
  items: [],
  nextCursor: null,
  hasMore: false,
  total: 0,
  isLoading: false,
  isSubmitting: false,
  error: null,
  itemsMap: {},
}

export const WishListStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    count: computed((): number => store.total()),
    isEmpty: computed(() => store.total() === 0),
    isInWishlist: computed(() => (productId: string) => store.itemsMap()[productId] ?? false),
    availableItems: computed(() => store.items().filter((x) => x.status === 'available')),
    canLoadMore: computed(() => store.hasMore() && !store.isLoading()),
  })),
  withMethods((store, wishListService = inject(WishlistService)) => {
    const setPending = (kind: LoadKind = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'submit') patchState(store, { isSubmitting: true, error: null })
    }

    const stop = (kind: LoadKind = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: false })
      if (kind === 'submit') patchState(store, { isSubmitting: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: { message } })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return 'Произошла ошибка'
      const apiMessage: unknown = (error.error as { message?: unknown })?.message
      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')
      return error.message ?? `Request failed with status ${error.status}.`
    }

    const rebuildItemsMap = (items: EnrichedWishlistItem[]): Record<string, boolean> => {
      const map: Record<string, boolean> = {}
      for (const i of items) {
        map[i.productId] = true
      }
      return map
    }

    const applyListResponse = (res: {
      items: EnrichedWishlistItem[]
      nextCursor: string | null
      hasMore: boolean
      total: number
    }): void => {
      patchState(store, {
        items: res.items,
        nextCursor: res.nextCursor,
        hasMore: res.hasMore,
        total: res.total,
        itemsMap: rebuildItemsMap(res.items),
      })
    }

    const load: RxMethod<{ cursor?: string; reset?: boolean }> = rxMethod(
      pipe(
        tap(({ reset }) => {
          setPending('list')
          if (reset) {
            patchState(store, {
              items: [],
              itemsMap: {},
              nextCursor: null,
              hasMore: false,
              total: 0,
            })
          }
        }),
        switchMap(({ cursor }) =>
          wishListService.getWishlist({ cursor, limit: 20 }).pipe(
            tapResponse({
              next: (res) => {
                const items = cursor ? [...store.items(), ...res.items] : res.items
                const itemsMap = cursor
                  ? { ...store.itemsMap(), ...rebuildItemsMap(res.items) }
                  : rebuildItemsMap(res.items)

                patchState(store, {
                  items,
                  nextCursor: res.nextCursor,
                  hasMore: res.hasMore,
                  total: res.total,
                  itemsMap,
                })
              },
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop('list'),
            })
          )
        )
      )
    )

    const loadMore = (): void => {
      const cursor = store.nextCursor()
      if (!cursor || store.isLoading()) return
      load({ cursor })
    }

    const addItem: RxMethod<{ productId: string; source?: WishlistItemSource; note?: string }> =
      rxMethod(
        pipe(
          tap(() => {
            setPending('submit')
            patchState(store, { isLoading: true })
          }),
          switchMap(({ productId, source, note }) =>
            wishListService.addItem(productId, { source, note }).pipe(
              switchMap(() => wishListService.getWishlist({ limit: 20 })),
              tapResponse({
                next: (res) => applyListResponse(res),
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => {
                  stop('submit')
                  patchState(store, { isLoading: false })
                },
              })
            )
          )
        )
      )

    const removeItem: RxMethod<string> = rxMethod(
      pipe(
        tap(() => {
          setPending('submit')
          patchState(store, { isLoading: true })
        }),
        switchMap((productId) =>
          wishListService.removeItem(productId).pipe(
            switchMap(() => wishListService.getWishlist({ limit: 20 })),
            tapResponse({
              next: (res) => applyListResponse(res),
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => {
                stop('submit')
                patchState(store, { isLoading: false })
              },
            })
          )
        )
      )
    )

    const clear: RxMethod<void> = rxMethod(
      pipe(
        tap(() => {
          setPending('submit')
          patchState(store, { isLoading: true })
        }),
        switchMap(() =>
          wishListService.clear().pipe(
            switchMap(() => wishListService.getWishlist({ limit: 20 })),
            tapResponse({
              next: (res) => applyListResponse(res),
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => {
                stop('submit')
                patchState(store, { isLoading: false })
              },
            })
          )
        )
      )
    )

    const syncContains: RxMethod<string[]> = rxMethod(
      pipe(
        switchMap((ids) => {
          const safeIds = ids.filter(Boolean).slice(0, 200)
          if (safeIds.length === 0) return EMPTY

          return wishListService.contains(safeIds).pipe(
            tapResponse({
              next: (map) => patchState(store, { itemsMap: { ...store.itemsMap(), ...map } }),
              error: () => {},
            })
          )
        })
      )
    )

    const loadCount: RxMethod<void> = rxMethod(
      pipe(
        switchMap(() =>
          wishListService.count().pipe(
            tapResponse({
              next: ({ count }) => patchState(store, { total: count }),
              error: () => {},
            })
          )
        )
      )
    )

    return {
      load,
      loadMore,
      addItem,
      removeItem,
      clear,
      syncContains,
      loadCount,
    }
  })
)
