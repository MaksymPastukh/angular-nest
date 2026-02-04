import { computed, inject, Injectable, signal } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { ProductFilterStore } from './catalog-filter.store'

@Injectable({
  providedIn: 'root',
})
export class CatalogFilterFacade {
  private readonly store = inject(ProductFilterStore)

  readonly isLoading = this.store.isLoading
  readonly error = this.store.error
  readonly initialized = this.store.initialized

  readonly sizes = this.store.sizes
  readonly brands = this.store.brands
  readonly colors = this.store.colors
  readonly productTypes = this.store.productTypes
  readonly dressStyles = this.store.dressStyles

  readonly selected = this.store.selected

  readonly selectedColorSet = computed(() => new Set(this.selected().selectedColors))
  readonly selectedSizesSet = computed(() => new Set(this.selected().selectedSizes))

  isColorsSelected = (name: string) => this.selectedColorSet().has(name)
  isSizesSelected = (size: string) => this.selectedSizesSet().has(size)

  private readonly activeCategory = signal<string | null>(null)
  private readonly activeStyle = signal<string | null>(null)

  setActiveCategory(category: string | null): void {
    this.activeCategory.set(category)
    this.activeStyle.set(null)
  }

  setActiveStyle(style: string | null): void {
    this.activeStyle.set(style)
    this.activeCategory.set(null)
  }

  readonly categoryBrandsMenu = computed<MenuItem[]>(() => {
    const category = this.activeCategory()
    const brands = this.brands()

    if (!category || brands.length === 0) return []

    return brands.map((brand) => ({
      label: brand,
      command: () => this.store.toggleType(category, brand),
    }))
  })

  readonly styleBrandsMenu = computed<MenuItem[]>(() => {
    const style = this.activeStyle()
    const brands = this.brands()

    if (!style || brands.length === 0) return []

    return brands.map((brand) => ({
      label: brand,
      command: () => this.store.toggleStyle(style, brand),
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

  setCategory(category: string | null): void {
    this.activeCategory.set(null)
    this.activeStyle.set(null)
    this.store.setCategory(category)
  }

  setSearchQuery(query: string): void {
    this.store.setSearchQuery(query)
  }

  resetFilters(): void {
    this.activeCategory.set(null)
    this.activeStyle.set(null)
    this.store.resetFilters()
  }
}
