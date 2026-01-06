import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of, debounceTime } from 'rxjs';
import { ProductService } from './product.service';
import { ProductType, ProductFilterParams } from '../product.type';

/**
 * Интерфейс состояния стора продуктов
 */
interface ProductState {
  /** Массив всех загруженных продуктов */
  products: ProductType[];

  /** Массив отфильтрованных продуктов */
  filteredProducts: ProductType[];

  /** Текущие параметры фильтрации */
  filters: ProductFilterParams;

  /** Флаг загрузки данных */
  isLoading: boolean;

  /** Текст ошибки, если произошла */
  error: string | null;

  /** Общее количество продуктов (для пагинации) */
  total: number;

  /** Текущая страница */
  currentPage: number;

  /** Количество элементов на странице */
  pageSize: number;

  /** Общее количество страниц */
  totalPages: number;
}

/**
 * Начальное состояние стора
 */
const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  filters: {
    page: 1,
    limit: 20,
    sortBy: 'createdAt',
    order: 'desc',
  },
  isLoading: false,
  error: null,
  total: 0,
  currentPage: 1,
  pageSize: 20,
  totalPages: 0,
};

/**
 * Signal Store для управления состоянием продуктов
 *
 * Предоставляет централизованное управление списком продуктов,
 * фильтрацией, пагинацией и загрузкой данных с сервера
 */
