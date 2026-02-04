import { Injectable, effect, inject, signal, untracked } from '@angular/core'
import { Params, Router } from '@angular/router'
import { CatalogFilterParamsInterface } from '../../catalog/domain/interfaces/catalog-filter-params.interface'
import { CatalogSelectedFiltersInterface } from '../../catalog/domain/interfaces/catalog-selected-filters.interface'
import { ProductFilterStore } from '../../catalog/store/catalog-filter.store'
import { filtersToQueryParams, mapToApiFilters, parseUrlParams } from '../../catalog/utils'
import { parsedToSelected } from '../../catalog/utils/parse-to-selected'
import { ProductStore } from './products.store'

@Injectable({ providedIn: 'root' })
export class ProductsPageFacade {
  private readonly productStore = inject(ProductStore)
  private readonly filterStore = inject(ProductFilterStore)
  private readonly router = inject(Router)
  private readonly isRestoringFromUrl = signal(false)
  private readonly lastQueryString = signal<string>('')

  readonly facetsBrands = this.productStore.facetsBrands
  readonly facetsProductTypes = this.productStore.facetsProductTypes
  readonly facetsDressStyles = this.productStore.facetsDressStyles
  readonly facetsSizes = this.productStore.facetsSizes
  readonly facetsColors = this.productStore.facetsColors

  constructor() {
    effect(() => {
      const uiFilters: CatalogSelectedFiltersInterface = this.filterStore.selected()
      const apiFilters: CatalogFilterParamsInterface = mapToApiFilters(uiFilters)

      untracked(() => {
        const restoring = this.isRestoringFromUrl()
        this.productStore.setFilters(restoring ? apiFilters : { ...apiFilters, page: 1 })
        this.syncUrlWithFilters(this.productStore.filters())
      })
    })
  }

  private syncUrlWithFilters(filters: CatalogFilterParamsInterface): void {
    const queryParams = filtersToQueryParams(filters)

    const next = JSON.stringify(queryParams)
    if (next === this.lastQueryString()) return
    this.lastQueryString.set(next)

    void this.router.navigate([], {
      queryParams,
      replaceUrl: true,
    })
  }

  restoreFiltersFromUrl(params: Params): void {
    const isEmpty = !params || Object.keys(params).length === 0

    untracked(() => {
      this.isRestoringFromUrl.set(true)

      if (isEmpty) {
        this.filterStore.resetFilters()
        this.productStore.resetFilters()

        this.lastQueryString.set(JSON.stringify({}))
        this.isRestoringFromUrl.set(false)
        return
      }

      const parsed = parseUrlParams(params)
      const selected = parsedToSelected(parsed)

      this.filterStore.hydrateSelected(selected)

      this.productStore.setFilters({
        page: parsed.page,
        limit: parsed.limit,
        sortBy: parsed.sortBy,
        order: parsed.order,
      })

      this.lastQueryString.set(JSON.stringify(filtersToQueryParams(this.productStore.filters())))

      this.isRestoringFromUrl.set(false)
    })
  }

  resetFilters(): void {
    this.filterStore.resetFilters()
    this.productStore.resetFilters()
    this.lastQueryString.set('')
  }

  // Products
  readonly products = this.productStore.products
  readonly isLoading = this.productStore.isLoading
  // Filters (UI)
  readonly filters = this.filterStore.selected
  readonly sizes = this.filterStore.sizes
  readonly colors = this.filterStore.colors
}
