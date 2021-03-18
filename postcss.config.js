const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('@tailwindcss/jit'),
    cssnano({
      preset: 'default',
    }),
    require('autoprefixer')
  ],
}
