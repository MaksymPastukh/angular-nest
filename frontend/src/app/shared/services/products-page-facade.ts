import { Injectable, effect, inject, untracked } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFilterStore } from '../store/product-filter.store';
import { ProductStore } from '../store/product.store';
import { mapToApiFilters } from './mapToApiFilters';
import type { ProductFilterParams } from '../../views/types/product.type';

@Injectable({ providedIn: 'root' })
export class ProductsPageFacade {
  private productStore = inject(ProductStore);
  private filterStore = inject(ProductFilterStore);
  private router = inject(Router);
  private lastFilterSnapshot = '';
  private isRestoringFromUrl = false;
  private urlUpdateTimer: any = null;

  constructor() {
    /**
     * Связка: любое изменение UI-фильтров → обновление API-фильтров в ProductStore + синхронизация URL
     * Используем JSON-сериализацию для отслеживания реальных изменений
     */
    effect(() => {
      if (!this.filterStore.initialized()) {
        return;
      }

      const selected = this.filterStore.selected();
      const currentSnapshot = JSON.stringify(selected);

      // Проверяем, действительно ли изменились фильтры
      if (currentSnapshot === this.lastFilterSnapshot) {
        return; // Ничего не изменилось, пропускаем
      }

      this.lastFilterSnapshot = currentSnapshot;

      // Используем untracked чтобы setFilters не триггерил этот effect заново
      untracked(() => {
        const apiFilters = mapToApiFilters(selected);
        console.log('🔄 Facade: Updating filters:', apiFilters);
        this.productStore.setFilters(apiFilters);

        // Синхронизируем URL с фильтрами (только если не восстанавливаем из URL)
        if (!this.isRestoringFromUrl) {
          this.updateUrlDebounced(apiFilters);
        }
      });
    });
  }

  /**
   * Обновляет URL с задержкой (debounce)
   * Предотвращает множественные навигации при быстром изменении фильтров (например, слайдер)
   */
  private updateUrlDebounced(apiFilters: ProductFilterParams): void {
    // Очищаем предыдущий таймер
    if (this.urlUpdateTimer) {
      clearTimeout(this.urlUpdateTimer);
    }

    // Устанавливаем новый таймер на 300ms
    this.urlUpdateTimer = setTimeout(() => {
      this.updateUrl(apiFilters);
      this.urlUpdateTimer = null;
    }, 300);
  }

  /**
   * Обновляет URL с текущими фильтрами
   * Убирает дефолтные значения чтобы URL был чище
   */
  private updateUrl(apiFilters: ProductFilterParams): void {
    const queryParams: any = {};

    // Добавляем только те параметры, которые отличаются от дефолтных
    if (apiFilters.productType) queryParams.productType = apiFilters.productType;
    if (apiFilters.category) queryParams.category = apiFilters.category;
    if (apiFilters.dressStyle) queryParams.dressStyle = apiFilters.dressStyle;
    if (apiFilters.brand) queryParams.brand = apiFilters.brand;
    if (apiFilters.color) queryParams.color = apiFilters.color;

    // Size - может быть строкой или массивом
    if (apiFilters.size) {
      queryParams.size = apiFilters.size;
    }

    // Цена - добавляем только если отличается от дефолта [70, 270]
    if (apiFilters.minPrice !== undefined) queryParams.minPrice = apiFilters.minPrice;
    if (apiFilters.maxPrice !== undefined) queryParams.maxPrice = apiFilters.maxPrice;

    if (apiFilters.minRating) queryParams.minRating = apiFilters.minRating;
    if (apiFilters.sortBy && apiFilters.sortBy !== 'createdAt') queryParams.sortBy = apiFilters.sortBy;
    if (apiFilters.order && apiFilters.order !== 'desc') queryParams.order = apiFilters.order;
    if (apiFilters.page && apiFilters.page !== 1) queryParams.page = apiFilters.page;
    if (apiFilters.limit && apiFilters.limit !== 20) queryParams.limit = apiFilters.limit;

    // Обновляем URL без перезагрузки страницы
    this.router.navigate([], {
      queryParams,
      replaceUrl: true,
    })
  }

  restoreFiltersFromUrl(params: any): void {
    if (Object.keys(params).length === 0) {
      return;
    }

    this.isRestoringFromUrl = true;

    // Восстанавливаем цену
    if (params['minPrice'] || params['maxPrice']) {
      const minPrice = params['minPrice'] ? parseInt(params['minPrice']) : 70;
      const maxPrice = params['maxPrice'] ? parseInt(params['maxPrice']) : 270;
      this.filterStore.setPriceRange([minPrice, maxPrice]);
    }

    // Восстанавливаем размеры (может быть строка или массив)
    if (params['size']) {
      const sizes = Array.isArray(params['size']) ? params['size'] : [params['size']];
      sizes.forEach(size => this.filterStore.toggleSize(size));
    }

    // Восстанавливаем цвета (может быть строка или массив)
    if (params['color']) {
      const colors = Array.isArray(params['color']) ? params['color'] : [params['color']];
      colors.forEach(color => this.filterStore.toggleColor(color));
    }

    // Восстанавливаем категорию + бренд
    if (params['productType']) {
      const category = params['productType'];
      const brand = params['brand'] || '';
      this.filterStore.toggleCategory(category, brand);
    }
    // Восстанавливаем стиль + бренд (только если НЕ выбрана категория)
    else if (params['dressStyle']) {
      const style = params['dressStyle'];
      const brand = params['brand'] || '';
      this.filterStore.toggleStyle(style, brand);
    }

    // Восстанавливаем пагинацию и сортировку через ProductStore
    const storeFilters: Partial<ProductFilterParams> = {};
    if (params['page']) storeFilters.page = parseInt(params['page']);
    if (params['limit']) storeFilters.limit = parseInt(params['limit']);
    if (params['sortBy']) storeFilters.sortBy = params['sortBy'];
    if (params['order']) storeFilters.order = params['order'];

    if (Object.keys(storeFilters).length > 0) {
      this.productStore.setFilters(storeFilters);
    }

    // Сбрасываем флаг после небольшой задержки (чтобы effect успел отработать)
    setTimeout(() => {
      this.isRestoringFromUrl = false;
    }, 100);
  }

  /* ---------- PRODUCTS ---------- */

  products = this.productStore.products;
  isLoading = this.productStore.isLoading;
  pagination = this.productStore.pagination;

  /* ---------- FILTERS (UI) ---------- */

  filters = this.filterStore.selected;
  sizes = this.filterStore.sizes;
  colors = this.filterStore.colors;

  resetFilters() {
    // Сбрасываем UI-фильтры (ProductFilterStore)
    this.filterStore.resetFilters();

    // Сбрасываем API-фильтры (ProductStore) - это вызовет загрузку всех продуктов
    this.productStore.resetFilters();
  }

  /* ---------- PAGINATION ---------- */

  nextPage() {
    this.productStore.nextPage();
  }

  prevPage() {
    this.productStore.prevPage();
  }

  setPage(page: number) {
    this.productStore.setPage(page);
  }

  setPageSize(limit: number) {
    this.productStore.setPageSize(limit);
  }
}
