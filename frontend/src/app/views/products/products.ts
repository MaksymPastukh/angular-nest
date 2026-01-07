import { Component, inject, OnInit, OnDestroy, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  /** Router для синхронизации query params */
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  /** Название текущей категории для заголовка */
  categoryName: string = 'All';

  /** Сохранённая позиция скролла */
  private savedScrollPosition = 0;

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

  constructor() {
    /**
     * Effect для сохранения и восстановления позиции скролла
     * Сохраняем позицию перед загрузкой, восстанавливаем после
     */
    effect(() => {
      const isLoading = this.facade.isLoading();

      if (isLoading) {
        // Начинается загрузка - сохраняем текущую позицию
        this.savedScrollPosition = window.scrollY;
      } else {
        // Загрузка завершена - восстанавливаем позицию
        if (this.savedScrollPosition > 0) {
          // Используем setTimeout чтобы дождаться рендеринга
          setTimeout(() => {
            window.scrollTo({
              top: this.savedScrollPosition,
              behavior: 'instant' // Мгновенный скролл без анимации
            });
          }, 0);
        }
      }
    });
  }

  /**
   * Инициализация компонента
   * Восстанавливает фильтры из query params URL или сбрасывает к дефолтным
   */
  ngOnInit(): void {
    // Читаем query params ОДИН РАЗ при инициализации (не подписываемся!)
    // Используем snapshot вместо subscribe чтобы избежать реактивных обновлений
    const params = this.route.snapshot.queryParams;

    const hasParams = Object.keys(params).length > 0;

    if (hasParams) {
      // Есть параметры в URL - восстанавливаем фильтры
      this.facade.restoreFiltersFromUrl(params);
    } else {
      // Нет параметров - сбрасываем фильтры к дефолтным
      this.facade.resetFilters();
    }
  }

  /**
   * Очистка при уходе со страницы
   * Сбрасываем фильтры чтобы при следующем входе начать с чистого листа
   */
  ngOnDestroy(): void {
    this.facade.resetFilters();
  }

  /** Удобный геттер для шаблона, если нужно будет вычислять заголовок по фильтрам */
  get titleCategory(): string {
    const selected = this.facade.filters();

    if (selected.selectedCategories.length > 0) {
      const [raw] = selected.selectedCategories;
      const [productType] = raw.split(':');
      return productType || 'All';
    }

    if (selected.selectedStyles.length > 0) {
      const [raw] = selected.selectedStyles;
      const [style] = raw.split(':');
      return style || 'All';
    }

    return 'All';
  }

  /** Публичный геттер для продуктов (чтобы не обращаться к фасаду в шаблоне по цепочке) */
  get products() {
    return this.facade.products();
  }

  /** Хелперы пагинации */
  nextPage() {
    this.facade.nextPage();
  }

  prevPage() {
    this.facade.prevPage();
  }

  goToPage(page: number) {
    this.facade.setPage(page);
  }

  changePageSize(size: number) {
    this.facade.setPageSize(size);
  }

  resetFilters() {
    this.facade.resetFilters();
    this.categoryName = 'All';
  }
}
