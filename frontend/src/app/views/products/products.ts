import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { ProductFilterComponent } from '../../shared/components/products-filter/products-filter';
import { FilterState } from '../../shared/types/products-filter.types';
import { TableBestPrice } from '../../shared/components/table-best-price/table-best-price';
import { TableBestPriceInterface } from '../types/table-best-price.interface';
import { ProductStore } from '../../shared/services/product.store';
import { ProductFilterParams } from '../../shared/product.type';

/**
 * Компонент страницы со списком продуктов
 *
 * Отображает список продуктов с фильтрацией, пагинацией и сортировкой
 * Использует NgRx Signal Store для управления состоянием
 */
@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    ProductFilterComponent,
    TableBestPrice,
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  /** Инжектируем стор продуктов */
  readonly productStore = inject(ProductStore);

  /** Инжектируем Router для обновления URL */
  private readonly router = inject(Router);

  /** Инжектируем ActivatedRoute для чтения query параметров */
  private readonly route = inject(ActivatedRoute);

  /** Название текущей категории для отображения в заголовке */
  categoryName: string = 'All';

  /** Данные для таблицы лучших цен */
  readonly itemsTableBestPrice: TableBestPriceInterface[] = [
    {
      title: 'Pick Any 4- Womens Plain T-shirt Combo',
      price: 1099,
      link: '/#',
    },
    {
      title: 'Pick Any 4 - Plain Womens Boxer Combo',
      price: 1099,
      link: '/#',
    },
    {
      title: 'Pick Any 4 - Women Plain Full Sleeve T-shirt Combo',
      price: 1399,
      link: '/#',
    },
    {
      title: 'Multicolor Checkered Long Casual Shirts for Women',
      price: 499,
      link: '/#',
    },
    {
      title: 'Pick Any 2: Plain Boxy Casual Shirts for Women Combo',
      price: 799,
      link: '/#',
    },
  ];


  /**
   * Инициализация компонента
   * Читает фильтры из URL query параметров и загружает продукты
   */
  ngOnInit() {
    console.log('📦 Products Component: Initializing...');

    // Читаем query параметры из URL
    this.route.queryParams.subscribe(params => {
      console.log('📍 URL Query Params:', params);

      // Если есть параметры фильтрации в URL - применяем их
      if (Object.keys(params).length > 0) {
        const apiFilters = this.parseQueryParamsToFilters(params);
        console.log('🔍 Loading products with filters from URL:', apiFilters);
        this.productStore.loadFilteredProducts(apiFilters);
      } else {
        // Иначе загружаем все продукты
        console.log('📦 Loading all products (no filters in URL)');
        this.productStore.loadProducts();
      }
    });
  }

  /**
   * Преобразует query параметры из URL в ProductFilterParams
   * @param params - query параметры из ActivatedRoute
   * @returns объект фильтров для API
   */
  private parseQueryParamsToFilters(params: any): ProductFilterParams {
    const filters: ProductFilterParams = {
      page: params['page'] ? parseInt(params['page']) : 1,
    };

    if (params['productType']) filters.productType = params['productType'];
    if (params['category']) filters.category = params['category'];
    if (params['dressStyle']) filters.dressStyle = params['dressStyle'];
    if (params['brand']) filters.brand = params['brand'];
    if (params['color']) filters.color = params['color'];
    if (params['size']) filters.size = params['size'];
    if (params['minPrice']) filters.minPrice = parseInt(params['minPrice']);
    if (params['maxPrice']) filters.maxPrice = parseInt(params['maxPrice']);
    if (params['minRating']) filters.minRating = parseInt(params['minRating']);
    if (params['sortBy']) filters.sortBy = params['sortBy'];
    if (params['order']) filters.order = params['order'] as 'asc' | 'desc';
    if (params['limit']) filters.limit = parseInt(params['limit']);

    // Обновляем название категории для заголовка
    this.categoryName = params['productType'] || params['category'] || 'All';

    return filters;
  }

  /**
   * Обработчик изменения фильтров из компонента фильтрации
   * Обновляет URL с query параметрами и загружает отфильтрованные продукты
   *
   * @param filters - состояние фильтров из компонента
   */
  onFilterChange(filters: FilterState) {
    console.log('=== Filter Change Event ===');
    console.log('Received filters:', filters);

    // Конвертируем FilterState в ProductFilterParams для API
    const apiFilters: ProductFilterParams = {
      minPrice: filters.priceRange[0],
      maxPrice: filters.priceRange[1],
      page: 1, // Сбрасываем на первую страницу при изменении фильтров
    };

    // Добавляем типы продуктов (из selectedCategories)
    // Формат: "ProductType:Brand" например "Printed T-shirts:Nike"
    if (filters.selectedCategories.length > 0) {
      const parts = filters.selectedCategories[0].split(':');
      apiFilters.productType = parts[0];

      if (parts.length > 1 && parts[1]) {
        apiFilters.brand = parts[1];
      }

      this.categoryName = parts[0];
    } else {
      this.categoryName = 'All';
    }

    // Добавляем стили одежды
    if (filters.selectedStyles.length > 0) {
      const styleParts = filters.selectedStyles[0].split(':');
      apiFilters.dressStyle = styleParts[0];

      if (styleParts.length > 1 && styleParts[1]) {
        apiFilters.brand = styleParts[1];
      }
    }

    // Добавляем размеры
    if (filters.selectedSizes.length > 0) {
      apiFilters.size = filters.selectedSizes[0];
    }

    // Добавляем цвета
    if (filters.selectedColors.length > 0) {
      apiFilters.color = filters.selectedColors[0];
    }

    console.log('API filters to send:', apiFilters);

    // Обновляем URL с query параметрами
    this.updateUrlWithFilters(apiFilters);

    // Загружаем продукты с новыми фильтрами
    this.productStore.loadFilteredProducts(apiFilters);
  }

  /**
   * Обновляет URL с query параметрами фильтрации
   * Позволяет делиться ссылкой с фильтрами и сохранять состояние при обновлении страницы
   *
   * @param filters - параметры фильтрации
   */
  private updateUrlWithFilters(filters: ProductFilterParams): void {
    // Создаем объект query параметров
    const queryParams: any = {};

    // Добавляем только заполненные фильтры
    if (filters.productType) queryParams.productType = filters.productType;
    if (filters.category) queryParams.category = filters.category;
    if (filters.dressStyle) queryParams.dressStyle = filters.dressStyle;
    if (filters.brand) queryParams.brand = filters.brand;
    if (filters.color) queryParams.color = filters.color;
    if (filters.size) queryParams.size = filters.size;
    if (filters.minPrice !== undefined) queryParams.minPrice = filters.minPrice;
    if (filters.maxPrice !== undefined) queryParams.maxPrice = filters.maxPrice;
    if (filters.minRating) queryParams.minRating = filters.minRating;
    if (filters.sortBy) queryParams.sortBy = filters.sortBy;
    if (filters.order) queryParams.order = filters.order;
    if (filters.page && filters.page !== 1) queryParams.page = filters.page;
    if (filters.limit && filters.limit !== 20) queryParams.limit = filters.limit;

    console.log('📍 Updating URL with query params:', queryParams);

    // Обновляем URL без перезагрузки страницы
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge', // Сохраняем существующие параметры
      replaceUrl: true, // Заменяем текущую запись в истории
    });
  }

  /**
   * Получает список отфильтрованных продуктов для отображения
   * @returns массив продуктов после применения фильтров
   */
  get filteredProducts() {
    return this.productStore.filteredProducts();
  }

  /**
   * Переходит на следующую страницу
   */
  nextPage() {
    this.productStore.nextPage();
  }

  /**
   * Переходит на предыдущую страницу
   */
  prevPage() {
    this.productStore.prevPage();
  }

  /**
   * Переходит на указанную страницу
   * @param page - номер страницы
   */
  goToPage(page: number) {
    this.productStore.setPage(page);
  }

  /**
   * Изменяет размер страницы (количество элементов)
   * @param size - новый размер страницы
   */
  changePageSize(size: number) {
    this.productStore.setPageSize(size);
  }

  /**
   * Сбрасывает все фильтры
   */
  resetFilters() {
    this.productStore.resetFilters();
    this.categoryName = 'All';
  }
}
