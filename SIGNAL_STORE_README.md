# NgRx SignalStore - Руководство по использованию

## 📚 Содержание
1. [Введение](#введение)
2. [Структура Store](#структура-store)
3. [Как использовать в компонентах](#как-использовать-в-компонентах)
4. [Примеры использования](#примеры-использования)
5. [Логин (для самостоятельной реализации)](#логин-для-самостоятельной-реализации)

---

## Введение

**NgRx SignalStore** - это современный подход к управлению состоянием в Angular, который использует **signals** для реактивности.

### Преимущества перед классическим NgRx:
- ✅ **Меньше boilerplate кода** - не нужны actions, reducers, effects
- ✅ **Автоматическое управление подписками** - не нужны ngOnDestroy и unsubscribe
- ✅ **Типобезопасность** из коробки
- ✅ **Computed signals** для производных значений
- ✅ **rxMethod** для работы с асинхронными операциями

---

## Структура Store

### 1. **State (Состояние)**
```typescript
interface AuthState {
  user: AuthResponseInterface | null;    // Данные пользователя
  isLoading: boolean;                     // Флаг загрузки
  error: string | null;                   // Ошибка
  isAuthenticated: boolean;               // Авторизован ли пользователь
}
```

### 2. **withState() - Инициализация состояния**
```typescript
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),  // ← Создаем signals для каждого поля
  // ...
);
```

### 3. **withComputed() - Вычисляемые значения**
```typescript
withComputed((store) => ({
  // Автоматически пересчитывается при изменении user
  userName: computed(() => store.user()?.user?.firstName ?? 'Guest'),
  
  // Функция для проверки роли
  hasRole: computed(() => (role: string) => {
    const userRoles = store.user()?.user?.roles ?? [];
    return userRoles.includes(role);
  }),
}))
```

### 4. **withMethods() - Методы для изменения состояния**
```typescript
withMethods((store) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return {
    // rxMethod для асинхронных операций
    register: rxMethod<RegisterDataInterface>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((data) => authService.register(data)),
        // ...
      )
    ),
    
    // Обычный метод для синхронных операций
    logout: () => {
      localStorage.removeItem('authToken');
      patchState(store, initialState);
      router.navigate(['/login']);
    },
  };
})
```

---

## Как использовать в компонентах

### 1. **Инжектим Store**
```typescript
export class MyComponent {
  readonly authStore = inject(AuthStore);
}
```

### 2. **Читаем данные в Template**
```html
<!-- Проверка авторизации -->
@if (authStore.isAuthenticated()) {
  <p>Добро пожаловать, {{ authStore.userName() }}!</p>
}

<!-- Показываем спиннер при загрузке -->
@if (authStore.isLoading()) {
  <div class="spinner">Loading...</div>
}

<!-- Показываем ошибку -->
@if (authStore.error()) {
  <div class="error">{{ authStore.error() }}</div>
}

<!-- Доступ к данным пользователя -->
<p>Email: {{ authStore.user()?.user?.email }}</p>

<!-- Проверка ролей -->
@if (authStore.hasRole()('admin')) {
  <button>Admin Panel</button>
}
```

### 3. **Вызываем методы из Component**
```typescript
export class RegisterComponent {
  readonly authStore = inject(AuthStore);

  register(data: RegisterDataInterface): void {
    // Просто вызываем метод - все остальное делает store
    this.authStore.register(data);
    
    // НЕ НУЖНО:
    // - subscribe/unsubscribe
    // - обрабатывать ошибки
    // - показывать уведомления
    // - делать навигацию
    // Все это уже в store!
  }
}
```

---

## Примеры использования

### Пример 1: Регистрация (реализовано)

**Component:**
```typescript
export class Register {
  readonly authStore = inject(AuthStore);

  register(event: Event): void {
    event.preventDefault();
    
    submit(this.registerForm, () => {
      const registerData = this.registerModel();
      
      // Один вызов - вся магия в store
      this.authStore.register(registerData);
    });
  }
}
```

**Template:**
```html
<button 
  type="submit"
  [disabled]="registerForm().invalid() || authStore.isLoading()">
  
  @if (authStore.isLoading()) {
    <span>Registering...</span>
  } @else {
    <span>Sign Up</span>
  }
</button>
```

**Что происходит внутри store:**
1. `isLoading` устанавливается в `true`
2. Отправляется запрос на сервер
3. При успехе:
   - Данные сохраняются в `user`
   - Токен сохраняется в localStorage
   - `isAuthenticated` = true
   - Показывается уведомление
   - Происходит редирект на главную
4. При ошибке:
   - Ошибка сохраняется в `error`
   - Показывается уведомление об ошибке

### Пример 2: Header (реализовано)

**Component:**
```typescript
export class HeaderComponent {
  readonly authStore = inject(AuthStore);
  
  logout(): void {
    this.authStore.logout();
  }
}
```

**Template:**
```html
@if (authStore.isAuthenticated()) {
  <nav>
    <a href="/shop">Shop</a>
    <a href="/profile">{{ authStore.userName() }}</a>
    <button (click)="logout()">Logout</button>
  </nav>
} @else {
  <div>
    <a href="/login">Login</a>
    <a href="/register">Sign Up</a>
  </div>
}
```

### Пример 3: Защищенная страница (Guard)

```typescript
export const authGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (authStore.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
```

### Пример 4: HTTP Interceptor

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authStore = inject(AuthStore);
  
  // Получаем токен из store
  const token = authStore.user()?.access_token;
  
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  
  return next(req);
};
```

---

## Логин (для самостоятельной реализации)

### Задание
Реализуйте функционал логина по аналогии с регистрацией.

### Что уже готово в store:
```typescript
login: rxMethod<{ email: string; password: string }>(
  pipe(
    tap(() => patchState(store, { isLoading: true, error: null })),
    switchMap((credentials) =>
      authService.login(credentials).pipe(
        tap((response) => {
          localStorage.setItem('authToken', response.access_token);
          patchState(store, {
            user: response,
            isAuthenticated: true,
            isLoading: false,
          });
          router.navigate(['/']);
        }),
        catchError((error) => {
          patchState(store, {
            error: error.message,
            isLoading: false,
          });
          return of(null);
        })
      )
    )
  )
)
```

### Что нужно сделать:

1. **Создать интерфейс для данных логина**
```typescript
// src/app/core/auth/types/loginData.interface.ts
export interface LoginDataInterface {
  email: string;
  password: string;
}
```

2. **Обновить компонент Login**
```typescript
export class Login {
  readonly authStore = inject(AuthStore);
  
  loginModel = signal<LoginDataInterface>({
    email: '',
    password: '',
  });
  
  loginForm = form(this.loginModel, (controlSchema) => {
    required(controlSchema.email, { message: 'Email is required.' });
    email(controlSchema.email, { message: 'Invalid email.' });
    required(controlSchema.password, { message: 'Password is required.' });
  });
  
  login(event: Event): void {
    event.preventDefault();
    
    submit(this.loginForm, () => {
      const credentials = this.loginModel();
      this.authStore.login(credentials);
    });
  }
}
```

3. **Обновить Template Login**
```html
<form (submit)="login($event)">
  <!-- Email input -->
  <input [field]="loginForm.email" type="email" />
  
  <!-- Password input -->
  <input [field]="loginForm.password" type="password" />
  
  <!-- Submit button -->
  <button 
    type="submit"
    [disabled]="loginForm().invalid() || authStore.isLoading()">
    
    @if (authStore.isLoading()) {
      <span>Logging in...</span>
    } @else {
      <span>Login</span>
    }
  </button>
</form>
```

### Подсказки:
- ✅ Используйте `authStore.login()` вместо прямого вызова сервиса
- ✅ Проверяйте `authStore.isLoading()` для показа спиннера
- ✅ Показывайте `authStore.error()` если есть ошибка
- ✅ НЕ создавайте подписки вручную - store делает это сам
- ✅ НЕ обрабатывайте success/error в компоненте - это в store

---

## Полезные ссылки
- [NgRx SignalStore Documentation](https://ngrx.io/guide/signals/signal-store)
- [Angular Signals](https://angular.dev/guide/signals)

---

## Заключение

**SignalStore** значительно упрощает работу с состоянием:
- Меньше кода
- Проще понимать
- Легче тестировать
- Автоматическое управление памятью

Следуйте примеру регистрации для реализации логина и других фич! 🚀

