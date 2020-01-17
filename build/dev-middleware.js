const devMiddleware = (compiler, opts) => {
  const expressMiddleware = require('webpack-dev-middleware')(compiler, opts)
  return expressMiddleware
}
module.exports = devMiddleware
