import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, switchMap, tap } from 'rxjs'
import { WishlistService } from '../data-access/wishlist.service'
import { EnrichedWishlistItem } from '../domain/interfaces/enriched-wishlist-item.interface'
import { WishListStateInterface } from '../domain/interfaces/wish-list-state.interface'

type LoadKind = 'list' | 'submit'

const initialState: WishListStateInterface = {
  items: [],
  nextCursor: null,
  hasMore: false,
  total: 0,
  isLoading: false,
  error: null,
  itemsMap: {},
}

export const StoreName = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    count: computed((): number => store.total()),
    isEMpty: computed((): boolean => store.total() === 0),
    inWishList: () => (productId: string) => store.itemsMap()[productId] ?? false,
    availableItems: () => store.items().filter((x) => x.status === 'available'),
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
      return error.message ?? `Request failed with status ${'$'}{error.status}.`
    }

    const rebuildItemsMap = (items: EnrichedWishlistItem[]): Record<string, boolean> => {
      const map: Record<string, boolean> = {}
      for (const i of items) {
        map[i.productId] = true
      }
      return map
    }

    const load: RxMethod<{ cursor?: string; reset?: boolean }> = rxMethod<{
      cursor?: string
      reset?: boolean
    }>(
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

                patchState(store, {
                  items,
                  nextCursor: res.nextCursor,
                  hasMore: res.hasMore,
                  total: res.total,
                  itemsMap: cursor
                    ? { ...store.itemsMap(), ...rebuildItemsMap(res.items) }
                    : rebuildItemsMap(res.items),
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

    return {
      load,
    }
  })
)
