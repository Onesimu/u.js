//babel.config.js
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
  // plugins: ['@babel/plugin-external-helpers']
};