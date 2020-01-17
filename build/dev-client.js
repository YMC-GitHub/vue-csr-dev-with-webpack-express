/* eslint-disable */
require('eventsource-polyfill')
//https://www.npmjs.com/package/webpack-hot-middleware#client
var hotClient = require('webpack-hot-middleware/client?noInfo=true&timeout=5000&reload=true')
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})

