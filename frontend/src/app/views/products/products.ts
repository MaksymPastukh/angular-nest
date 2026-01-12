import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { ProductFilterComponent } from '../../shared/components/products-filter/products-filter';
import { TableBestPrice } from '../../shared/components/table-best-price/table-best-price';
import { TableBestPriceInterface } from '../types/table-best-price.interface';
import { ProductsPageFacade } from '../../shared/services/products-page-facade';

/**
 * Компонент страницы со списком продуктов
 *
 * Отображает список продуктов с фильтрацией, пагинацией и сортировкой
 * Использует NgRx Signal Store для управления состоянием
 */
@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, ProductFilterComponent, TableBestPrice],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit, OnDestroy {
  /** Фасад страницы продуктов (продукты + фильтры + пагинация) */
  readonly facade = inject(ProductsPageFacade);

  /** Route для получения query params при инициализации */
  private readonly route = inject(ActivatedRoute);

  /** Subscription на query params для корректной отписки */
  private queryParamsSubscription?: Subscription;


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
   * Подписывается на изменения query params для обработки навигации между категориями
   */
  ngOnInit(): void {
    // Подписываемся на изменения query params
    // Это необходимо для обновления продуктов при переходе Men → Women и т.д.
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        // Есть параметры в URL → восстанавливаем фильтры
        this.facade.restoreFiltersFromUrl(params);
      } else {
        // Нет параметров → сбрасываем фильтры (показываем все продукты)
        this.facade.resetFilters();
      }
    });
  }

  ngOnDestroy(): void {
    // Отписываемся от queryParams
    this.queryParamsSubscription?.unsubscribe();

    // Сбрасываем фильтры при уходе со страницы
    this.facade.resetFilters();
  }

  /** Геттер для заголовка категории на основе активных фильтров */
  get titleCategory(): string {
    const selected = this.facade.filters();

    // Приоритет 1: Основная категория (Men, Women, Combos, Joggers)
    if (selected.selectedCategory) {
      return selected.selectedCategory;
    }

    // Приоритет 2: Подкатегория (Product Type)
    if (selected.selectedCategories.length > 0) {
      const [raw] = selected.selectedCategories;
      const [productType] = raw.split(':');
      return productType || 'All';
    }

    // Приоритет 3: Стиль
    if (selected.selectedStyles.length > 0) {
      const [raw] = selected.selectedStyles;
      const [style] = raw.split(':');
      return style || 'All';
    }

    return 'All';
  }

  /** Публичный геттер для продуктов */
  get products() {
    return this.facade.products();
  }
}
