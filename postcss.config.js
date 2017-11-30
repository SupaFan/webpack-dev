module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-size': {},
    'autoprefixer': { browsers: ['ie>=8', '>1% in CN'] },
    'cssnano': {},
    'postcss-nested': {},
    'postcss-adaptive': { remUnit: 75, autoRem: true }
  }
}