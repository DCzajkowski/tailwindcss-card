const plugins =
  process.env.NODE_ENV === 'production'
    ? [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
          content: ['./public/**/*.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
        require('cssnano'),
      ]
    : [require('tailwindcss')];

module.exports = { plugins };