export const ProductStore = signalStore(
  { providedIn: 'root' },

  // Инициализация состояния
  withState(initialState),

  // Вычисляемые свойства (computed signals)
  withComputed((store) => ({
    /**
     * Проверяет, есть ли продукты в списке
     * @returns true если список продуктов не пуст
     */
    hasProducts: computed(() => store.products().length > 0),

    /**
     * Проверяет, есть ли отфильтрованные продукты
     * @returns true если список отфильтрованных продуктов не пуст
     */
    hasFilteredProducts: computed(() => store.filteredProducts().length > 0),

    /**
     * Возвращает количество продуктов
     * @returns количество загруженных продуктов
     */
    productsCount: computed(() => store.products().length),

    /**
     * Возвращает количество отфильтрованных продуктов
     * @returns количество продуктов после применения фильтров
     */
    filteredProductsCount: computed(() => store.filteredProducts().length),

    /**
     * Проверяет, активны ли какие-либо фильтры
     * @returns true если применены фильтры
     */
    hasActiveFilters: computed(() => {
      const filters = store.filters();
      return !!(
        filters.category ||
        filters.productType ||
        filters.dressStyle ||
        filters.brand ||
        filters.minPrice ||
        filters.maxPrice ||
        filters.minRating ||
        filters.color ||
        filters.size ||
        filters.search
      );
    }),

    /**
     * Возвращает информацию о пагинации
     * @returns объект с данными пагинации
     */
    paginationInfo: computed(() => ({
      currentPage: store.currentPage(),
      totalPages: store.totalPages(),
      pageSize: store.pageSize(),
      total: store.total(),
      hasNextPage: store.currentPage() < store.totalPages(),
      hasPrevPage: store.currentPage() > 1,
    })),
  })),

  // Методы для работы со стором
  withMethods((store, productService = inject(ProductService)) => ({
    /**
     * Загружает все продукты с сервера
     * Сбрасывает фильтры и применяет параметры по умолчанию
     */
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => {
          console.log('📦 ProductStore: Loading ALL products (no filters)...');
          patchState(store, { isLoading: true, error: null });
        }),
        switchMap(() =>
          productService.getAllProducts().pipe(
            tap((response) => {
              console.log('✅ ProductStore: Received ALL products from Backend:', response);
              console.log('   - Total products:', response.total);
              console.log('   - Products in response:', response.products?.length ?? 0);
              console.log('   - Current page:', response.page);
              console.log('   - Total pages:', response.totalPages);

              patchState(store, {
                products: response.products,
                filteredProducts: response.products,
                total: response.total,
                currentPage: response.page,
                totalPages: response.totalPages,
                pageSize: response.limit,
                isLoading: false,
                error: null,
              });
            }),
            catchError((error) => {
              console.error('❌ ProductStore: Error loading ALL products:', error);
              patchState(store, {
                products: [], // ✅ Устанавливаем пустой массив при ошибке
                filteredProducts: [], // ✅ Устанавливаем пустой массив при ошибке
                isLoading: false,
                error: error.message || 'Failed to load products',
              });
              return of(null);
            })
          )
        )
      )
    ),

    /**
     * Загружает продукты с применением фильтров
     * @param filters - параметры фильтрации
     */
    loadFilteredProducts: rxMethod<ProductFilterParams>(
      pipe(
        debounceTime(300), // Задержка для оптимизации при быстром вводе
        tap((filters) => {
          console.log('🔍 ProductStore: Loading filtered products with filters:', filters);
          patchState(store, {
            isLoading: true,
            error: null,
            filters: { ...store.filters(), ...filters }
          });
        }),
        switchMap((filters) =>
          productService.getFilteredProducts(filters).pipe(
            tap((response) => {
              console.log('✅ ProductStore: Received response from Backend:', response);
              console.log('   - Total products:', response.total);
              console.log('   - Products in response:', response.products?.length ?? 0);
              console.log('   - Current page:', response.page);
              console.log('   - Total pages:', response.totalPages);

              patchState(store, {
                filteredProducts: response.products,
                total: response.total,
                currentPage: response.page,
                totalPages: response.totalPages,
                pageSize: response.limit,
                isLoading: false,
                error: null,
              });
            }),
            catchError((error) => {
              console.error('❌ ProductStore: Error loading filtered products:', error);
              patchState(store, {
                filteredProducts: [], // ✅ Устанавливаем пустой массив при ошибке
                isLoading: false,
                error: error.message || 'Failed to filter products',
              });
              return of(null);
            })
          )
        )
      )
    ),

    /**
     * Загружает один продукт по ID
     * @param id - идентификатор продукта
     */
    loadProductById: rxMethod<string>(
      pipe(
        tap(() => {
          patchState(store, { isLoading: true, error: null });
        }),
        switchMap((id) =>
          productService.getProductById(id).pipe(
            tap((product) => {
              // Добавляем или обновляем продукт в списке
              const currentProducts = store.products();
              const existingIndex = currentProducts.findIndex(p => p._id === product._id);

              if (existingIndex >= 0) {
                // Обновляем существующий продукт
                const updatedProducts = [...currentProducts];
                updatedProducts[existingIndex] = product;
                patchState(store, {
                  products: updatedProducts,
                  isLoading: false
                });
              } else {
                // Добавляем новый продукт
                patchState(store, {
                  products: [...currentProducts, product],
                  isLoading: false
                });
              }
            }),
            catchError((error) => {
              patchState(store, {
                isLoading: false,
                error: error.message || 'Failed to load product',
              });
              return of(null);
            })
          )
        )
      )
    ),

    /**
     * Устанавливает фильтры для продуктов
     * @param filters - новые параметры фильтрации
     */
    setFilters(filters: Partial<ProductFilterParams>) {
      const updatedFilters = { ...store.filters(), ...filters };
      patchState(store, { filters: updatedFilters });
    },

    /**
     * Сбрасывает все фильтры к начальным значениям
     */
    resetFilters() {
      patchState(store, {
        filters: initialState.filters,
        filteredProducts: store.products()
      });
    },

    /**
     * Устанавливает номер текущей страницы
     * @param page - номер страницы
     */
    setPage(page: number) {
      const filters = { ...store.filters(), page };
      patchState(store, { filters });
    },

    /**
     * Переходит на следующую страницу
     */
    nextPage() {
      const currentPage = store.currentPage();
      const totalPages = store.totalPages();
      if (currentPage < totalPages) {
        const filters = { ...store.filters(), page: currentPage + 1 };
        patchState(store, { filters });
      }
    },

    /**
     * Переходит на предыдущую страницу
     */
    prevPage() {
      const currentPage = store.currentPage();
      if (currentPage > 1) {
        const filters = { ...store.filters(), page: currentPage - 1 };
        patchState(store, { filters });
      }
    },

    /**
     * Устанавливает размер страницы (количество элементов)
     * @param limit - количество элементов на странице
     */
    setPageSize(limit: number) {
      const filters = { ...store.filters(), limit, page: 1 };
      patchState(store, { filters });
    },

    /**
     * Устанавливает параметры сортировки
     * @param sortBy - поле для сортировки
     * @param order - направление сортировки
     */
    setSorting(sortBy: ProductFilterParams['sortBy'], order: 'asc' | 'desc') {
      const filters = { ...store.filters(), sortBy, order };
      patchState(store, { filters });
    },

    /**
     * Выполняет текстовый поиск по продуктам
     * @param searchQuery - поисковый запрос
     */
    searchProducts(searchQuery: string) {
      const filters = { ...store.filters(), search: searchQuery, page: 1 };
      patchState(store, { filters });
    },

    /**
     * Очищает состояние стора
     */
    clearStore() {
      patchState(store, initialState);
    },

    /**
     * Устанавливает состояние ошибки
     * @param error - текст ошибки
     */
    setError(error: string | null) {
      patchState(store, { error });
    },
  })),

  // Lifecycle hooks
  withHooks({
    /**
     * Хук инициализации стора
     * Вызывается при создании экземпляра стора
     */
    onInit(_store) {
      console.log('ProductStore initialized');
      // Можно загрузить начальные данные
      // store.loadProducts();
    },

    /**
     * Хук уничтожения стора
     * Вызывается при уничтожении экземпляра
     */
    onDestroy(_store) {
      console.log('ProductStore destroyed');
    },
  })
);

