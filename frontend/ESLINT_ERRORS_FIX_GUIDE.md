# 🛠️ Руководство по исправлению ESLint ошибок

## ✅ Результаты после настройки

- **Было:** 6832 проблемы
- **Стало:** 318 проблем (41 ошибка, 277 предупреждений)
- **Исправлено автоматически:** ~95% проблем

---

## 🔴 Критические ошибки (требуют исправления)

### 1. **Синтаксическая ошибка шаблона**

**Файл:** `product-detail.html:220`  
**Ошибка:** `Parser Error: Missing expected ) at column 27`

```html
<!-- ❌ Неправильно -->
<p-tabView (onChange)="activeTabIndex.set($event as number)">
  <!-- ✅ Правильно -->
  <p-tabView (onChange)="activeTabIndex.set($any($event).index)">
    <!-- или -->
    <p-tabView [(activeIndex)]="activeTabIndex()"></p-tabView></p-tabView
></p-tabView>
```

---

### 2. **Дублирующиеся атрибуты**

**Файл:** `reset.html:64, 66, 80, 82`  
**Ошибка:** `Duplicate attribute 'type'`

```html
<!-- ❌ Неправильно -->
<input type="password" type="password" />

<!-- ✅ Правильно -->
<input type="password" />
```

**Исправление:** Удалите дублирующиеся атрибуты `type`.

---

### 3. **Component Selectors без префикса**

**Ошибка:** `The selector should start with "app"`

**Файлы:**

- `product-card.ts` - selector: `product-card`
- `products-filter.ts` - selector: `products-filter`
- `table-best-price.ts` - selector: `table-best-price`

```typescript
// ❌ Неправильно
@Component({
  selector: 'product-card',
})

// ✅ Правильно
@Component({
  selector: 'app-product-card',
})
```

**Исправление:**

1. Измените селектор на `app-<название>`
2. Обновите использование в HTML: `<app-product-card>`

---

### 4. **Label без связи с form element**

**Файл:** `create-product.html`  
**Ошибка:** `A label component must be associated with a form element`

```html
<!-- ❌ Неправильно -->
<label>Name</label>
<input id="name" />

<!-- ✅ Правильно -->
<label for="name">Name</label>
<input id="name" />
```

**Исправление:** Добавьте атрибут `for` к `<label>`.

---

### 5. **Input Rename**

**Файл:** `product-card.ts:15`  
**Ошибка:** `Input bindings should not be aliased`

```typescript
// ❌ Неправильно
@Input('product') productIn?: Product

// ✅ Правильно
@Input() product?: Product
```

---

### 6. **Output с именем нативного события**

**Файл:** `password-toggle-button.ts:48`  
**Ошибка:** `Output bindings should not be named as standard DOM events`

```typescript
// ❌ Неправильно
@Output() click = new EventEmitter()

// ✅ Правильно
@Output() toggleClick = new EventEmitter()
```

---

### 7. **Assignment to function parameter**

**Файл:** `auth.interceptor.ts:25`  
**Ошибка:** `Assignment to function parameter 'req'`

```typescript
// ❌ Неправильно
function intercept(req: HttpRequest<any>) {
  req = req.clone({ ... })
}

// ✅ Правильно
function intercept(req: HttpRequest<any>) {
  let clonedReq = req.clone({ ... })
}
```

---

### 8. **Enum comparison**

**Файл:** `user-role.enum.ts:22-26`  
**Ошибка:** `The case statement does not have a shared enum type`

```typescript
// ❌ Неправильно
switch (role) {
  case 'admin': // строка вместо enum
    break
}

// ✅ Правильно
switch (role) {
  case UserRole.Admin:
    break
}
```

---

### 9. **Throwing non-Error**

**Файл:** `auth.service.ts:87`  
**Ошибка:** `Expected an error object to be thrown`

```typescript
// ❌ Неправильно
throw 'No refresh token available'

// ✅ Правильно
throw new Error('No refresh token available')
```

---

### 10. **No-floating-promises**

**Файл:** `header.ts:109`, `products-page-facade.ts:57`  
**Ошибка:** `Promises must be awaited`

```typescript
// ❌ Неправильно
this.router.navigate(['/products'])

// ✅ Правильно 1 - await
await this.router.navigate(['/products'])

// ✅ Правильно 2 - void operator
void this.router.navigate(['/products'])

// ✅ Правильно 3 - catch
this.router.navigate(['/products']).catch((err) => console.error(err))
```

---

### 11. **Non-null assertion**

**Файл:** `product-detail.store.ts:69`  
**Ошибка:** `Forbidden non-null assertion`

