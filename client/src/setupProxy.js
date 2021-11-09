const createProxyMiddleware = require('http-proxy-middleware')
module.exports = app => {
  app.use(
    createProxyMiddleware(
      ['/api', '/login', '/homepage','/registration'],
      {
        target: 'http://localhost:5000',
        changeOrigin: true,
        ws: true,
        router: {
          '/login': 'http://localhost:5000/login',
          '/homepage': 'http://localhost:5000/homepage',
          '/registration': 'http://localhost:5000/registration',
          
        }
      }
    )
  )
}