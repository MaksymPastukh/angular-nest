import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, debounceTime, distinctUntilChanged, EMPTY, map, switchMap, tap } from 'rxjs'
import { ProductsService } from '../../products/data-access/products.service'
import { CatalogFacetsStateInterface } from '../domain/interfaces/catalog-facets-state.interface'
import {
  FacetItemInterface,
  FacetsResponseInterface,
} from '../domain/interfaces/catalog-facets.interface'
import { FacetsPreviewRequest } from '../domain/types/facets-preview-request.type'

const initialState: CatalogFacetsStateInterface = {
  activeKey: null,
  brands: null,
  isLoading: false,
  error: null,
}

export const CatalogFacetsStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),
  withComputed((store) => {
    return {
      hasBrands: computed(() => (store.brands()?.length ?? 0) > 0),
      brandsSafe: computed(() => store.brands() ?? []),
    }
  }),
  withMethods((store, productsService = inject(ProductsService)) => {
    const CACHE = new Map<string, FacetItemInterface[]>()

    const setError = (error: string) => patchState(store, { isLoading: false, error })
    const setBrands = (brands: FacetItemInterface[]) =>
      patchState(store, { brands, isLoading: false, error: null })

    const handleHttpError = (error: unknown) => {
      const e = error as HttpErrorResponse
      const message = (e.error as { message?: string })?.message ?? e.message ?? 'Произошла ошибка'
      setError(String(message))
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

    const clear = () => {
      patchState(store, { activeKey: null, brands: null, isLoading: false, error: null })
    }

    const setActive = (activeKey: string) => patchState(store, { activeKey })

    /**
     * rxMethod: грузим preview бренды.
     *
     * Внутри:
     * - debounceTime для hover
     * - distinctUntilChanged по активному ключу + params
     * - switchMap для отмены предыдущего запроса
     * - cache (если уже запрашивали)
     */

    const loadPreviewBrands = rxMethod<FacetsPreviewRequest>((source$) =>
      source$.pipe(
        debounceTime(150),
        map((req) => {
          const finalParams = buildPreviewParams(req)
          const cachKey = JSON.stringify(finalParams)
          return { req, finalParams, cachKey }
        }),
        distinctUntilChanged((a, b) => a.cachKey === b.cachKey),
        tap(({ req, cachKey }) => {
          patchState(store, { activeKey: req.activeKey, error: null })

          const cached = CACHE.get(cachKey)
          if (cached) {
            // сразу показываем кэш
            patchState(store, { brands: cached, isLoading: false })
          } else {
            //чистим старые бренды (чтобы не мигали)
            patchState(store, { brands: null, isLoading: true })
          }
        }),
        switchMap(({ finalParams, cachKey }) => {
          const cached = CACHE.get(cachKey)
          if (cached) return EMPTY

          return productsService.getFacets(finalParams).pipe(
            map((res: FacetsResponseInterface) => res.brands ?? []),
            tap((brands) => {
              CACHE.set(cachKey, brands)
              setBrands(brands)
            }),
            catchError((err) => {
              handleHttpError(err)
              return EMPTY
            })
          )
        })
      )
    )

    return {
      clear,
      loadPreviewBrands,
    }
  })
)
