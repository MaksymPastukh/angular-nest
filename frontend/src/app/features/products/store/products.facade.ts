import { Injectable, effect, inject, untracked } from '@angular/core'
import { Params, Router } from '@angular/router'
import { CatalogFilterParamsInterface } from '../../catalog/domain/interfaces/catalog-filter-params.interface'
import { CatalogSelectedFiltersInterface } from '../../catalog/domain/interfaces/catalog-selected-filters.interface'
import { ProductFilterStore } from '../../catalog/store/catalog-filter.store'
import { filtersToQueryParams, mapToApiFilters, parseUrlParams } from '../../catalog/utils'
import { ProductStore } from './products.store'

/**
 * ProductsPageFacade - Orchestration Layer
 *
 * Ответственности:
 * 1. Связывает ProductFilterStore (UI) и ProductStore (API)
 * 2. Синхронизирует URL с состоянием фильтров
 * 3. Восстанавливает фильтры из URL при загрузке
 *
 * НЕ хранит состояние - только координирует сторы
 */
@Injectable({ providedIn: 'root' })
export class ProductsPageFacade {
  private readonly productStore = inject(ProductStore)
  private readonly filterStore = inject(ProductFilterStore)
  private readonly router = inject(Router)

  constructor() {
    /**
     * Главный effect: UI фильтры → API фильтры + URL
     *
     * Срабатывает автоматически при изменении filterStore.selected()
     * Signal already tracks changes - no need for manual comparison
     */
    effect(() => {
      // Читаем текущие UI фильтры
      const uiFilters: CatalogSelectedFiltersInterface = this.filterStore.selected()

      // Конвертируем UI → API формат
      const apiFilters: CatalogFilterParamsInterface = mapToApiFilters(uiFilters)

      // Обновляем ProductStore (это триггерит загрузку продуктов)
      // Используем untracked чтобы не создать цикл
      untracked(() => {
        this.productStore.setFilters(apiFilters)
        this.syncUrlWithFilters(apiFilters)
      })
    })
  }

  /**
   * Синхронизирует URL с текущими фильтрами
   * Router.navigate с replaceUrl автоматически дебаунсит повторные вызовы
   */
  private syncUrlWithFilters(apiFilters: CatalogFilterParamsInterface): void {
    const queryParams = filtersToQueryParams(apiFilters)

    void this.router.navigate([], {
      queryParams,
      replaceUrl: true,
    })
  }

  /**
   * Восстанавливает фильтры из URL параметров
   * Вызывается один раз при инициализации компонента
   * Делегирует парсинг UI фильтров в ProductFilterStore
   */
  restoreFiltersFromUrl(params: Params): void {
    if (!params || Object.keys(params).length === 0) {
      return
    }

    // Используем untracked чтобы изменения применились batch'ем
    // и не триггерили effect до завершения всех операций
    untracked(() => {
      // Делегируем восстановление UI фильтров в FilterStore
      this.filterStore.restoreFromQueryParams(params)

      // Восстанавливаем пагинацию/сортировку напрямую в ProductStore
      const parsed: CatalogFilterParamsInterface = parseUrlParams(params)
      if (parsed.page || parsed.limit || parsed.sortBy || parsed.order) {
        this.productStore.setFilters({
          page: parsed.page,
          limit: parsed.limit,
          sortBy: parsed.sortBy,
          order: parsed.order,
        })
      }
    })
  }

  /**
   * Сбрасывает все фильтры
   * Вызывается при уходе со страницы продуктов
   */
  resetFilters(): void {
    this.filterStore.resetFilters()
    this.productStore.resetFilters()
  }

  /* ========================================
     PUBLIC API - Proxy к Store Signals
  ======================================== */

  // Products
  readonly products = this.productStore.products
  readonly isLoading = this.productStore.isLoading

  // Filters (UI)
  readonly filters = this.filterStore.selected
  readonly sizes = this.filterStore.sizes
  readonly colors = this.filterStore.colors
}
