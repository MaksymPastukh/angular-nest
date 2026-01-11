# 🔐 Система ролей и Guard'ов - Документация

## ✅ Что реализовано

### 1. **UserRole Enum**
Типобезопасные роли пользователей:

```typescript
export enum UserRole {
  USER = 'user',    // обычный пользователь
  ADMIN = 'admin',  // администратор
  GUEST = 'guest',  // неавторизованный пользователь
}
```

### 2. **Обновлённый AuthStore**

#### Computed свойства:
```typescript
userName      // имя пользователя или 'Guest'
userRole      // роль пользователя (UserRole)
isAdmin       // проверка роли admin
isUser        // проверка роли user
```

#### Методы:
```typescript
hasRole(role: UserRole | string): boolean
```

---

## 🛡️ Доступные Guards

### 1. **adminGuard** 
Защита административных маршрутов

```typescript
import { adminGuard } from '@/core/auth/guard'

{
  path: 'admin/users',
  loadComponent: () => import('./users-list'),
  canActivate: [adminGuard],  // ✅ только для admin
}
```

**Проверяет:**
- ✅ Авторизован ли пользователь → если нет → `/login?returnUrl=...`
- ✅ Роль === 'admin' → если нет → `/` (главная)

---

### 2. **authGuard** (новый!)
Защита любых авторизованных маршрутов (любая роль)

```typescript
import { authGuard } from '@/core/auth/guard'

{
  path: 'profile',
  loadComponent: () => import('./profile'),
  canActivate: [authGuard],  // ✅ для user и admin
}
```

**Проверяет:**
- ✅ Авторизован ли пользователь → если нет → `/login?returnUrl=...`

---

### 3. **authForwardGuard** (существующий)
Блокирует доступ авторизованных пользователей

```typescript
import { authForwardGuard } from '@/core/auth/guard'

{
  path: 'login',
  loadComponent: () => import('./login'),
  canActivate: [authForwardGuard],  // ✅ только для гостей
}
```

**Использование:**
- Страницы /login, /register
- Если авторизован → возврат назад

---

## 📦 Импорт

### Через barrel export (рекомендуется):
```typescript
import { adminGuard, authGuard, authForwardGuard } from '@/core/auth/guard'
```

### Прямой импорт:
```typescript
import { adminGuard } from '@/core/auth/guard/admin.guard'
```

---

## 🎯 Примеры использования

### Пример 1: Защита админ-панели
```typescript
// admin.routes.ts
export default [
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      { path: 'users', loadComponent: () => import('./users-list') },
      { path: 'products', loadComponent: () => import('./products-list') },
      { path: 'orders', loadComponent: () => import('./orders-list') },
    ]
  }
] as Routes
```

### Пример 2: Защита профиля (user + admin)
```typescript
// profile.routes.ts
export default [
  {
    path: 'profile',
    canActivate: [authGuard],  // любая роль (user или admin)
    children: [
      { path: '', loadComponent: () => import('./profile-view') },
      { path: 'orders', loadComponent: () => import('./orders-history') },
      { path: 'settings', loadComponent: () => import('./settings') },
    ]
  }
] as Routes
```

### Пример 3: Комбинация guards
```typescript
{
  path: 'checkout',
  canActivate: [authGuard],  // сначала проверка авторизации
  children: [
    {
      path: 'payment',
      canActivate: [customPaymentGuard],  // дополнительная проверка
      loadComponent: () => import('./payment')
    }
  ]
}
```

---

## 🔍 Проверка ролей в компонентах

### Способ 1: Через computed (рекомендуется)
```typescript
export class HeaderComponent {
  authStore = inject(AuthStore)
  
  // Использование в темплейте
  @if (authStore.isAdmin()) {
    <a routerLink="/admin">Админ-панель</a>
  }
  
  @if (authStore.isUser() || authStore.isAdmin()) {
    <a routerLink="/profile">Профиль</a>
  }
}
```

### Способ 2: Через метод hasRole
```typescript
export class DashboardComponent {
  authStore = inject(AuthStore)
  
  protected canManageUsers(): boolean {
    return this.authStore.hasRole(UserRole.ADMIN)
  }
  
  protected canViewOrders(): boolean {
    return this.authStore.hasRole(UserRole.USER) || 
           this.authStore.hasRole(UserRole.ADMIN)
  }
}
```

### Способ 3: Через userRole
```typescript
export class SettingsComponent {
  authStore = inject(AuthStore)
  
  displayName = computed(() => {
    const role = this.authStore.userRole()
    
    switch (role) {
      case UserRole.ADMIN: return 'Администратор'
      case UserRole.USER: return 'Пользователь'
      default: return 'Гость'
    }
  })
}
```

---

## 🎨 Утилиты (опционально)

### Проверка валидности роли
```typescript
import { isValidRole } from '@/core/auth/types/user-role.enum'

const role = 'admin'
if (isValidRole(role)) {
  // TypeScript знает, что role это UserRole
}
```

### Получение отображаемого имени
```typescript
import { getRoleDisplayName, UserRole } from '@/core/auth/types/user-role.enum'

const displayName = getRoleDisplayName(UserRole.ADMIN)
// → "Администратор"
```

---

## 🔒 Безопасность

### ✅ Backend также проверяет роли!
Frontend guards — это только UI защита. Backend всегда проверяет:

```typescript
// Backend: products.controller.ts
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Post()
createProduct() { /* ... */ }
```

### 🚨 Важно
- Guards НЕ защищают от прямого API вызова
- Всегда проверяйте роли на бэкенде
- Frontend guards — для UX, backend — для безопасности

---

## 📊 Схема работы

```
Пользователь → Guard → Проверка
                 ↓
         isAuthenticated?
                 ↓
         /login?returnUrl=...
                 ↓
            hasRole?
                 ↓
         / (главная) или 403
                 ↓
         ✅ Доступ разрешён
```

---

## 🎯 Резюме

| Guard | Проверяет | Кого пускает | Редирект |
|-------|-----------|--------------|----------|
| `adminGuard` | auth + role | только admin | `/login` или `/` |
| `authGuard` | auth | user + admin | `/login` |
| `authForwardGuard` | auth | только guest | назад |

**Backend роли:** `user`, `admin`  
**Frontend enum:** `UserRole.USER`, `UserRole.ADMIN`, `UserRole.GUEST`

✅ **Всё готово к использованию!**

