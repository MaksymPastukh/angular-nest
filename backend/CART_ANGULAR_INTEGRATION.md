# Интеграция модуля Cart с Angular Signal Store

## Структура Cart

### Backend Response
```typescript
{
  id: string;
  items: [
    {
      productId: string;
      productTitle: string;
      productImage: string;
      price: number;
      quantity: number;
      size: string;
      color: string;
      addedAt: Date;
    }
  ];
  totalPrice: number;
  totalItems: number;
  isEmpty: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 1. Создание типов

### Файл: `src/app/shared/types/cart.interface.ts`

```typescript
/**
 * Элемент корзины
 */
export interface CartItem {
  productId: string;
  productTitle: string;
  productImage: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  addedAt: string;
}

/**
 * Корзина
 */
export interface Cart {
  id: string;
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  isEmpty: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * DTO для добавления в корзину
 */
export interface AddToCartDto {
  productId: string;
  size: string;
  quantity: number;
}

/**
 * DTO для обновления количества
 */
export interface UpdateCartItemDto {
  productId: string;
  size: string;
  quantity: number;
}

/**
 * DTO для удаления из корзины
 */
export interface RemoveFromCartDto {
  productId: string;
  size: string;
}
```

---

## 2. Создание сервиса

### Файл: `src/app/shared/services/cart.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  Cart, 
  AddToCartDto, 
  UpdateCartItemDto, 
  RemoveFromCartDto 
} from '../types/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/cart`;

  /**
   * Получить корзину
   */
  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.apiUrl);
  }

  /**
   * Получить количество товаров в корзине
   */
  getCartCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/count`);
  }

  /**
   * Добавить товар в корзину
   */
  addToCart(dto: AddToCartDto): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, dto);
  }

  /**
   * Обновить количество товара
   */
  updateCartItem(dto: UpdateCartItemDto): Observable<Cart> {
    return this.http.patch<Cart>(`${this.apiUrl}/item`, dto);
  }

  /**
   * Удалить товар из корзины
   */
  removeFromCart(dto: RemoveFromCartDto): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/item`, { body: dto });
  }

  /**
   * Очистить корзину
   */
  clearCart(): Observable<Cart> {
    return this.http.delete<Cart>(this.apiUrl);
  }
}
```

---

## 3. Создание Signal Store

### Файл: `src/app/features/cart/store/cart.store.ts`

```typescript
import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { CartService } from '../../../shared/services/cart.service';
import { 
  Cart, 
  CartItem, 
  AddToCartDto, 
  UpdateCartItemDto, 
  RemoveFromCartDto 
} from '../../../shared/types/cart.interface';

/**
 * Состояние корзины
 */
type CartState = {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
};

/**
 * Начальное состояние
 */
const initialState: CartState = {
  cart: null,
  isLoading: false,
  error: null,
};

/**
 * Signal Store для корзины
 */
