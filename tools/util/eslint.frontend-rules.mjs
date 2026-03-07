export const frontendTsRules = {
  '@angular-eslint/template/no-call-expression': 'off',
  '@angular-eslint/prefer-standalone': 'warn',
  '@angular-eslint/no-input-rename': 'error',
  '@angular-eslint/no-output-on-prefix': 'error',
  '@angular-eslint/no-output-rename': 'error',
  '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
  '@angular-eslint/component-max-inline-declarations': [
    'error',
    {
      template: 53,
      styles: 23,
    },
  ],
  '@angular-eslint/use-lifecycle-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      modifiers: ['const'],
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
    },
    {
      selector: 'enum',
      format: ['PascalCase'],
    },
  ],
  'no-console': [
    'warn',
    {
      allow: ['warn', 'error', 'info'],
    },
  ],
  'no-debugger': 'error',
  'no-alert': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'no-var': 'error',
  'prefer-const': 'error',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: ['state'],
    },
  ],
  'prefer-template': 'error',
  'arrow-parens': ['error', 'always'],
  'prefer-arrow-callback': 'warn',
  'prefer-destructuring': [
    'warn',
    {
      array: false,
      object: true,
    },
  ],
  'prefer-spread': 'error',
  camelcase: [
    'warn',
    {
      properties: 'never',
      ignoreDestructuring: true,
    },
  ],
}

export const frontendTemplateRules = {
  '@angular-eslint/template/cyclomatic-complexity': [
    'warn',
    {
      maxComplexity: 15,
    },
  ],
  '@angular-eslint/template/no-inline-styles': [
    'warn',
    {
      allowNgStyle: true,
      allowBindToStyle: true,
    },
  ],
  '@angular-eslint/template/prefer-control-flow': 'warn',
  '@angular-eslint/template/prefer-self-closing-tags': 'warn',
  '@angular-eslint/template/use-track-by-function': 'error',
  '@angular-eslint/template/no-call-expression': 'off',
  '@angular-eslint/template/no-interpolation-in-attributes': 'off',
  '@angular-eslint/template/no-negated-async': 'warn',
  '@angular-eslint/template/no-duplicate-attributes': 'error',
  '@angular-eslint/template/alt-text': 'error',
  '@angular-eslint/template/label-has-associated-control': 'error',
  '@angular-eslint/template/click-events-have-key-events': 'off',
  '@angular-eslint/template/mouse-events-have-key-events': 'off',
  '@angular-eslint/template/interactive-supports-focus': 'off',
}
