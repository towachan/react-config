var path = require('path');
var config = require('./webpack.config.js')
var webpack = require("webpack");
var moment = require('moment');

const buildDate = moment().format('YYYY-MM-DD HH:mm:ss')

var dp = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('uat'),
    'API_URL': JSON.stringify('/hdd_web_app/hdd'),
    'BUILD_DATE': JSON.stringify(buildDate),
    'VERSION': JSON.stringify(require('./package.json').version)
  }
})
config.output.path = path.join(__dirname, 'build_uat')

config.plugins.push(dp)
config.devtool = 'eval'

module.exports = config