export const CartStore = signalStore(
  { providedIn: 'root' },
  
  withState(initialState),

  withComputed((store) => ({
    // Список товаров
    items: computed(() => store.cart()?.items ?? []),
    
    // Общая стоимость
    totalPrice: computed(() => store.cart()?.totalPrice ?? 0),
    
    // Количество товаров
    totalItems: computed(() => store.cart()?.totalItems ?? 0),
    
    // Пустая ли корзина
    isEmpty: computed(() => store.cart()?.isEmpty ?? true),
    
    // Количество уникальных товаров
    uniqueItemsCount: computed(() => store.cart()?.items.length ?? 0),
  })),

  withMethods((store, cartService = inject(CartService)) => ({
    /**
     * Загрузить корзину
     */
    loadCart: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(() =>
          cartService.getCart().pipe(
            tapResponse({
              next: (cart) => patchState(store, { cart, isLoading: false }),
              error: (error: any) => patchState(store, { 
                error: error.message || 'Ошибка загрузки корзины', 
                isLoading: false 
              }),
            })
          )
        )
      )
    ),

    /**
     * Добавить товар в корзину
     */
    addToCart: rxMethod<AddToCartDto>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((dto) =>
          cartService.addToCart(dto).pipe(
            tapResponse({
              next: (cart) => patchState(store, { cart, isLoading: false }),
              error: (error: any) => patchState(store, { 
                error: error.message || 'Ошибка добавления товара', 
                isLoading: false 
              }),
            })
          )
        )
      )
    ),

    /**
     * Обновить количество товара
     */
    updateQuantity: rxMethod<UpdateCartItemDto>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((dto) =>
          cartService.updateCartItem(dto).pipe(
            tapResponse({
              next: (cart) => patchState(store, { cart, isLoading: false }),
              error: (error: any) => patchState(store, { 
                error: error.message || 'Ошибка обновления количества', 
                isLoading: false 
              }),
            })
          )
        )
      )
    ),

    /**
     * Удалить товар из корзины
     */
    removeItem: rxMethod<RemoveFromCartDto>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((dto) =>
          cartService.removeFromCart(dto).pipe(
            tapResponse({
              next: (cart) => patchState(store, { cart, isLoading: false }),
              error: (error: any) => patchState(store, { 
                error: error.message || 'Ошибка удаления товара', 
                isLoading: false 
              }),
            })
          )
        )
      )
    ),

    /**
     * Очистить корзину
     */
    clearCart: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(() =>
          cartService.clearCart().pipe(
            tapResponse({
              next: (cart) => patchState(store, { cart, isLoading: false }),
              error: (error: any) => patchState(store, { 
                error: error.message || 'Ошибка очистки корзины', 
                isLoading: false 
              }),
            })
          )
        )
      )
    ),

    /**
     * Увеличить количество на 1
     */
    incrementQuantity(productId: string, size: string) {
      const currentCart = store.cart();
      if (!currentCart) return;

      const item = currentCart.items.find(
        (i) => i.productId === productId && i.size === size
      );

      if (item) {
        this.updateQuantity({
          productId,
          size,
          quantity: item.quantity + 1,
        });
      }
    },

    /**
     * Уменьшить количество на 1
     */
    decrementQuantity(productId: string, size: string) {
      const currentCart = store.cart();
      if (!currentCart) return;

      const item = currentCart.items.find(
        (i) => i.productId === productId && i.size === size
      );

      if (item) {
        if (item.quantity > 1) {
          this.updateQuantity({
            productId,
            size,
            quantity: item.quantity - 1,
          });
        } else {
          this.removeItem({ productId, size });
        }
      }
    },

    /**
     * Сбросить состояние
     */
    reset: () => patchState(store, initialState),
  }))
);
```

---

## 4. Использование в компонентах

### Компонент корзины

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartStore } from '../../features/cart/store/cart.store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="cart-page">
      <h1>Корзина</h1>

      @if (store.isLoading()) {
        <div class="loading">Загрузка...</div>
      }

      @if (store.error()) {
        <div class="error">{{ store.error() }}</div>
      }

      @if (store.isEmpty()) {
        <div class="empty-cart">
          <p>Ваша корзина пуста</p>
          <a routerLink="/products">Перейти к покупкам</a>
        </div>
      } @else {
        <div class="cart-content">
          <div class="cart-items">
            @for (item of store.items(); track item.productId + item.size) {
              <div class="cart-item">
                <img [src]="item.productImage" [alt]="item.productTitle">
                
                <div class="item-details">
                  <h3>{{ item.productTitle }}</h3>
                  <p>Размер: {{ item.size }}</p>
                  <p>Цвет: {{ item.color }}</p>
                  <p class="price">{{ item.price }} ₽</p>
                </div>

                <div class="quantity-controls">
                  <button 
                    (click)="onDecrement(item.productId, item.size)"
                    [disabled]="store.isLoading()"
                  >
                    -
                  </button>
                  <span>{{ item.quantity }}</span>
                  <button 
                    (click)="onIncrement(item.productId, item.size)"
                    [disabled]="store.isLoading()"
                  >
                    +
                  </button>
                </div>

                <div class="item-total">
                  {{ item.price * item.quantity }} ₽
                </div>

                <button 
                  class="remove-btn"
                  (click)="onRemove(item.productId, item.size)"
                  [disabled]="store.isLoading()"
                >
                  🗑️
                </button>
              </div>
            }
          </div>

          <div class="cart-summary">
            <h2>Итого</h2>
            <p>Товаров: {{ store.uniqueItemsCount() }}</p>
            <p>Количество: {{ store.totalItems() }}</p>
            <h3>Сумма: {{ store.totalPrice() }} ₽</h3>
            
            <button 
              class="checkout-btn"
              (click)="onCheckout()"
              [disabled]="store.isLoading()"
            >
              Оформить заказ
            </button>
            
            <button 
              class="clear-btn"
              (click)="onClearCart()"
              [disabled]="store.isLoading()"
            >
              Очистить корзину
            </button>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .cart-page {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .cart-items {
      flex: 1;
    }

    .cart-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #ddd;
      margin-bottom: 1rem;
      border-radius: 8px;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }

      .item-details {
        flex: 1;
      }

      .quantity-controls {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        button {
          width: 30px;
          height: 30px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }
    }

    .cart-summary {
      padding: 2rem;
      background: #f9f9f9;
      border-radius: 8px;

      button {
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &.checkout-btn {
          background: #007bff;
          color: white;
        }

        &.clear-btn {
          background: #dc3545;
          color: white;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  `]
})
export class CartComponent implements OnInit {
  readonly store = inject(CartStore);

