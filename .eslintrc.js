module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',    
    // 'eqeqeq': 2,
    // 'no-console': 1,
    'no-dupe-keys': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-eq-null': 0,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-param-reassign': 1,
    'no-redeclare': 2,
    'no-underscore-dangle': 2,
    'no-unreachable': 2,
    'no-use-before-define': 2,
    'no-useless-escape': 2,
  },
};
