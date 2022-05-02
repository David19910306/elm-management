const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://elm.cangdu.org', //, 'http://120.79.121.94:8001/'
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
