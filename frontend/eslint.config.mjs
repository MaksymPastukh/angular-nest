// @ts-check
// ========================================
// КОНФИГУРАЦИЯ ESLint ДЛЯ ANGULAR 21+ (FRONTEND)
// ========================================
// Поддержка:
// - Angular 21+ Signal API (input, output, model signals)
// - NgRx Signals (@ngrx/signals)
// - Standalone Components
// - Resource API
// - Новый control flow (@if, @for, @switch)
// Использует flat config формат (ESLint 9+)

import eslint from '@eslint/js'
import angular from 'angular-eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // ========================================
  // ИГНОРИРУЕМЫЕ ФАЙЛЫ И ПАПКИ
  // ========================================
  {
    // Файлы и папки, которые не нужно проверять ESLint
    ignores: [
      'eslint.config.mjs', // Сам конфиг файл
      '.angular/**', // Кэш Angular CLI
      'dist/**', // Собранная версия приложения
      'node_modules/**', // Зависимости
      'coverage/**', // Отчеты о покрытии тестами
      '**/*.js', // JavaScript файлы (используем только TypeScript)
      '**/*.mjs', // ES модули
    ],
  },

  // ========================================
  // БАЗОВЫЕ РЕКОМЕНДОВАННЫЕ ПРАВИЛА
  // ========================================
  // Рекомендованные правила ESLint для JavaScript
  eslint.configs.recommended,

  // ========================================
  // ПРАВИЛА ДЛЯ TYPESCRIPT ФАЙЛОВ
  // ========================================
  {
    files: ['**/*.ts'],

    // Применяем TypeScript и Angular правила только к .ts файлам
    extends: [...tseslint.configs.recommendedTypeChecked, ...angular.configs.tsRecommended],

    languageOptions: {
      // Глобальные переменные окружения
      globals: {
        ...globals.browser, // Браузерные API (window, document, и т.д.)
        ...globals.es2022, // ES2022 глобальные объекты
      },

      // Настройки парсера TypeScript
      parserOptions: {
        // Автоматически находит tsconfig.json проекта
        projectService: true,
        // Корневая директория для поиска tsconfig
        tsconfigRootDir: import.meta.dirname,
        // ECMAScript версия
        ecmaVersion: 2022,
        // Тип модульной системы
        sourceType: 'module',
      },
    },

    rules: {
      // ========================================
      // ANGULAR 21+ СПЕЦИФИЧНЫЕ ПРАВИЛА
      // ========================================

      // --- СЕЛЕКТОРЫ КОМПОНЕНТОВ И ДИРЕКТИВ ---
      // Требует явного указания селектора для компонента
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element', // Тип селектора (element или attribute)
          prefix: 'app', // Префикс для селекторов компонентов
          style: 'kebab-case', // Стиль написания (kebab-case: app-example)
        },
      ],

      '@angular-eslint/template/no-call-expression': 'off',

      // Требует явного указания селектора для директивы
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute', // Тип селектора
          prefix: 'app', // Префикс для селекторов директив
          style: 'camelCase', // Стиль написания (camelCase: appExample)
        },
      ],

      // --- STANDALONE КОМПОНЕНТЫ (Angular 21+ default) ---
      // Рекомендуется использовать standalone компоненты
      '@angular-eslint/prefer-standalone': 'warn',

      // --- SIGNAL API (Angular 21+) ---
      // Запрещает использование старых @Input/@Output в пользу signal-based input()/output()
      // В Angular 21+ рекомендуется использовать:
      // - input() вместо @Input()
      // - output() вместо @Output()
      // - model() для двусторонней привязки
      '@angular-eslint/no-input-rename': 'error', // Запрет переименования input
      '@angular-eslint/no-output-on-prefix': 'error', // Запрет префикса "on" для outputs
      '@angular-eslint/no-output-rename': 'error', // Запрет переименования output

      // --- CHANGE DETECTION ---
      // Использовать OnPush стратегию изменения обнаружения
      // Обязательно для компонентов с Signal API и NgRx Signals
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn', // Только предупреждение

      // --- СТРУКТУРА КОМПОНЕНТОВ ---
      // Запрещает использование больших inline шаблонов (максимум 3 строки)
      // Для больших шаблонов используйте отдельные .html файлы
      '@angular-eslint/component-max-inline-declarations': [
        'error',
        {
          template: 13, // Максимум 13 строки для inline template
          styles: 23, // Максимум 23 строки для inline styles
        },
      ],

      // --- LIFECYCLE HOOKS ---
      // Требует реализации интерфейсов для lifecycle hooks
      '@angular-eslint/use-lifecycle-interface': 'error',

      // ========================================
      // TYPESCRIPT ПРАВИЛА ДЛЯ ANGULAR 21+ & SIGNALS
      // ========================================

      // --- СТРОГАЯ ТИПИЗАЦИЯ ---
      // Разрешить использование any только в исключительных случаях
      // Для Signals лучше явно указывать тип: signal<User | null>(null)
      '@typescript-eslint/no-explicit-any': 'warn',

      // --- ASYNC/PROMISE ОБРАБОТКА ---
      // Предупреждение при не обработанных Promise
      // Важно для работы с Resource API и async операциями
      '@typescript-eslint/no-floating-promises': 'error',

      // --- БЕЗОПАСНОСТЬ ТИПОВ ---
      // Предупреждение при небезопасных операциях
      // Критично для работы с типами Signals и Store
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',

      // --- ASYNC ФУНКЦИИ ---
      // Предупреждение для async функций без await
      '@typescript-eslint/require-await': 'warn',

      // --- НЕИСПОЛЬЗУЕМЫЕ ПЕРЕМЕННЫЕ ---
      // Предупреждение для неиспользуемых переменных
      // Игнорировать переменные с префиксом _ (например: _unusedSignal)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Игнорировать аргументы начинающиеся с _
          varsIgnorePattern: '^_', // Игнорировать переменные начинающиеся с _
          caughtErrorsIgnorePattern: '^_', // Игнорировать ошибки начинающиеся с _
        },
      ],

      // --- ТИПЫ ВОЗВРАЩАЕМЫХ ЗНАЧЕНИЙ ---
      // Для Signals и computed значений тип часто выводится автоматически
      '@typescript-eslint/explicit-function-return-type': 'off',

      // --- МОДИФИКАТОРЫ ДОСТУПА ---
      // Требовать явное указание модификаторов доступа (public/private/protected)
      // Рекомендуется для классов с Signals
      '@typescript-eslint/explicit-member-accessibility': 'off', // Отключено - слишком много изменений для существующего кода

      // --- ОПРЕДЕЛЕНИЕ ТИПОВ ---
      // Использовать интерфейсы вместо type aliases где возможно
      // Важно для типизации Store state и Entity models
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // --- NULL/UNDEFINED ПРОВЕРКИ ---
      // Использовать строгие проверки для сравнений с null/undefined
      '@typescript-eslint/strict-boolean-expressions': 'off',

      // --- NON-NULL ASSERTION ---
      // Предупреждение на использование ! (non-null assertion)
      // С Signals лучше использовать значения по умолчанию
      '@typescript-eslint/no-non-null-assertion': 'error',

      // --- ЦИКЛЫ ---
      // Требовать использования for-of вместо стандартного for
      '@typescript-eslint/prefer-for-of': 'warn',

      // --- OPTIONAL CHAINING ---
      // Использовать опциональную цепочку вместо && проверок
      // Полезно для работы с Signal values
      '@typescript-eslint/prefer-optional-chain': 'warn', // Только предупреждение

      // --- NULLISH COALESCING ---
      // Использовать nullish coalescing (??) вместо ||
      // Рекомендуется для значений Signals по умолчанию
      '@typescript-eslint/prefer-nullish-coalescing': 'warn', // Только предупреждение

      // --- READONLY МАССИВЫ ---
      // Предпочитать readonly для массивов где возможно
      // Важно для immutable patterns в NgRx Signals
      '@typescript-eslint/prefer-readonly': 'warn',

      // --- ENUM ---
      // Предпочитать const enum или union types
      '@typescript-eslint/prefer-enum-initializers': 'warn',

      // ========================================
      // ОБЩИЕ ПРАВИЛА ESLint
      // ========================================

      // --- ОТЛАДКА И КОНСОЛЬ ---
      // Запрет использования console (кроме warn и error)
      // В production коде не должно быть console.log
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error', 'info'], // Разрешить warn, error, info
        },
      ],

      // Запрет debugger в production коде
      'no-debugger': 'error',

      // Запрет alert (использовать компоненты UI библиотек)
      'no-alert': 'error',

      // --- СРАВНЕНИЯ ---
      // Требовать использование === и !== вместо == и !=
      // Строгое сравнение важно для работы с Signals
      eqeqeq: ['error', 'always', { null: 'ignore' }], // Разрешить == null для проверки null/undefined

      // --- ПЕРЕМЕННЫЕ ---
      // Запрет var (использовать let/const)
      'no-var': 'error',

      // Предпочитать const где возможно
      // Важно для immutability в NgRx Signals
      'prefer-const': 'error',

      // Запрет изменения параметров функции
      // Критично для pure functions в signals и computed
      'no-param-reassign': [
        'error',
        {
          props: true, // Запретить изменение свойств объектов-параметров
          ignorePropertyModificationsFor: ['state'], // Разрешить для NgRx reducers
        },
      ],

      // --- СТРОКИ ---
      // Предпочитать template strings вместо конкатенации
      'prefer-template': 'error',

      // --- СТРЕЛОЧНЫЕ ФУНКЦИИ ---
      // Требовать скобки для параметров стрелочных функций
      'arrow-parens': ['error', 'always'],

      // Использовать стрелочные функции для коллбэков
      'prefer-arrow-callback': 'warn',

      // --- ДЕСТРУКТУРИЗАЦИЯ ---
      // Предпочитать деструктуризацию объектов и массивов
      'prefer-destructuring': [
        'warn',
        {
          array: false, // Не требовать для массивов
          object: true, // Требовать для объектов
        },
      ],

      // --- SPREAD ОПЕРАТОР ---
      // Предпочитать spread вместо Object.assign
      'prefer-spread': 'error',

      // --- ФОРМАТИРОВАНИЕ (управляется Prettier) ---
      // Запрет множественных пробелов
      'no-multi-spaces': 'off', // Prettier управляет этим

      // Требовать запятую в конце для многострочных объектов/массивов
      'comma-dangle': 'off', // Prettier управляет этим

      // Максимальная длина строки
      'max-len': 'off', // Prettier управляет этим

      // --- ИМЕНОВАНИЕ ---
      // Camel case для переменных и функций
      camelcase: [
        'warn',
        {
          properties: 'never', // Не проверять свойства объектов
          ignoreDestructuring: true, // Игнорировать деструктуризацию
        },
      ],

      // ========================================
      // ПРАВИЛА ДЛЯ NGRX SIGNALS (@ngrx/signals)
      // ========================================

      // --- NAMING CONVENTIONS для Signals ---
      '@typescript-eslint/naming-convention': [
        'warn',
        // Signals должны иметь суффикс $ (опционально, как Observable)
        // Пример: userSignal$ = signal<User>(...)
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        // Константы в UPPER_CASE
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        // Интерфейсы с префиксом I или без
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false, // Не требовать префикс I
          },
        },
        // Type aliases в PascalCase
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        // Enum в PascalCase
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
      ],

      // ========================================
      // PRETTIER ИНТЕГРАЦИЯ
      // ========================================
      'prettier/prettier': [
        'error',
        {
          // Без точки с запятой (современный TypeScript стиль)
          semi: false,
          // Одинарные кавычки (предпочтительнее для TypeScript)
          singleQuote: true,
          // Максимальная длина строки
          printWidth: 100,
          // Размер табуляции
          tabWidth: 2,
          // Trailing comma в ES5 (объекты, массивы)
          trailingComma: 'es5',
          // Всегда скобки для стрелочных функций
          arrowParens: 'always',
          // Окончание строк (LF для всех платформ)
          endOfLine: 'lf',
          // Использовать пробелы вместо табов
          useTabs: false,
          // Кавычки в объектах только когда необходимо
          quoteProps: 'as-needed',
          // Скобки в JSX (для будущего использования)
          bracketSpacing: true,
        },
      ],
    },
  },

  // ========================================
  // ПРАВИЛА ДЛЯ HTML ШАБЛОНОВ (Angular 21+)
  // ========================================
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      // --- СЛОЖНОСТЬ ШАБЛОНОВ ---
      // Максимальная сложность inline-выражений в шаблонах
      // Для сложной логики используйте computed signals
      '@angular-eslint/template/cyclomatic-complexity': [
        'warn',
        {
          maxComplexity: 15, // Увеличено до 10 для работы с signals
        },
      ],

      // --- СТИЛИ ---
      // Запрет использования inline-стилей в шаблонах
      // Используйте CSS классы или Angular styling
      '@angular-eslint/template/no-inline-styles': [
        'warn',
        {
          allowNgStyle: true, // Разрешить [ngStyle]
          allowBindToStyle: true, // Разрешить [style.property]
        },
      ],

      // --- НОВЫЙ CONTROL FLOW (Angular 21+) ---
      // Рекомендуется использовать новый @if, @for, @switch вместо *ngIf, *ngFor, *ngSwitch
      '@angular-eslint/template/prefer-control-flow': 'warn',

      // --- SELF-CLOSING TAGS ---
      // Использовать самозакрывающиеся теги где возможно
      '@angular-eslint/template/prefer-self-closing-tags': 'warn',

      // --- TRACKBY FUNCTION ---
      // Требовать использование track в @for (новый синтаксис Angular 21+)
      // Пример: @for (item of items(); track item.id) { }
      '@angular-eslint/template/use-track-by-function': 'error',

      // --- ВЫЗОВ ФУНКЦИЙ В ШАБЛОНАХ ---
      // ОТКЛЮЧЕНО: В Angular signals вызов функций-сигналов - норма
      // Примеры: {{ product() }}, @if (isLoading()) { }
      '@angular-eslint/template/no-call-expression': 'off',

      // --- ИНТЕРПОЛЯЦИЯ ---
      // Запрет пустых интерполяций
      '@angular-eslint/template/no-interpolation-in-attributes': 'off',

      // --- УСЛОВИЯ ---
      // Запрет отрицания в условиях (используйте @else)
      '@angular-eslint/template/no-negated-async': 'warn',

      // --- ДУБЛИКАТЫ ---
      // Запрет дублирующихся атрибутов
      '@angular-eslint/template/no-duplicate-attributes': 'error',

      // ========================================
      // ACCESSIBILITY ПРАВИЛА (a11y)
      // ========================================

      // --- ИЗОБРАЖЕНИЯ ---
      // Требовать alt атрибут для изображений
      '@angular-eslint/template/alt-text': 'error',

      // --- ФОРМЫ ---
      // label должны быть связаны с form controls
      '@angular-eslint/template/label-has-associated-control': 'error',

      // --- ИНТЕРАКТИВНЫЕ ЭЛЕМЕНТЫ ---
      // click события должны иметь соответствующие keyboard события
      // ПОНИЖЕНО: Важно для доступности, но не критично в разработке
      '@angular-eslint/template/click-events-have-key-events': 'off',

      // mouse события должны иметь keyboard альтернативы
      '@angular-eslint/template/mouse-events-have-key-events': 'off',

      // Интерактивные элементы должны быть фокусируемыми
      '@angular-eslint/template/interactive-supports-focus': 'off',
    },
  },

  // ========================================
  // PRETTIER ИНТЕГРАЦИЯ
  // ========================================
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  }
)
