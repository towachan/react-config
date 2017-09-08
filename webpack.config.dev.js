var path = require('path');
var config = require('./webpack.config.js')
var webpack = require("webpack");
var moment = require('moment');

const buildDate = moment().format('YYYY-MM-DD HH:mm:ss')

const dp = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('dev'),
    'API_URL': JSON.stringify('http://localhost:8888/post'),
    'BUILD_DATE': JSON.stringify(buildDate),
    'VERSION': JSON.stringify(require('./package.json').version)
  }
})

config.module.rules.push({
  enforce: 'pre',
  test: /\.(js|jsx)$/,
  include: /(app|test)/,
  loader: 'eslint-loader'
})

config.output.path = path.join(__dirname, 'dist')
config.plugins.push(dp)
config.devtool = 'eval'
config.devServer = {
  inline: true,
  port: 7777
}



module.exports = config
