/* eslint-disable immutable/no-mutation */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['immutable'],
  rules: {
    'immutable/no-mutation': 2,
    'no-console': 0,
    allowForLoopAfterthoughts: true,
  },
};
