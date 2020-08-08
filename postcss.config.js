const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')


module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-preset-env')({ stage: 1 }),
    process.env.NODE_ENV === 'production' ? cssnano({
      preset: 'default'
    }) : null,
    //  purgecss({
    //   content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    // })
  ]
}
