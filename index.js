module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],

  plugins: ['prettier'],

  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'ignore' },
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [{ pattern: '~/**', group: 'internal' }],
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
  ],
};
