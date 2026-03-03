// @ts-check
// Конфигурация ESLint для NestJS проекта (Backend)
// Использует flat config формат (ESLint 9+)

import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // ========================================
  // ИГНОРИРУЕМЫЕ ФАЙЛЫ И ПАПКИ
  // ========================================
  {
    // Файлы и папки, которые не нужно проверять ESLint
    ignores: [
      'eslint.config.mjs', // Сам конфиг файл
      'dist/**', // Скомпилированный код
      'node_modules/**', // Зависимости
      'coverage/**', // Отчеты о покрытии тестами
      '*.js', // JavaScript файлы (используем только TypeScript)
      'public/**', // Статические файлы
    ],
  },

  // ========================================
  // БАЗОВЫЕ РЕКОМЕНДОВАННЫЕ ПРАВИЛА
  // ========================================
  // Рекомендованные правила ESLint для JavaScript
  eslint.configs.recommended,

  // Рекомендованные правила TypeScript ESLint с проверкой типов
  // recommendedTypeChecked включает:
  // - Проверку типов во время линтинга
  // - Обнаружение небезопасных операций с типами
  // - Проверку Promise и async/await
  ...tseslint.configs.recommendedTypeChecked,

  // Интеграция с Prettier (должна быть последней)
  eslintPluginPrettierRecommended,

  // ========================================
  // НАСТРОЙКИ ЯЗЫКА И ПАРСЕРА
  // ========================================
  {
    languageOptions: {
      // Глобальные переменные окружения
      globals: {
        ...globals.node, // Node.js глобальные переменные (process, Buffer, и т.д.)
        ...globals.jest, // Jest глобальные переменные (describe, it, expect, и т.д.)
      },

      // Тип исходного кода (модули ES или CommonJS)
      // NestJS использует модули, но компилируется с учетом настроек tsconfig
      sourceType: 'module',

      // Настройки парсера TypeScript
      parserOptions: {
        // Автоматически находит tsconfig.json проекта и использует его для проверки типов
        projectService: true,

        // Корневая директория для поиска tsconfig.json
        // @ts-ignore необходим т.к. import.meta.dirname доступен только в ES модулях
        // @ts-ignore
        tsconfigRootDir: import.meta.dirname,

        // ECMAScript версия (должна соответствовать target в tsconfig)
        ecmaVersion: 2023,
      },
    },
  },

  // ========================================
  // ПРАВИЛА ДЛЯ TYPESCRIPT ФАЙЛОВ
  // ========================================
  {
    rules: {
      // ========================================
      // TYPESCRIPT ПРАВИЛА
      // ========================================

      // Разрешить использование типа any (часто нужен в NestJS для динамических данных)
      // off: выключено, warn: предупреждение, error: ошибка
      '@typescript-eslint/no-explicit-any': 'off',

      // Предупреждение при Promise, которые не обрабатываются (без await или .catch)
      // Критично для избежания необработанных ошибок в async функциях
      '@typescript-eslint/no-floating-promises': 'warn',

      // Предупреждение при передаче аргументов с небезопасными типами
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // Предупреждение при присваивании значений с небезопасными типами
      '@typescript-eslint/no-unsafe-assignment': 'warn',

      // Предупреждение при доступе к свойствам объектов с небезопасными типами
      '@typescript-eslint/no-unsafe-member-access': 'warn',

      // Предупреждение при возврате значений с небезопасными типами
      '@typescript-eslint/no-unsafe-return': 'warn',

      // Предупреждение при вызове функций с небезопасными типами
      '@typescript-eslint/no-unsafe-call': 'warn',

      // Предупреждение для async функций, которые не используют await
      // Помогает избежать ненужного использования async
      '@typescript-eslint/require-await': 'warn',

      // Предупреждение для неиспользуемых переменных
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Игнорировать аргументы начинающиеся с _
          varsIgnorePattern: '^_', // Игнорировать переменные начинающиеся с _
          caughtErrorsIgnorePattern: '^_', // Игнорировать ошибки начинающиеся с _
        },
      ],

      // Требовать явное указание типа возвращаемого значения для экспортируемых функций
      // Улучшает документацию API и предотвращает непреднамеренные изменения типов
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true, // Разрешить для выражений (стрелочные функции)
          allowTypedFunctionExpressions: true, // Разрешить если тип уже указан
          allowHigherOrderFunctions: true, // Разрешить для функций высшего порядка
        },
      ],

      // Требовать явное указание модификаторов доступа (public, private, protected)
      // Важно для ясности кода и инкапсуляции в классах
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit', // Всегда указывать модификатор
          overrides: {
            constructors: 'no-public', // Для конструкторов можно опустить public
          },
        },
      ],

      // Требовать явный тип возвращаемого значения для методов классов
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        {
          allowArgumentsExplicitlyTypedAsAny: true, // Разрешить если аргументы явно типизированы как any
        },
      ],

      // Использовать интерфейсы вместо type aliases где возможно
      // Интерфейсы лучше оптимизируются TypeScript компилятором
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Запрет на использование ! (non-null assertion)
      // Может скрывать потенциальные ошибки с null/undefined
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Требовать использования for-of вместо стандартного for для массивов
      '@typescript-eslint/prefer-for-of': 'warn',

      // Использовать опциональную цепочку (?.) вместо && проверок
      // obj?.prop вместо obj && obj.prop
      '@typescript-eslint/prefer-optional-chain': 'error',

      // Использовать nullish coalescing (??) вместо || для значений по умолчанию
      // value ?? default вместо value || default
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',

      // Предпочитать использование as const для литералов
      '@typescript-eslint/prefer-as-const': 'error',

      // Запрет на пустые интерфейсы (кроме расширения других интерфейсов)
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],

      // ========================================
      // NESTJS СПЕЦИФИЧНЫЕ ПРАВИЛА
      // ========================================

      // Для NestJS декораторов разрешаем использование выражений в декораторах
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',

      // ========================================
      // ОБЩИЕ ПРАВИЛА ESLint
      // ========================================

      // Запрет использования console (кроме warn и error)
      // В production коде не должно быть console.log
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error', 'info'], // Разрешить warn, error и info для логирования
        },
      ],

      // Строгий запрет debugger в коде
      'no-debugger': 'error',

      // Требовать использование === и !== вместо == и !=
      // Избегает неожиданного приведения типов
      eqeqeq: ['error', 'always'],

      // Запрет var (использовать let/const)
      'no-var': 'error',

      // Предпочитать const где возможно
      // Делает код более предсказуемым
      'prefer-const': 'error',

      // Предпочитать template strings вместо конкатенации строк
      // `${name}` вместо 'Hello ' + name
      'prefer-template': 'error',

      // Предпочитать rest параметры вместо arguments
      'prefer-rest-params': 'error',

      // Предпочитать spread оператор вместо .apply()
      'prefer-spread': 'error',

      // Запрет множественных пробелов
      'no-multi-spaces': 'error',

      // Запрет trailing пробелов в конце строк (управляется Prettier)
      'no-trailing-spaces': 'off',

      // Запрет пустых блоков кода
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true, // Разрешить пустые catch блоки
        },
      ],

      // Максимальная длина строки (управляется Prettier)
      'max-len': 'off',

      // Требовать return в callback функциях для методов массивов
      'array-callback-return': 'error',

      // Запрет await внутри циклов (может привести к проблемам с производительностью)
      'no-await-in-loop': 'warn',

      // ========================================
      // PRETTIER ИНТЕГРАЦИЯ
      // ========================================
      'prettier/prettier': [
        'error',
        {
          // Использовать точку с запятой в конце выражений
          semi: true,

          // Использовать одинарные кавычки
          singleQuote: true,

          // Максимальная длина строки (соответствует tsconfig)
          printWidth: 100,

          // Размер табуляции
          tabWidth: 2,

          // Trailing comma везде где возможно (ES2017+)
          // Улучшает git diff при добавлении новых элементов
          trailingComma: 'all',

          // Всегда скобки для стрелочных функций
          arrowParens: 'always',

          // Автоматическое определение окончания строк
          // Будет использовать то, что есть в файле, или системное по умолчанию
          endOfLine: 'auto',

          // Пробелы внутри фигурных скобок объектов
          bracketSpacing: true,

          // Использовать пробелы вместо табов
          useTabs: false,
        },
      ],
    },
  },

  // ========================================
  // СПЕЦИФИЧНЫЕ ПРАВИЛА ДЛЯ ТЕСТОВЫХ ФАЙЛОВ
  // ========================================
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts', 'test/**/*.ts'],
    rules: {
      // В тестах можно использовать any более свободно
      '@typescript-eslint/no-explicit-any': 'off',

      // В тестах можно не указывать возвращаемый тип
      '@typescript-eslint/explicit-function-return-type': 'off',

      // В тестах можно использовать небезопасные операции
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',

      // В тестах разрешены пустые функции (для моков)
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
);
