import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { AutoComplete } from 'primeng/autocomplete'
import { FormsModule } from '@angular/forms'
import { Select } from 'primeng/select'
import { PrimeTemplate } from 'primeng/api'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, tap, switchMap, catchError, of, debounceTime } from 'rxjs'
import { AuthStore } from '../../../core/auth/store/auth.store'
import { ProductService } from '../../services/product.service'
import { ProductType } from '../../../views/types/product.type'
import { ImageUrlPipe } from '../../pipes/image-url.pipe'

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    AutoComplete,
    FormsModule,
    RouterLinkActive,
    Select,
    PrimeTemplate,
    ImageUrlPipe,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly authStore = inject(AuthStore)
  private readonly router = inject(Router)
  private readonly productService = inject(ProductService)

  // Signals для реактивного состояния
  readonly searchQuery = signal<string>('')
  readonly searchSuggestions = signal<ProductType[]>([])
  readonly isSearching = signal<boolean>(false)

  languages = [
    { label: 'English (United States)', value: 'en-US' },
    { label: 'Russian (Russia)', value: 'ru-RU' },
  ]

  selectedLanguage = 'en-US'

  /**
   * Реактивный метод поиска с использованием rxMethod
   * Автоматически управляет subscriptions и debounce
   */
  private readonly performSearch = rxMethod<string>(
    pipe(
      // Debounce для уменьшения количества запросов
      debounceTime(300),
      tap(() => this.isSearching.set(true)),
      switchMap((query) => {
        // Проверка минимальной длины
        if (!query || query.length < 2) {
          this.searchSuggestions.set([])
          this.isSearching.set(false)
          return of(null)
        }

        // API запрос
        return this.productService
          .getFilteredProducts({
            search: query,
            limit: 10,
            page: 1,
          })
          .pipe(
            tap((response) => {
              this.searchSuggestions.set(response.products)
              this.isSearching.set(false)
            }),
            catchError((error) => {
              console.error('[HeaderSearch] Error:', error)
              this.searchSuggestions.set([])
              this.isSearching.set(false)
              return of(null)
            })
          )
      })
    )
  )

  /**
   * Метод поиска продуктов для autocomplete
   * Вызывается при вводе текста (минимум 2 символа)
   */
  searchProducts(event: any): void {
    const query = event.query.trim()
    // Используем rxMethod для реактивного поиска
    this.performSearch(query)
  }

  /**
   * Обработчик выбора продукта из dropdown
   * Навигирует на страницу конкретного продукта
   */
  onProductSelect(event: any): void {
    const product = event.value as ProductType

    if (product?.id) {
      console.log('[HeaderSearch] Selected product:', product)
      console.log('[HeaderSearch] Selected product:', product.id)
      // Навигация на страницу продукта
      this.router.navigate(['/product', product.id])

      // Очищаем поле поиска после выбора
      this.searchQuery.set('')
      this.searchSuggestions.set([])
    }
  }
}
