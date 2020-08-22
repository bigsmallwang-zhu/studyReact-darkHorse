const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const test = path.join(__dirname, './src/index.html')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [{
      test: /\.js|jsx$/, 
      use: "babel-loader", 
      exclude: /node_modules/ 
    }, {
      //css-loader可以通过?追加参数(modules:true loaclIdentName=[path][name]-[loacl]-[hash:5]),参数modules是为css文件启用模块化打包css
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {   //打包处理css样式表的第三方loader

      // sass
      test: /\.s[ac]ss$/i,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }, {
      // less
      test: /\.less$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader" // compiles Less to CSS
      }]
    }, {
      //打包处理字体文件的loader,需要依赖filr-loader
      test: /\.ttf|woff|woff2|eot|svg$/, 
      use:'url-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],    //表示这几个后缀名可以省略不写
    alias: {
      '@': path.join(__dirname, './src')    //@表示src这层目录
    }
  }
}
