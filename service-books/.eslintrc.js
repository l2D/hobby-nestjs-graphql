module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'no-underscore-dangle': 0,
    'require-await': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['sibling', 'index'],
          'parent',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-cycle': 0,
  },
  ignorePatterns: ['dist'],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
};
