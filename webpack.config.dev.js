var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'App.jsx'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); //发布文件所存放的目录

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    entry: APP_FILE
  },
  output: {
    path: BUILD_PATH,
    // filename: '[name].js', //编译后的文件名字
    // chunkFilename: '[name].[chunkhash:5].min.js'
    filename:"bundle.js"
  },

  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },


  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png'
    },
    {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg'
    }]
  }
};
