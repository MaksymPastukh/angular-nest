import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, forkJoin, switchMap, tap } from 'rxjs'
import { ProductsService } from '../../products/data-access/products.service'
import { CatalogFilterState } from '../domain/interfaces/catalog-filter-state.interface'
import { CatalogSelectedFiltersInterface } from '../domain/interfaces/catalog-selected-filters.interface'
import { ToggleArrayKey } from '../domain/types/toggle-array.type'
import { COLOR_MAP, generateColorHex } from '../utils/generateColorHex'

const PRICE_DEFAULT = { min: 70, max: 270 } as const
const COLOR_HEX_CACHE = new Map<string, string>()

const initialState: CatalogFilterState = {
  filterData: null,
  selected: {
    priceRange: [PRICE_DEFAULT.min, PRICE_DEFAULT.max],
    selectedSizes: [],
    selectedColors: [],
    selectedCategory: null,
    selectedTypeKey: null,
    selectedStyleKey: null,
    searchQuery: '',
  },
  isLoading: false,
  error: null,
  initialized: false,
}

const toggle = (list: string[], value: string): string[] => {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

const getColorHex = (name: string) => {
  const predefined = COLOR_MAP[name]

  if (predefined) return predefined
  const cached = COLOR_HEX_CACHE.get(name)
  if (cached) return cached

  const hex = generateColorHex(name)
  COLOR_HEX_CACHE.set(name, hex)
  return hex
}

export const ProductFilterStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => {
    return {
      sizes: computed(() => store.filterData()?.sizes ?? []),
      colors: computed(() =>
        (store.filterData()?.colors ?? []).map((name: string) => ({
          name,
          value: getColorHex(name),
        }))
      ),
      brands: computed(() => store.filterData()?.brands ?? []),
      productTypes: computed(() => store.filterData()?.productTypes ?? []),
      dressStyles: computed(() => store.filterData()?.dressStyles ?? []),
    }
  }),

  withMethods((store, productService = inject(ProductsService)) => {
    const startLoading = () => patchState(store, { isLoading: true, error: null })
    const setError = (error: string) =>
      patchState(store, {
        isLoading: false,
        error,
      })

    const handleHttpError = (error: unknown) => {
      const e = error as HttpErrorResponse
      const message = (e.error as { message?: string })?.message ?? e.message ?? 'Произошла ошибка'
      setError(String(message))
    }

    const updateSelected = (
      updater: (current: CatalogSelectedFiltersInterface) => CatalogSelectedFiltersInterface
    ) => {
      patchState(store, {
        selected: updater(store.selected()),
      })
    }

    const setPriceRange = (priceRange: [number, number]) => {
      updateSelected((f) => ({ ...f, priceRange }))
    }

    const toggleArrayField = (key: ToggleArrayKey, value: string) => {
      updateSelected((f) => ({
        ...f,
        [key]: toggle(f[key], value),
      }))
    }

    const toggleSize = (size: string) => {
      toggleArrayField('selectedSizes', size)
    }

    const toggleColor = (color: string) => {
      toggleArrayField('selectedColors', color)
    }

    const setCategory = (category: string | null) => {
      updateSelected((f) => ({
        ...f,
        selectedCategory: category,
        selectedTypeKey: null,
        selectedStyleKey: null,
      }))
    }

    const toggleType = (type: string, brand: string) => {
      const key = `${type}:${brand}`

      updateSelected((f) => {
        const nextTypeKey = f.selectedTypeKey === key ? null : key

        return {
          ...f,
          selectedTypeKey: nextTypeKey,
          selectedStyleKey: null,
        }
      })
    }

    const toggleStyle = (type: string, brand: string) => {
      const key = `${type}:${brand}`

      updateSelected((f) => {
        const nextStyleKey = f.selectedStyleKey === key ? null : key

        return {
          ...f,
          selectedStyleKey: nextStyleKey,
          selectedTypeKey: null,
        }
      })
    }

    const setSearchQuery = (query: string) => {
      updateSelected((f) => ({ ...f, searchQuery: query }))
    }

    const resetFilters = () => {
      patchState(store, {
        selected: initialState.selected,
      })
    }

    const loadFilterData = rxMethod<void>((source$) =>
      source$.pipe(
        tap(() => startLoading()),
        switchMap(() =>
          forkJoin({
            categories: productService.getCategories(),
            productTypes: productService.getProductTypes(),
            dressStyles: productService.getDressStyles(),
            brands: productService.getBrands(),
            colors: productService.getColors(),
            sizes: productService.getSizes(),
          }).pipe(
            tap((data) =>
              patchState(store, {
                filterData: data,
                isLoading: false,
                error: null,
                initialized: true,
              })
            ),
            catchError((error) => {
              handleHttpError(error)
              return EMPTY
            })
          )
        )
      )
    )

    const ensureLoaded = rxMethod<void>((source$) =>
      source$.pipe(
        tap(() => {
          if (store.initialized() || store.isLoading()) return
          loadFilterData()
        })
      )
    )

    return {
      hydrateSelected(selected: CatalogSelectedFiltersInterface) {
        patchState(store, { selected })
      },
      setPriceRange,
      setCategory,
      toggleColor,
      toggleSize,
      toggleStyle,
      toggleType,
      setSearchQuery,
      resetFilters,
      loadFilterData,
      ensureLoaded,
    }
  }),
  withHooks({
    onInit(store) {
      store.ensureLoaded()
    },
  })
)
