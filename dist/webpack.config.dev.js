"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'); // const test = path.join(__dirname, './src/index.html')


var htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
});
module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [htmlPlugin],
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.js|jsx$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, //css-loader可以通过?追加参数(modules&loaclIndexName=[path][name]-[loacl]-[hash:5]),参数modules是为css文件启用模块化打包css
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules&loaclIndexName=[path][name]-[loacl]-[hash:5]', 'sass-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    }, //!less-loader还没处理好
    //打包处理字体文件的loader,需要依赖filr-loader
    {
      test: /\.ttf|woff|woff2|eot|svg$/,
      use: 'url-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    //表示这几个后缀名可以省略不写
    alias: {
      '@': path.join(__dirname, './src') //@表示src这层目录

    }
  }
}; // console.log(path.join(__dirname, './src'))