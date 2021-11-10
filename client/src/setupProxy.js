const createProxyMiddleware = require('http-proxy-middleware')
module.exports = app => {
  app.use(
    createProxyMiddleware(
      ['/api', '/login', '/hompage','/registration'],
      {
        target: 'http://localhost:5000',
        changeOrigin: true,
        ws: true,
        router: {
          '/login': 'http://localhost:5000/login',
          '/hompage': 'http://localhost:5000/hompage',
          '/registration': 'http://localhost:5000/registration',
          
        }
      }
    )
  )
}