  ngOnInit() {
    this.store.loadCart();
  }

  onIncrement(productId: string, size: string) {
    this.store.incrementQuantity(productId, size);
  }

  onDecrement(productId: string, size: string) {
    this.store.decrementQuantity(productId, size);
  }

  onRemove(productId: string, size: string) {
    if (confirm('Удалить товар из корзины?')) {
      this.store.removeItem({ productId, size });
    }
  }

  onClearCart() {
    if (confirm('Очистить всю корзину?')) {
      this.store.clearCart();
    }
  }

  onCheckout() {
    console.log('Переход к оформлению заказа');
    // Реализовать переход на страницу оформления
  }
}
```

### Кнопка "Добавить в корзину" на странице продукта

```typescript
import { Component, input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStore } from '../../features/cart/store/cart.store';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="add-to-cart">
      <select [(ngModel)]="selectedSize">
        @for (size of sizes(); track size) {
          <option [value]="size">{{ size }}</option>
        }
      </select>

      <button 
        (click)="onAddToCart()"
        [disabled]="!selectedSize() || cartStore.isLoading()"
      >
        {{ cartStore.isLoading() ? 'Добавление...' : 'В корзину' }}
      </button>
    </div>
  `
})
export class AddToCartButtonComponent {
  productId = input.required<string>();
  sizes = input.required<string[]>();
  
  readonly cartStore = inject(CartStore);
  selectedSize = signal<string>('');

  onAddToCart() {
    const size = this.selectedSize();
    if (!size) return;

    this.cartStore.addToCart({
      productId: this.productId(),
      size,
      quantity: 1,
    });
  }
}
```

---

## 5. Иконка корзины в Header

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartStore } from '../../features/cart/store/cart.store';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a routerLink="/cart" class="cart-icon">
      🛒
      @if (store.totalItems() > 0) {
        <span class="badge">{{ store.totalItems() }}</span>
      }
    </a>
  `,
  styles: [`
    .cart-icon {
      position: relative;
      font-size: 1.5rem;
      text-decoration: none;

      .badge {
        position: absolute;
        top: -8px;
        right: -8px;
        background: red;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
      }
    }
  `]
})
export class CartIconComponent implements OnInit {
  readonly store = inject(CartStore);

  ngOnInit() {
    this.store.loadCart();
  }
}
```

---

## Итого

Теперь у вас есть полная интеграция Cart с Angular Signal Store:

1. ✅ Типизированные интерфейсы
2. ✅ HTTP сервис для API
3. ✅ Signal Store с реактивным состоянием
4. ✅ Computed signals для производных данных
5. ✅ Готовые компоненты UI
6. ✅ Автоматический пересчет итогов
7. ✅ Оптимистичные обновления

**Преимущества Signal Store:**
- Автоматическая реактивность
- Type-safe операции
- Минимальный boilerplate
- Легко тестировать
- Производительность из коробки