```typescript
// ❌ Неправильно
const product = state.product!

// ✅ Правильно
const product = state.product ?? defaultProduct
```

---

### 12. **Unexpected alert**

**Файл:** `product-detail.ts:145`  
**Ошибка:** `Unexpected alert`

```typescript
// ❌ Неправильно
alert('Added to cart')

// ✅ Правильно - использовать toast/notification service
this.messageService.add({
  severity: 'success',
  summary: 'Success',
  detail: 'Added to cart',
})
```

---

### 13. **Cyclomatic Complexity**

**Файлы:** Шаблоны с вложенной логикой  
**Ошибка:** `The cyclomatic complexity exceeds the defined limit 5`

**Решение:** Вынести сложную логику в computed signals

```typescript
// ✅ В компоненте
readonly isFormValid = computed(() => {
  const form = this.form()
  return form?.valid && form?.dirty && !form?.pristine
})

// ✅ В шаблоне
@if (isFormValid()) {
  <button>Submit</button>
}
```

---

### 14. **Unbound method**

**Файл:** `register.ts:57`  
**Ошибка:** `may cause unintentional scoping of 'this'`

```typescript
// ❌ Неправильно
this.form.valueChanges.pipe(debounceTime(300), tap(this.validateForm))

// ✅ Правильно
this.form.valueChanges.pipe(
  debounceTime(300),
  tap((value) => this.validateForm(value))
)
```

---

### 15. **No-unused-expressions**

**Файл:** `tabs.interface.ts:6`  
**Ошибка:** `Expected an assignment or function call`

```typescript
// ❌ Неправильно
export interface Tab {
  label: string
  icon?: string
  icon // дублирующееся поле?
}

// ✅ Правильно - удалите лишнюю строку
```

---

### 16. **Constant binary expression**

**Файл:** `product-detail.ts:41`  
**Ошибка:** `Unexpected constant truthiness on the left-hand side`

```typescript
// ❌ Неправильно
activeTabIndex = signal(0 || 0 || 0)

// ✅ Правильно
activeTabIndex = signal(0)
```

---

### 17. **Inline template too long**

**Файл:** `password-toggle-button.ts:8`  
**Ошибка:** `template has too many lines (35). Maximum allowed is 3`

```typescript
// ❌ Неправильно
@Component({
  selector: 'app-password-toggle',
  template: `
    <div>...</div>
    ... 35 lines
  `
})

// ✅ Правильно - создайте отдельный файл
@Component({
  selector: 'app-password-toggle',
  templateUrl: './password-toggle-button.html'
})
```

---

## ⚠️ Предупреждения (рекомендуется исправить)

### 1. **Calling expressions in templates**

**Количество:** ~200 предупреждений  
**Проблема:** Вызов функций в шаблонах вызывает пересчет при каждом change detection

```typescript
// ❌ Неправильно в HTML
{{ getFilteredProducts() }}
(click)="form.get('email').hasError('required')"

// ✅ Правильно - используйте computed signals
readonly filteredProducts = computed(() => {
  const products = this.products()
  const filter = this.filter()
  return products.filter(p => p.category === filter)
})

readonly emailError = computed(() => {
  return this.form.get('email')?.hasError('required')
})

// В шаблоне
{{ filteredProducts() }}
@if (emailError()) { ... }
```

---

### 2. **OnPush Change Detection**

**Файлы:** 6 компонентов  
**Предупреждение:** `changeDetection should be set to OnPush`

```typescript
// ✅ Добавьте OnPush для оптимизации с Signals
import { ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // ✅
})
```

---

### 3. **Nullish Coalescing**

**Количество:** ~30 предупреждений  
**Проблема:** Использование `||` вместо `??`

```typescript
// ❌ Неправильно (0, '', false считаются falsy)
const value = user.age || 18

// ✅ Правильно (проверяет только null/undefined)
const value = user.age ?? 18
```

---

### 4. **Optional Chaining**

**Количество:** ~5 предупреждений

```typescript
// ❌ Неправильно
if (user && user.profile && user.profile.avatar) { ... }

// ✅ Правильно
if (user?.profile?.avatar) { ... }
```

---

### 5. **Unused variables**

**Проблема:** Неиспользуемые импорты и переменные

```typescript
// ❌ Неправильно
import { OnInit, OnDestroy } from '@angular/core' // OnDestroy не используется

// ✅ Правильно - удалите неиспользуемые
import { OnInit } from '@angular/core'

// ✅ Или добавьте префикс _
import { OnDestroy as _OnDestroy } from '@angular/core'
```

---

### 6. **TypeScript `any` type**

