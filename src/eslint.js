const commonRules = {
  'import/no-extraneous-dependencies': 0,
  'import/prefer-default-export': 0,
  'import/no-mutable-exports': 1,
  'import/order': 1,
  'import/no-cycle': 0,
  'react/prop-types': 0,
  'react/jsx-props-no-spreading': 0,
  'react/destructuring-assignment': 0,
  'react/state-in-constructor': 0,
  'react/sort-comp': 1,
  'react/no-array-index-key': 0,
  'react/prefer-stateless-function': 0,
  'react/static-property-placement': 0,
  'react/no-unescaped-entities': 0,
  'react-hooks/rules-of-hooks': 1,
  'react-hooks/exhaustive-deps': 1,
  'react/no-did-update-set-state': 1,
  'react/no-danger': 0,
  'react/jsx-filename-extension': 0,
  'react/jsx-curly-brace-presence': 0,
  'jsx-a11y/click-events-have-key-events': 0,
  'jsx-a11y/mouse-events-have-key-events': 0,
  'jsx-a11y/no-noninteractive-element-interactions': 0,
  'jsx-a11y/no-static-element-interactions': 0,
  'jsx-a11y/anchor-is-valid': 0,
  'jsx-a11y/accessible-emoji': 0,
  'jsx-a11y/label-has-associated-control': 0,
  // Common abbreviations are known and readable
  'unicorn/prevent-abbreviations': 'off'
};

const config = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    './rules/index.js'
  ].map(require.resolve),
  plugins: ['eslint-comments', 'jest', 'unicorn', 'react-hooks'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    ...commonRules
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint-config-airbnb-typescript',
        'eslint-config-prettier',
        'eslint-config-prettier/react',
        'eslint-config-prettier/@typescript-eslint',
        './rules/index.js'
      ].map(require.resolve),
      plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'unicorn', 'react-hooks'],
      rules: {
        ...commonRules,
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          { allowTypedFunctionExpressions: true }
        ],
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/dot-notation': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/lines-between-class-members': 0
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] } }
  }
};

module.exports = config;
