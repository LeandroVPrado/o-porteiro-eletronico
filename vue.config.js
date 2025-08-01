const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        implementation: require('sass'),
        // se quiser manter variáveis disponíveis em todo componente:
        additionalData: `@use "@/assets/scss/_variables.scss" as *;`
      }
    }
  }
})
