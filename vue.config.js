const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/air-conditioner/' : '/',
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  }
}
