import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { ProductFilterParams, ProductType } from '../../detail/types/product.interface'
import { ProductsResponse } from '../../detail/types/products-response.interface'
/**
 * Сервис для работы с продуктами
 *
 * Предоставляет методы для взаимодействия с backend API:
 * - CRUD операции с продуктами
 * - Фильтрация и поиск
 * - Получение данных для фильтров
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /** HTTP клиент для выполнения запросов */
  private readonly http = inject(HttpClient)

  /** Базовый URL API из окружения */
  private readonly apiUrl = `${environment.api}products`

  /**
   * Получает все продукты без фильтрации
   * @returns Observable с ответом API, содержащим массив продуктов и метаданные пагинации
   */
  getAllProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.apiUrl)
  }

  /**
   * Получает продукты с применением фильтров, сортировки и пагинации
   * @param filters - параметры фильтрации (категория, цена, рейтинг, размер и т.д.)
   * @returns Observable с отфильтрованными продуктами и метаданными пагинации
   */
  getFilteredProducts(filters: ProductFilterParams): Observable<ProductsResponse> {
    // Создаем параметры запроса, исключая пустые значения
    let params = new HttpParams()

    // Добавляем параметры только если они определены
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        // Если значение это массив - добавляем каждый элемент отдельно
        if (Array.isArray(value)) {
          value.forEach((item: string) => {
            params = params.append(key, item.toString())
          })
        } else {
          params = params.append(key, String(value))
        }
      }
    })

    return this.http.get<ProductsResponse>(this.apiUrl, { params })
  }

  /**
   * Получает один продукт по его ID
   * @param id - уникальный идентификатор продукта
   * @returns Observable с данными продукта
   */
  getProductById(id: string): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.apiUrl}/${id}`)
  }

  /**
   * Создает новый продукт (требуется авторизация)
   * @param product - данные нового продукта
   * @returns Observable с созданным продуктом
   */
  createProduct(product: Omit<ProductType, '_id'>): Observable<ProductType> {
    return this.http.post<ProductType>(this.apiUrl, product)
  }

  /**
   * Загружает изображение продукта на сервер
   * @param file - файл изображения
   * @returns Observable с путем к загруженному изображению
   */
  uploadImage(file: File): Observable<{ imagePath: string }> {
    const formData = new FormData()
    formData.append('image', file)

    return this.http.post<{ imagePath: string }>(`${this.apiUrl}/upload-image`, formData)
  }

  /**
   * Обновляет существующий продукт (требуется авторизация)
   * @param id - идентификатор продукта
   * @param product - обновленные данные продукта (частичное обновление)
   * @returns Observable с обновленным продуктом
   */
  updateProduct(id: string, product: Partial<ProductType>): Observable<ProductType> {
    return this.http.patch<ProductType>(`${this.apiUrl}/${id}`, product)
  }

  /**
   * Удаляет продукт (требуется авторизация)
   * @param id - идентификатор продукта для удаления
   * @returns Observable с результатом удаления
   */
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  // ===== Методы для получения данных фильтров =====

  /**
   * Получает список всех уникальных категорий
   * @returns Observable с массивом категорий (Shop All, Men, Women, Combos, Joggers)
   */
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/categories`)
  }

  /**
   * Получает список всех уникальных типов товаров
   * @returns Observable с массивом типов (Tops, Printed T-shirts, Plain T-shirts, и т.д.)
   */
  getProductTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/product-types`)
  }

  /**
   * Получает список всех уникальных стилей одежды
   * @returns Observable с массивом стилей (Classic, Casual, Business, Sport, и т.д.)
   */
  getDressStyles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/dress-styles`)
  }

  /**
   * Получает список всех уникальных брендов
   * @returns Observable с массивом брендов
   */
  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/brands`)
  }

  /**
   * Получает список всех уникальных цветов
   * @returns Observable с массивом цветов
   */
  getColors(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/colors`)
  }

  /**
   * Получает список всех уникальных размеров
   * @returns Observable с массивом размеров
   */
  getSizes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/sizes`)
  }

  // ===== Дополнительные методы для удобства =====

  /**
   * Выполняет текстовый поиск продуктов по названию и описанию
   * @param searchQuery - поисковый запрос
   * @param additionalFilters - дополнительные фильтры (опционально)
   * @returns Observable с результатами поиска
   */
  searchProducts(
    searchQuery: string,
    additionalFilters?: Partial<ProductFilterParams>
  ): Observable<ProductsResponse> {
    const filters: ProductFilterParams = {
      search: searchQuery,
      ...(additionalFilters ?? {}),
    }
    return this.getFilteredProducts(filters)
  }

  /**
   * Получает продукты с минимальным рейтингом
   * @param minRating - минимальный рейтинг (0-5)
   * @param limit - количество продуктов (по умолчанию 20)
   * @returns Observable с топовыми продуктами
   */
  getTopRatedProducts(minRating: number = 4.5, limit: number = 20): Observable<ProductsResponse> {
    return this.getFilteredProducts({
      minRating,
      sortBy: 'rating',
      order: 'desc',
      limit,
    })
  }

  /**
   * Получает новинки (последние добавленные товары)
   * @param limit - количество продуктов (по умолчанию 15)
   * @returns Observable с новинками
   */
  getNewArrivals(limit: number = 15): Observable<ProductsResponse> {
    return this.getFilteredProducts({
      sortBy: 'createdAt',
      order: 'desc',
      limit,
    })
  }

  /**
   * Получает продукты в заданном ценовом диапазоне
   * @param minPrice - минимальная цена
   * @param maxPrice - максимальная цена
   * @param additionalFilters - дополнительные фильтры (опционально)
   * @returns Observable с продуктами в ценовом диапазоне
   */
  getProductsByPriceRange(
    minPrice: number,
    maxPrice: number,
    additionalFilters?: Partial<ProductFilterParams>
  ): Observable<ProductsResponse> {
    return this.getFilteredProducts({
      minPrice,
      maxPrice,
      ...additionalFilters,
    })
  }

  /**
   * Получает самые дешевые товары
   * @param maxPrice - максимальная цена
   * @param limit - количество продуктов (по умолчанию 10)
   * @returns Observable с дешевыми товарами
   */
  getCheapProducts(maxPrice: number = 2000, limit: number = 10): Observable<ProductsResponse> {
    return this.getFilteredProducts({
      maxPrice,
      sortBy: 'price',
      order: 'asc',
      limit,
    })
  }

  /**
   * Добавляет или удаляет продукт из избранного
   * @param productId - идентификатор продукта
   * @returns Observable с обновленным продуктом
   */
  toggleLike(productId: string): Observable<ProductType> {
    return this.http.post<ProductType>(`${this.apiUrl}/${productId}/like`, {})
  }

  /**
   * Получает список избранных продуктов пользователя
   * @returns Observable с массивом избранных продуктов
   */
  getLikedProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.apiUrl}/liked/me`)
  }
}
