const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EncodingPlugin = require('webpack-encoding-plugin')
const path = require('path')

const config = {
  entry: ['babel-polyfill', './app/index.jsx'],

  output: {
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react'],
            plugins: [
              'transform-object-assign',
              'transform-decorators-legacy',
              'transform-object-rest-spread'
            ],
            compact: false
          }
        }
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|ico)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=100000']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'app'), path.join(__dirname, 'public'), 'node_modules']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'HUB Dashboard',
      template: './app/index.html',
      inject: 'body',
      filename: 'index.html',
      favicon: 'public/img/favicon.ico'
    }),
    new EncodingPlugin({ encoding: 'utf8' }),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
  ]
}

module.exports = config
