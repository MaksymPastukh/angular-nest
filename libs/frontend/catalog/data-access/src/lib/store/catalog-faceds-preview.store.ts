import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs'
import {
  CatalogFacetsStateInterface,
  FacetItemInterface,
  FacetsPreviewRequest,
  FacetsResponseInterface,
} from '@marketplace/frontend-catalog-util'

import { ProductsService } from '../data-access/products.service'

const initialState: CatalogFacetsStateInterface = {
  activeKey: null,
  brands: null,
  isLoading: false,
  error: null,
}

export const CatalogFacetsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed((store) => ({
    hasBrands: computed(() => (store.brands()?.length ?? 0) > 0),
    brandsSafe: computed(() => store.brands() ?? []),
  })),

  withMethods((store, productsService = inject(ProductsService)) => {
    const CACHE = new Map<string, FacetItemInterface[]>()

    const setPending = (): void => {
      patchState(store, { isLoading: true, error: null })
    }

    const stop = (): void => {
      patchState(store, { isLoading: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: message })
    }

    const setBrands = (brands: FacetItemInterface[] | null): void => {
      patchState(store, { brands })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return 'Произошла ошибка'

      const apiMessage: unknown = (error.error as { message?: unknown })?.message
      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const buildPreviewParams = (
      req: FacetsPreviewRequest
    ): Record<string, string | number | boolean | readonly (string | number | boolean)[]> => {
      const base = req.params ?? {}

      if ('previewProductType' in req) {
        return { ...base, previewProductType: req.previewProductType as string }
      }

      return { ...base, previewDressStyle: req.previewDressStyle }
    }

    const clear = (): void => {
      patchState(store, { activeKey: null, brands: null, isLoading: false, error: null })
    }

    const begin = (activeKey: string): void => {
      patchState(store, { activeKey, brands: null, isLoading: true, error: null })
    }

    const loadPreviewBrands: RxMethod<FacetsPreviewRequest> = rxMethod<FacetsPreviewRequest>(
      (source$) =>
        source$.pipe(
          map((req) => {
            const finalParams = buildPreviewParams(req)
            const cacheKey = JSON.stringify(finalParams)
            return { req, finalParams, cacheKey }
          }),
          distinctUntilChanged((a, b) => a.cacheKey === b.cacheKey),

          tap(({ req, cacheKey }) => {
            patchState(store, { activeKey: req.activeKey })
            setPending()
            setBrands(null)

            const cached = CACHE.get(cacheKey)
            if (cached) {
              setBrands(cached)
              stop()
            }
          }),

          switchMap(({ finalParams, cacheKey }) => {
            const cached = CACHE.get(cacheKey)
            if (cached) {
              return []
            }

            return productsService.getFacets(finalParams).pipe(
              map((res: FacetsResponseInterface) => res.brands ?? []),
              tapResponse({
                next: (brands) => {
                  CACHE.set(cacheKey, brands)
                  setBrands(brands)
                },
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop(),
              })
            )
          })
        )
    )

    return { clear, begin, loadPreviewBrands }
  })
)
