# Wishlist Module

Production-ready wishlist сервис для e-commerce приложения с упором на производительность, надежность и UX.

## 📋 Оглавление

- [Описание](#описание)
- [Возможности](#возможности)
- [Архитектура](#архитектура)
- [API Endpoints](#api-endpoints)
- [Структура данных](#структура-данных)
- [Производительность](#производительность)
- [Примеры использования](#примеры-использования)
- [Интеграция с Angular 21+ NgRx Signal Store](#интеграция-с-angular-21-ngrx-signal-store)

---

## Описание

Wishlist модуль предоставляет user-centric "saved items" сервис для сохранения избранных товаров пользователями. Модуль разработан с учетом следующих приоритетов:

- **UX**: Быстрые операции, отсутствие дубликатов, синхронизация между устройствами
- **Надежность**: Идемпотентные операции, обработка конкурентных запросов
- **Масштабируемость**: Cursor-based пагинация, батч-операции, оптимизированные индексы

---

## Возможности

### ✅ MVP Features

- ✨ **Добавление/удаление товаров** - идемпотентные операции
- 📄 **Пагинация** - cursor-based для высокой производительности
- 🔍 **Батч-проверка** - для отображения "сердечек" на листинге
- 🎯 **Обогащение данными** - автоматическая загрузка информации о продуктах
- 🔒 **Безопасность** - JWT авторизация на всех эндпоинтах
- 🛡️ **Rate limiting** - защита от спама и злоупотреблений

### 🚀 Production Ready

- ⚡ **MongoDB индексы** - составные индексы для оптимальной производительности
- 🔄 **Идемпотентность** - безопасные повторные запросы
- 📊 **Счетчик элементов** - быстрое получение количества
- 🧹 **Очистка списка** - удаление всех элементов одним запросом
- 📝 **Полная типизация** - TypeScript без `any`

---

## Архитектура

### Модульная структура

```
wishlist/
├── dto/                              # Data Transfer Objects
│   ├── add-wishlist-item.dto.ts     # Валидация добавления
│   ├── get-wishlist-query.dto.ts    # Параметры пагинации
│   └── contains-query.dto.ts        # Батч-проверка
├── interfaces/                       # TypeScript интерфейсы
│   └── wishlist.interface.ts        # Все интерфейсы ответов
├── schemas/                          # MongoDB схемы
│   └── wishlist-item.schema.ts      # Схема элемента wishlist
├── wishlist.controller.ts            # REST API контроллер
├── wishlist.service.ts               # Бизнес-логика
├── wishlist.module.ts                # NestJS модуль
├── index.ts                          # Экспорты
└── README.md                         # Документация
```

### Подход к хранению данных

**Выбрана модель**: Отдельная коллекция `wishlist_items`

**Преимущества**:
- Отличная производительность пагинации
- Простое масштабирование (несколько списков, приоритеты)
- Независимость от коллекции пользователей
- Гибкость в добавлении новых полей (заметки, категории)

---

## API Endpoints

Все эндпоинты требуют JWT авторизацию через заголовок `Authorization: Bearer <token>`.

### 1. Получить wishlist

```http
GET /wishlist?cursor=<cursor>&limit=<limit>
```

**Query параметры:**
- `cursor` (optional) - Курсор для следующей страницы
- `limit` (optional, default: 20, max: 100) - Количество элементов

**Response:** `200 OK`
```json
{
  "items": [
    {
      "productId": "507f1f77bcf86cd799439011",
      "addedAt": "2026-02-24T10:30:00.000Z",
      "source": "catalog",
      "note": "Купить на распродаже",
      "product": {
        "_id": "507f1f77bcf86cd799439011",
        "title": "Nike Air Max",
        "brand": "Nike",
        "price": 8999,
        "rating": 4.5,
        "images": ["/images/products/nike-air-1.jpg"],
        "category": "Men",
        "isHidden": false,
        "inStock": true
      },
      "status": "available"
    }
  ],
  "nextCursor": "MTcwODc3MDYwMDAwMF81MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTE=",
  "hasMore": true,
  "total": 42
}
```

**Сортировка:** По дате добавления (новые первые - `addedAt DESC`)

**Статусы товара:**
- `available` - товар доступен, данные загружены
- `deleted_or_hidden` - товар удален или скрыт, `product: null`

---

### 2. Добавить товар в wishlist

```http
PUT /wishlist/items/:productId
```

**Body (опционально):**
```json
{
  "source": "catalog",
  "note": "Хочу купить на распродаже"
}
```

**Параметры body:**
- `source` (optional) - Источник: `catalog` | `product` | `recommendation`
- `note` (optional, max: 500 символов) - Заметка пользователя

**Response:** `200 OK`
```json
{
  "productId": "507f1f77bcf86cd799439011",
  "addedAt": "2026-02-24T10:30:00.000Z",
  "isNew": true
}
```

**Поля ответа:**
- `isNew: true` - товар добавлен впервые (201 Created семантика)
- `isNew: false` - товар уже был в списке (идемпотентность)

**Errors:**
- `404 Not Found` - товар с указанным ID не существует
- `400 Bad Request` - невалидный ObjectId

**Rate Limit:** 30 запросов в минуту

**Идемпотентность:** ✅ Повторные запросы безопасны, дубликаты не создаются

---

### 3. Удалить товар из wishlist

```http
DELETE /wishlist/items/:productId
```

**Response:** `204 No Content`

**Errors:**
- `400 Bad Request` - невалидный ObjectId

**Rate Limit:** 30 запросов в минуту

**Идемпотентность:** ✅ Удаление несуществующего товара также возвращает 204

---

### 4. Очистить весь wishlist

```http
DELETE /wishlist
```

**Response:** `204 No Content`

**Rate Limit:** 5 запросов в минуту

---

### 5. Проверить наличие товаров (Batch)

```http
GET /wishlist/contains?ids=id1,id2,id3
```

**Query параметры:**
- `ids` (required) - Массив или строка с разделителем запятой

**Примеры:**
```
/wishlist/contains?ids=507f1f77bcf86cd799439011,507f191e810c19729de860ea
/wishlist/contains?ids[]=507f1f77bcf86cd799439011&ids[]=507f191e810c19729de860ea
```

**Response:** `200 OK`
```json
{
  "507f1f77bcf86cd799439011": true,
  "507f191e810c19729de860ea": false,
  "507f191e810c19729de860eb": true
}
```

**Use case:** Отображение "сердечек" на листинге каталога без лишних запросов

---

### 6. Получить количество товаров

```http
GET /wishlist/count
```

**Response:** `200 OK`
```json
{
  "count": 42
}
```

**Use case:** Отображение бейджа с количеством в header

---

## Структура данных

### MongoDB Schema: `wishlist_items`

```typescript
{
  _id: ObjectId,                  // MongoDB ID
  userId: ObjectId,               // ID пользователя (ref: User)
  productId: ObjectId,            // ID продукта (ref: Product)
  addedAt: Date,                  // Дата добавления
  source?: 'catalog' | 'product' | 'recommendation',  // Источник
  note?: string                   // Заметка (max 500 символов)
}
```

### Индексы

1. **Unique Compound Index:**
   ```javascript
   { userId: 1, productId: 1 } - unique
   ```
   - Гарантирует отсутствие дубликатов
   - Быстрая проверка существования

2. **Pagination Index:**
   ```javascript
   { userId: 1, addedAt: -1 }
   ```
   - Оптимизация пагинации
   - Быстрая сортировка по дате

3. **Single Indexes:**
   - `userId` - для удаления всех записей пользователя
   - `productId` - для батч-проверки
   - `addedAt` - для сортировки

---

## Производительность

### Оптимизации

#### 1. Cursor-based пагинация
```typescript
// Вместо offset-based (медленно на больших данных):
// .skip(page * limit).limit(limit)

// Используем cursor:
// .find({ addedAt: { $lt: cursorDate }, _id: { $lt: cursorId } })
```

**Преимущества:**
- O(1) производительность на любой странице
- Стабильные результаты при добавлении новых элементов
- Меньше нагрузки на базу данных

#### 2. Batch enrichment
```typescript
// ❌ Плохо: N+1 запросов
for (const item of wishlistItems) {
  item.product = await productModel.findById(item.productId);
}

// ✅ Хорошо: 1 запрос для всех
const products = await productModel.find({ 
  _id: { $in: productIds } 
});
```

#### 3. Lean queries
```typescript
// Возвращаем plain objects вместо Mongoose Documents
.lean().exec()
```

**Выигрыш:** ~50% меньше памяти и времени

### Метрики для мониторинга

Рекомендуется отслеживать:
- `p95/p99 latency` для каждого эндпоинта
- `error rate` (особенно на add/remove)
- `cache hit rate` (если используется Redis)
- `database query time`

---

## Примеры использования

### Пример 1: Добавление товара с источником

```typescript
// Из карточки товара
fetch('/wishlist/items/507f1f77bcf86cd799439011', {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    source: 'product',
    note: 'Подарок на день рождения'
  })
});
```

### Пример 2: Загрузка wishlist с пагинацией

```typescript
async function loadWishlist(cursor?: string) {
  const response = await fetch(
    `/wishlist?limit=20${cursor ? `&cursor=${cursor}` : ''}`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );
  
  const data = await response.json();
  
  // Отображаем items
  displayItems(data.items);
  
  // Если есть еще страницы, показываем кнопку "Загрузить еще"
  if (data.hasMore) {
    showLoadMoreButton(data.nextCursor);
  }
}
```

### Пример 3: Отображение "сердечек" на каталоге

```typescript
async function syncWishlistHearts(productIds: string[]) {
  const response = await fetch(
    `/wishlist/contains?ids=${productIds.join(',')}`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );
  
  const contains = await response.json();
  
  // Обновляем UI для каждого товара
  productIds.forEach(id => {
    const heartIcon = document.querySelector(`[data-product-id="${id}"] .heart`);
    if (contains[id]) {
      heartIcon.classList.add('active');
    }
  });
}
```

---

## Интеграция с Angular 21+ NgRx Signal Store

### Установка зависимостей

```bash
npm install @ngrx/signals @ngrx/rxjs-interop
```

### Структура файлов

```
src/app/features/wishlist/
├── data-access/
│   └── wishlist.store.ts           # Signal Store
├── ui/
│   ├── wishlist-page/              # Страница wishlist
│   ├── wishlist-button/            # Кнопка добавления/удаления
│   └── wishlist-badge/             # Счетчик в header
├── models/
│   └── wishlist.model.ts           # TypeScript модели
└── wishlist.routes.ts              # Роуты
```

---

### 1. Определение моделей

```typescript
// src/app/features/wishlist/models/wishlist.model.ts

export enum WishlistItemSource {
  CATALOG = 'catalog',
  PRODUCT = 'product',
  RECOMMENDATION = 'recommendation',
}

export interface WishlistItem {
  productId: string;
  addedAt: Date;
  source?: WishlistItemSource;
  note?: string;
}

export interface WishlistProductData {
  _id: string;
  title: string;
  brand: string;
  price: number;
  rating: number;
  images: string[];
  category: string;
  isHidden: boolean;
  inStock: boolean;
}

export interface EnrichedWishlistItem extends WishlistItem {
  product: WishlistProductData | null;
  status: 'available' | 'deleted_or_hidden';
}

export interface GetWishlistResponse {
  items: EnrichedWishlistItem[];
  nextCursor: string | null;
  hasMore: boolean;
  total: number;
}

export interface AddWishlistItemResponse {
  productId: string;
  addedAt: Date;
  isNew: boolean;
}

export interface ContainsResponse {
  [productId: string]: boolean;
}
```

---

### 2. Создание Signal Store

```typescript
// src/app/features/wishlist/data-access/wishlist.store.ts

import { computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  AddWishlistItemResponse,
  ContainsResponse,
  EnrichedWishlistItem,
  GetWishlistResponse,
  WishlistItemSource,
} from '../models/wishlist.model';

// Состояние Store
interface WishlistState {
  items: EnrichedWishlistItem[];
  nextCursor: string | null;
  hasMore: boolean;
  total: number;
  isLoading: boolean;
  error: string | null;
  // Кэш для быстрой проверки "в wishlist или нет"
  itemsMap: Record<string, boolean>;
}

// Начальное состояние
const initialState: WishlistState = {
  items: [],
  nextCursor: null,
  hasMore: false,
  total: 0,
  isLoading: false,
  error: null,
  itemsMap: {},
};

export const WishlistStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  
  // Computed signals (селекторы)
  withComputed((store) => ({
    // Количество товаров в wishlist
    count: computed(() => store.total()),
    
    // Есть ли товары
    isEmpty: computed(() => store.total() === 0),
    
    // Проверка наличия товара по ID
    isInWishlist: computed(() => (productId: string) => 
      store.itemsMap()[productId] ?? false
    ),
    
    // Доступные товары (без deleted/hidden)
    availableItems: computed(() => 
      store.items().filter(item => item.status === 'available')
    ),
  })),
  
  // Методы (actions)
  withMethods((store, http = inject(HttpClient)) => ({
    
    /**
     * Загрузить wishlist с пагинацией
     */
    load: rxMethod<{ cursor?: string; reset?: boolean }>(
      pipe(
        tap(({ reset }) => {
          patchState(store, { 
            isLoading: true, 
            error: null,
            ...(reset && { items: [], itemsMap: {} })
          });
        }),
        switchMap(({ cursor }) =>
          http.get<GetWishlistResponse>(
            `${environment.apiUrl}/wishlist`,
            {
              params: {
                ...(cursor && { cursor }),
                limit: 20,
              },
            }
          ).pipe(
            tapResponse({
              next: (response) => {
                // Обновляем map для быстрой проверки
                const newItemsMap = { ...store.itemsMap() };
                response.items.forEach(item => {
                  newItemsMap[item.productId] = true;
                });
                
                patchState(store, {
                  items: cursor 
                    ? [...store.items(), ...response.items]
                    : response.items,
                  nextCursor: response.nextCursor,
                  hasMore: response.hasMore,
                  total: response.total,
                  itemsMap: newItemsMap,
                  isLoading: false,
                });
              },
              error: (error: Error) => {
                patchState(store, {
                  error: error.message,
                  isLoading: false,
                });
              },
            })
          )
        )
      )
    ),

    /**
     * Загрузить следующую страницу
     */
    loadMore() {
      const cursor = store.nextCursor();
      if (cursor && !store.isLoading()) {
        store.load({ cursor });
      }
    },

    /**
     * Добавить товар в wishlist
     */
    addItem: rxMethod<{
      productId: string;
      source?: WishlistItemSource;
      note?: string;
    }>(
      pipe(
        switchMap(({ productId, source, note }) =>
          http.put<AddWishlistItemResponse>(
            `${environment.apiUrl}/wishlist/items/${productId}`,
            { source, note }
          ).pipe(
            tapResponse({
              next: (response) => {
                // Оптимистичное обновление: добавляем в map
                patchState(store, {
                  itemsMap: {
                    ...store.itemsMap(),
                    [productId]: true,
                  },
                  total: response.isNew ? store.total() + 1 : store.total(),
                });
              },
              error: (error: Error) => {
                patchState(store, { error: error.message });
              },
            })
          )
        )
      )
    ),

    /**
     * Удалить товар из wishlist
     */
    removeItem: rxMethod<string>(
      pipe(
        switchMap((productId) =>
          http.delete(`${environment.apiUrl}/wishlist/items/${productId}`).pipe(
            tapResponse({
              next: () => {
                // Удаляем из состояния
                const newItemsMap = { ...store.itemsMap() };
                delete newItemsMap[productId];
                
                patchState(store, {
                  items: store.items().filter(item => item.productId !== productId),
                  itemsMap: newItemsMap,
                  total: Math.max(0, store.total() - 1),
                });
              },
              error: (error: Error) => {
                patchState(store, { error: error.message });
              },
            })
          )
        )
      )
    ),

    /**
     * Очистить весь wishlist
     */
    clear: rxMethod<void>(
      pipe(
        switchMap(() =>
          http.delete(`${environment.apiUrl}/wishlist`).pipe(
            tapResponse({
              next: () => {
                patchState(store, {
                  items: [],
                  itemsMap: {},
                  total: 0,
                  nextCursor: null,
                  hasMore: false,
                });
              },
              error: (error: Error) => {
                patchState(store, { error: error.message });
              },
            })
          )
        )
      )
    ),

    /**
     * Синхронизировать статус "в wishlist" для списка товаров
     * Используется на странице каталога
     */
    syncContains: rxMethod<string[]>(
      pipe(
        switchMap((productIds) =>
          http.get<ContainsResponse>(
            `${environment.apiUrl}/wishlist/contains`,
            {
              params: { ids: productIds.join(',') },
            }
          ).pipe(
            tapResponse({
              next: (response) => {
                patchState(store, {
                  itemsMap: {
                    ...store.itemsMap(),
                    ...response,
                  },
                });
              },
              error: (error: Error) => {
                console.error('Failed to sync wishlist contains:', error);
              },
            })
          )
        )
      )
    ),

    /**
     * Загрузить счетчик
     */
    loadCount: rxMethod<void>(
      pipe(
        switchMap(() =>
          http.get<{ count: number }>(
            `${environment.apiUrl}/wishlist/count`
          ).pipe(
            tapResponse({
              next: (response) => {
                patchState(store, { total: response.count });
              },
              error: (error: Error) => {
                console.error('Failed to load wishlist count:', error);
              },
            })
          )
        )
      )
    ),
  }))
);
```

---

### 3. Компонент страницы wishlist

```typescript
// src/app/features/wishlist/ui/wishlist-page/wishlist-page.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistStore } from '../../data-access/wishlist.store';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wishlist-page">
      <header class="page-header">
        <h1>My Wishlist</h1>
        <p class="total-count">{{ store.total() }} items</p>
      </header>

      <!-- Состояние загрузки -->
      @if (store.isLoading() && store.isEmpty()) {
        <div class="loading">Loading your wishlist...</div>
      }

      <!-- Пустой список -->
      @if (!store.isLoading() && store.isEmpty()) {
        <div class="empty-state">
          <p>Your wishlist is empty</p>
          <a routerLink="/products">Browse products</a>
        </div>
      }

      <!-- Список товаров -->
      @if (!store.isEmpty()) {
        <div class="wishlist-grid">
          @for (item of store.availableItems(); track item.productId) {
            <div class="wishlist-item">
              @if (item.product) {
                <img 
                  [src]="item.product.images[0]" 
                  [alt]="item.product.title"
                  class="product-image"
                />
                <div class="product-info">
                  <h3>{{ item.product.title }}</h3>
                  <p class="brand">{{ item.product.brand }}</p>
                  <p class="price">{{ item.product.price | currency }}</p>
                  <p class="added-date">
                    Added {{ item.addedAt | date:'short' }}
                  </p>
                  @if (item.note) {
                    <p class="note">{{ item.note }}</p>
                  }
                </div>
                <button 
                  class="remove-btn"
                  (click)="removeItem(item.productId)"
                >
                  Remove
                </button>
              }
            </div>
          }
        </div>

        <!-- Пагинация -->
        @if (store.hasMore()) {
          <button 
            class="load-more"
            [disabled]="store.isLoading()"
            (click)="loadMore()"
          >
            {{ store.isLoading() ? 'Loading...' : 'Load More' }}
          </button>
        }
      }

      <!-- Кнопка очистки -->
      @if (!store.isEmpty()) {
        <button 
          class="clear-all"
          (click)="clearWishlist()"
        >
          Clear All
        </button>
      }
    </div>
  `,
  styles: [`
    .wishlist-page { padding: 2rem; }
    .page-header { margin-bottom: 2rem; }
    .wishlist-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .wishlist-item {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      position: relative;
    }
    .product-image { 
      width: 100%; 
      height: 200px; 
      object-fit: cover;
      border-radius: 4px;
    }
    .remove-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
    .load-more, .clear-all {
      padding: 0.75rem 2rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .empty-state { 
      text-align: center; 
      padding: 4rem 0; 
    }
  `]
})
export class WishlistPageComponent implements OnInit {
  readonly store = inject(WishlistStore);

  ngOnInit() {
    // Загружаем wishlist при входе на страницу
    this.store.load({ reset: true });
  }

  loadMore() {
    this.store.loadMore();
  }

  removeItem(productId: string) {
    this.store.removeItem(productId);
  }

  clearWishlist() {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
      this.store.clear();
    }
  }
}
```

---

### 4. Компонент кнопки "В избранное"

```typescript
// src/app/features/wishlist/ui/wishlist-button/wishlist-button.component.ts

import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistStore } from '../../data-access/wishlist.store';
import { WishlistItemSource } from '../../models/wishlist.model';

@Component({
  selector: 'app-wishlist-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="wishlist-btn"
      [class.active]="isInWishlist()"
      (click)="toggle()"
      [attr.aria-label]="isInWishlist() ? 'Remove from wishlist' : 'Add to wishlist'"
    >
      <svg 
        class="heart-icon"
        [class.filled]="isInWishlist()"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          [attr.fill]="isInWishlist() ? 'currentColor' : 'none'"
          stroke="currentColor"
          stroke-width="2"
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
      </svg>
    </button>
  `,
  styles: [`
    .wishlist-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      transition: transform 0.2s;
    }
    .wishlist-btn:hover {
      transform: scale(1.1);
    }
    .heart-icon {
      color: #e74c3c;
      transition: all 0.2s;
    }
    .wishlist-btn.active .heart-icon {
      fill: #e74c3c;
      animation: heartBeat 0.3s;
    }
    @keyframes heartBeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
  `]
})
export class WishlistButtonComponent {
  readonly store = inject(WishlistStore);
  
  // Inputs
  readonly productId = input.required<string>();
  readonly source = input<WishlistItemSource>(WishlistItemSource.CATALOG);
  
  // Computed
  readonly isInWishlist = this.store.isInWishlist()(this.productId());

  toggle() {
    if (this.isInWishlist) {
      this.store.removeItem(this.productId());
    } else {
      this.store.addItem({
        productId: this.productId(),
        source: this.source(),
      });
    }
  }
}
```

---

### 5. Компонент бейджа в header

```typescript
// src/app/features/wishlist/ui/wishlist-badge/wishlist-badge.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistStore } from '../../data-access/wishlist.store';

@Component({
  selector: 'app-wishlist-badge',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a 
      routerLink="/wishlist" 
      class="wishlist-badge"
      [attr.aria-label]="'Wishlist (' + store.count() + ' items)'"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
      </svg>
      @if (store.count() > 0) {
        <span class="badge-count">{{ store.count() }}</span>
      }
    </a>
  `,
  styles: [`
    .wishlist-badge {
      position: relative;
      display: inline-flex;
      align-items: center;
      color: #333;
      text-decoration: none;
      padding: 0.5rem;
    }
    .badge-count {
      position: absolute;
      top: 0;
      right: 0;
      background: #e74c3c;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: bold;
    }
  `]
})
export class WishlistBadgeComponent implements OnInit {
  readonly store = inject(WishlistStore);

  ngOnInit() {
    // Загружаем только счетчик для performance
    this.store.loadCount();
  }
}
```

---

### 6. Использование в каталоге товаров

```typescript
// src/app/features/products/ui/product-list/product-list.component.ts

import { Component, inject, OnInit, input } from '@angular/core';
import { WishlistStore } from '../../../wishlist/data-access/wishlist.store';
import { WishlistButtonComponent } from '../../../wishlist/ui/wishlist-button/wishlist-button.component';
import { WishlistItemSource } from '../../../wishlist/models/wishlist.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [WishlistButtonComponent],
  template: `
    <div class="product-grid">
      @for (product of products(); track product.id) {
        <div class="product-card">
          <div class="product-image-wrapper">
            <img [src]="product.image" [alt]="product.title" />
            
            <!-- Кнопка wishlist -->
            <app-wishlist-button
              [productId]="product.id"
              [source]="WishlistItemSource.CATALOG"
              class="wishlist-overlay"
            />
          </div>
          
          <h3>{{ product.title }}</h3>
          <p>{{ product.price | currency }}</p>
        </div>
      }
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  readonly wishlistStore = inject(WishlistStore);
  readonly products = input.required<Product[]>();
  readonly WishlistItemSource = WishlistItemSource;

  ngOnInit() {
    // Синхронизируем состояние wishlist для отображаемых товаров
    const productIds = this.products().map(p => p.id);
    this.wishlistStore.syncContains(productIds);
  }
}
```

---

### 7. Роуты

```typescript
// src/app/features/wishlist/wishlist.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';

export const wishlistRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./ui/wishlist-page/wishlist-page.component').then(
        (m) => m.WishlistPageComponent
      ),
  },
];
```

```typescript
// src/app/app.routes.ts

export const routes: Routes = [
  // ... другие роуты
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./features/wishlist/wishlist.routes').then(
        (m) => m.wishlistRoutes
      ),
  },
];
```

---

## Рекомендации по оптимизации

### 1. Кэширование (Redis) - V2

Для высоконагруженных систем добавьте Redis:

```typescript
// Кэшируем contains для каталогов
async containsProducts(userId: string, productIds: string[]) {
  const cacheKey = `wishlist:contains:${userId}`;
  
  // Проверяем Redis
  const cached = await this.redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Запрос к БД
  const result = await this.wishlistItemModel.find(...);
  
  // Сохраняем в кэш на 5 минут
  await this.redis.setex(cacheKey, 300, JSON.stringify(result));
  
  return result;
}
```

**Инвалидация:** При add/remove удаляем кэш пользователя

### 2. Webhook события - V2

Для интеграции с другими сервисами:

```typescript
// После успешного добавления
this.eventEmitter.emit('wishlist.item.added', {
  userId,
  productId,
  timestamp: new Date(),
});
```

**Use cases:**
- Отправка уведомлений о снижении цены
- Аналитика (популярные товары в wishlist)
- Персонализация рекомендаций

### 3. Server-Sent Events (SSE) - V2

Для real-time синхронизации между вкладками/устройствами:

```typescript
@Sse('wishlist/events')
streamWishlistEvents(@CurrentUser('id') userId: string) {
  return this.wishlistService.getEventStream(userId);
}
```

---

## Тестирование

### Unit тесты

```bash
npm run test -- wishlist
```

### E2E тесты (рекомендуется)

```typescript
describe('Wishlist Flow', () => {
  it('should add item to wishlist', async () => {
    const response = await request(app.getHttpServer())
      .put('/wishlist/items/507f1f77bcf86cd799439011')
      .set('Authorization', `Bearer ${token}`)
      .send({ source: 'catalog' })
      .expect(200);
    
    expect(response.body.isNew).toBe(true);
  });
  
  it('should be idempotent', async () => {
    // Добавляем дважды
    await request(app.getHttpServer())
      .put('/wishlist/items/507f1f77bcf86cd799439011')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
      
    const response = await request(app.getHttpServer())
      .put('/wishlist/items/507f1f77bcf86cd799439011')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    
    expect(response.body.isNew).toBe(false);
  });
});
```

---

## Мониторинг и логирование

### Рекомендуемые метрики

```typescript
// Пример с Prometheus
@Injectable()
export class WishlistService {
  private readonly addItemCounter = new Counter({
    name: 'wishlist_add_item_total',
    help: 'Total wishlist add operations',
    labelNames: ['status'],
  });
  
  private readonly getWishlistHistogram = new Histogram({
    name: 'wishlist_get_duration_seconds',
    help: 'Wishlist GET request duration',
  });
}
```

---

## Лицензия

MIT

---

## Поддержка

При возникновении вопросов или проблем создайте issue в репозитории проекта.
