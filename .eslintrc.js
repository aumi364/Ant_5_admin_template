module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-uses-vars': 'error',
    'no-const-assign': 'error',
    'no-undef': 'error',
    'import/no-unresolved': [2, { commonjs: true }],
    'react/prop-types': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
