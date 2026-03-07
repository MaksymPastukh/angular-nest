import nx from '@nx/eslint-plugin'
import tseslint from 'typescript-eslint'

const depConstraints = [
  {
    sourceTag: 'scope:frontend',
    onlyDependOnLibsWithTags: ['scope:frontend'],
  },
  {
    sourceTag: 'scope:backend',
    onlyDependOnLibsWithTags: ['scope:backend'],
    bannedExternalImports: ['@angular/*', 'primeng*', '@primeuix/*', 'primeicons'],
  },
  {
    sourceTag: 'type:app',
    onlyDependOnLibsWithTags: ['type:feature', 'type:data-access', 'type:ui', 'type:util', 'type:core'],
  },
  {
    sourceTag: 'type:feature',
    onlyDependOnLibsWithTags: ['type:ui', 'type:data-access', 'type:util', 'type:core'],
  },
  {
    sourceTag: 'type:ui',
    onlyDependOnLibsWithTags: ['type:ui', 'type:util', 'domain:shared'],
  },
  {
    sourceTag: 'type:data-access',
    onlyDependOnLibsWithTags: ['type:util', 'type:core', 'domain:shared'],
  },
  {
    sourceTag: 'type:core',
    onlyDependOnLibsWithTags: ['type:core', 'type:util', 'domain:shared', 'domain:auth'],
  },
  {
    sourceTag: 'type:util',
    onlyDependOnLibsWithTags: ['type:util', 'domain:shared'],
  },
]

export default [
  {
    ignores: ['**/dist/**', '**/out-tsc/**', '**/.angular/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cts', '**/*.mts'],
    plugins: {
      '@nx': nx,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints,
        },
      ],
    },
  },
]
