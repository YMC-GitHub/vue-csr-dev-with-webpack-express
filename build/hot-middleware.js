const hotMiddleware = (compiler, opts) => {
  const expressMiddleware = require('webpack-hot-middleware')(compiler, opts)
  require('./page-reload')(compiler, expressMiddleware)
  return expressMiddleware
}
module.exports = hotMiddleware