**Количество:** ~20 предупреждений  
**Проблема:** Использование `any` снижает type safety

```typescript
// ❌ Неправильно
onCategoryClick(event: any) {
  event.toggle()
}

// ✅ Правильно
onCategoryClick(event: AccordionTabOpenEvent) {
  event.toggle()
}
```

---

### 7. **Console statements**

**Количество:** ~8 предупреждений  
**Проблема:** `console.log` в production коде

```typescript
// ❌ Неправильно
console.log('User data:', user)

// ✅ Правильно для отладки
console.info('User loaded:', user) // разрешено

// ✅ Правильно для ошибок
console.error('Failed to load user:', err) // разрешено
```

---

### 8. **Accessibility warnings**

#### Click without keyboard events

```html
<!-- ❌ Неправильно -->
<div (click)="navigate()">Click me</div>

<!-- ✅ Правильно -->
<button (click)="navigate()">Click me</button>
<!-- или -->
<div (click)="navigate()" (keyup.enter)="navigate()" tabindex="0">Click me</div>
```

#### Interactive elements must be focusable

```html
<!-- ❌ Неправильно -->
<div (click)="select()">Item</div>

<!-- ✅ Правильно -->
<div (click)="select()" tabindex="0" role="button">Item</div>
```

#### No inline styles

```html
<!-- ❌ Неправильно -->
<svg:path style="fill: red;" />

<!-- ✅ Правильно -->
<svg:path class="icon-red" />
```

---

## 📋 План исправления

### Приоритет 1 - Критичные ошибки (41 ошибка)

1. ✅ Исправить синтаксическую ошибку в `product-detail.html:220`
2. ✅ Удалить дублирующиеся атрибуты в `reset.html`
3. ✅ Добавить префикс `app-` к селекторам компонентов
4. ✅ Связать labels с form elements
5. ✅ Убрать алиасы у Input
6. ✅ Переименовать Output события
7. ✅ Исправить assignment к параметрам функций
8. ✅ Использовать enum вместо строк
9. ✅ Throw Error objects
10. ✅ Обработать promises (await/void/catch)

### Приоритет 2 - Производительность и оптимизация

11. ⚠️ Добавить `OnPush` к компонентам
12. ⚠️ Заменить вызовы функций на computed signals
13. ⚠️ Вынести сложную логику из шаблонов

### Приоритет 3 - Code Quality

14. ⚠️ Заменить `||` на `??`
15. ⚠️ Использовать optional chaining
16. ⚠️ Удалить неиспользуемые импорты
17. ⚠️ Заменить `any` на конкретные типы

### Приоритет 4 - Accessibility

18. ⚠️ Добавить keyboard events
19. ⚠️ Сделать интерактивные элементы focusable
20. ⚠️ Убрать inline styles

---

## 🚀 Команды для работы

```bash
# Проверка всех ошибок
npm run lint

# Автоисправление (где возможно)
npm run lint:fix

# Форматирование кода
npm run format

# Проверка и форматирование
npm run lint:format
```

---

## 📚 Полезные ссылки

- [Angular ESLint Rules](https://github.com/angular-eslint/angular-eslint)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
- [Angular 21 Signal API](https://angular.dev/guide/signals)
- [Angular Style Guide](https://angular.dev/style-guide)

---

## 💡 Советы по работе с Angular 21 Signals

### Заменить методы на computed signals

```typescript
// ❌ Старый подход - вызов метода в шаблоне
get filteredProducts() {
  return this.products.filter(p => p.price > 100)
}

// ✅ Новый подход - computed signal
readonly products = signal<Product[]>([])
readonly minPrice = signal(100)

readonly filteredProducts = computed(() => {
  return this.products().filter(p => p.price > this.minPrice())
})
```

### Использовать effect для побочных эффектов

```typescript
// ✅ Автоматическое сохранение фильтров в URL
constructor() {
  effect(() => {
    const filters = this.filters()
    void this.router.navigate([], {
      queryParams: mapFiltersToParams(filters)
    })
  })
}
```

### NgRx Signal Store patterns

```typescript
export const ProductStore = signalStore(
  withState<ProductState>({
    products: [],
    loading: false,
    error: null,
  }),
  withComputed((state) => ({
    productsCount: computed(() => state.products().length),
    hasProducts: computed(() => state.products().length > 0),
  })),
  withMethods((store) => ({
    loadProducts: async () => {
      patchState(store, { loading: true })
      try {
        const products = await productService.getAll()
        patchState(store, { products, loading: false })
      } catch (error) {
        patchState(store, { error, loading: false })
      }
    },
  }))
)
```

---

**Конец руководства**
