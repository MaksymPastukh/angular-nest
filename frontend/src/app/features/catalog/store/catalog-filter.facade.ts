import { computed, inject, Injectable, signal } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { buildBaseFacetsParams } from '../utils/build-facets-params'
import { CatalogFacetsStore } from './catalog-faceds-preview.store'
import { ProductFilterStore } from './catalog-filter.store'

@Injectable({
  providedIn: 'root',
})
export class CatalogFilterFacade {
  private readonly store = inject(ProductFilterStore)
  private readonly catalogFacetsStore = inject(CatalogFacetsStore)

  readonly isLoading = this.store.isLoading
  readonly error = this.store.error
  readonly initialized = this.store.initialized

  readonly sizes = this.store.sizes
  readonly brands = this.store.brands
  readonly colors = this.store.colors
  readonly productTypes = this.store.productTypes
  readonly dressStyles = this.store.dressStyles

  readonly selected = this.store.selected

  readonly previewBrandsSafe = this.catalogFacetsStore.brandsSafe
  readonly previewIsLoading = this.catalogFacetsStore.isLoading

  readonly selectedColorSet = computed(() => new Set(this.selected().selectedColors))
  readonly selectedSizesSet = computed(() => new Set(this.selected().selectedSizes))

  isColorsSelected = (name: string) => this.selectedColorSet().has(name)
  isSizesSelected = (size: string) => this.selectedSizesSet().has(size)

  private readonly _activeCategory = signal<string | null>(null)
  private readonly _activeStyle = signal<string | null>(null)

  readonly activeCategory = this._activeCategory.asReadonly()
  readonly activeStyle = this._activeStyle.asReadonly()

  setActiveCategory(category: string | null): void {
    this._activeCategory.set(category)
    this._activeStyle.set(null)

    if (!category) {
      this.catalogFacetsStore.clear()
      return
    }

    const activeKey = `productType:${category}`
    const params = buildBaseFacetsParams(this.store.selected())

    this.catalogFacetsStore.begin(activeKey)

    this.catalogFacetsStore.loadPreviewBrands({
      activeKey,
      params,
      previewProductType: category,
    })
  }

  setActiveStyle(style: string | null): void {
    this._activeStyle.set(style)
    this._activeCategory.set(null)

    if (!style) {
      this.catalogFacetsStore.clear()
      return
    }

    const activeKey = `dressStyle:${style}`
    const params = buildBaseFacetsParams(this.store.selected())

    this.catalogFacetsStore.begin(activeKey)

    this.catalogFacetsStore.loadPreviewBrands({
      activeKey,
      params,
      previewDressStyle: style,
    })
  }

  readonly categoryBrandsMenu = computed<MenuItem[]>(() => {
    const category = this._activeCategory()
    if (!category) return []

    const brands = this.catalogFacetsStore.brandsSafe()
    const isLoading = this.catalogFacetsStore.isLoading()

    if (isLoading) {
      return [{ label: 'Loading...', disabled: true }]
    }

    if (brands.length === 0) {
      return [{ label: 'Нет брендов', disabled: true }]
    }

    const sorted = [...brands].sort((a, b) => b.count - a.count)

    return sorted.map((b) => ({
      label: `${b.value}`,
      disabled: b.count === 0,
      command: () => this.store.toggleType(category, b.value),
    }))
  })

  readonly styleBrandsMenu = computed<MenuItem[]>(() => {
    const style = this._activeStyle()
    if (!style) return []

    const brands = this.catalogFacetsStore.brandsSafe()
    const isLoading = this.catalogFacetsStore.isLoading()

    if (isLoading) {
      return [{ label: 'Loading...', disabled: true }]
    }

    if (brands.length === 0) {
      return [{ label: 'Нет брендов', disabled: true }]
    }

    const sorted = [...brands].sort((a, b) => b.count - a.count)

    return sorted.map((b) => ({
      label: `${b.value}`,
      disabled: b.count === 0,
      command: () => this.store.toggleStyle(style, b.value),
    }))
  })

  ensureLoaded(): void {
    this.store.ensureLoaded()
  }

  reloadFilterData(): void {
    this.store.loadFilterData()
  }

  setPriceRange(range: [number, number]): void {
    this.store.setPriceRange(range)
  }

  toggleSize(size: string): void {
    this.store.toggleSize(size)
  }

  toggleColor(color: string): void {
    this.store.toggleColor(color)
  }

  toggleType(productType: string, brand: string): void {
    this.store.toggleType(productType, brand)
  }

  toggleStyle(dressStyle: string, brand: string): void {
    this.store.toggleStyle(dressStyle, brand)
  }

  setCategory(category: string | null): void {
    this._activeCategory.set(null)
    this._activeStyle.set(null)
    this.catalogFacetsStore.clear()
    this.store.setCategory(category)
  }

  setSearchQuery(query: string): void {
    this.store.setSearchQuery(query)
  }

  resetFilters(): void {
    this._activeCategory.set(null)
    this._activeStyle.set(null)
    this.catalogFacetsStore.clear()
    this.store.resetFilters()
  }
}
