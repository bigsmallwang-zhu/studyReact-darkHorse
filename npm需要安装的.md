`cnpm i react react-dom -S`
webpack4.x必须安装webpack-cli:`cnpm i webpack webpack-cli -D`

不需要每次执行webpack打包：`cnpm i webpack-dev-server -D`
把bund.js文件加载到内存当中调试
需要在script当中添加###"dev": "webpack-dev-server --port 3000 --open --hot --host 127.0.0.1",
npm run dev
把index.html挂载到内存当中:`cnpm i html-webpack-plugin -D`

`cnpm i babel-core babel-loader babel-plugin-transform-runtime -D`
`cnpm i babel-preset-env babel-preset-stage-0 -D`

可以识别jsx语法的:`cnpm i babel-preset-react -D`

黑马安装的babel因为版本问题，所有自己可以用下边的(以下为版本参照)
"@babel/core": "^7.5.5",
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
"babel-plugin-transform-runtime": "^6.23.0",
"babel-runtime": "^6.26.0",
"babel-preset-env": "^1.7.0",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-0": "^6.24.1",
设置
需增加 "@babel/core": "^7.5.5",
把babel-loader8.x的版本改成"babel-loader": "^7.1.5",
然后npm install
不行的话就需要npm uninstall babel-loader -D后再npm install

安装bootstrap
`cnpm i bootstrap@3.3.7 -S`

##webpack.config.js要按照官网的来写才不会报那些不明不白的错误
CSS样式表loader,
`cnpm i style-loader css-loader  -D`
sass:
`cnpm i sass-loader node-sass -D`
要求文件名是.scss，和css一样是大括号，.sass是缩进语法
less
`cnpm i less-loader  -D`

打包字体loader,需要依赖file-loader
`cnpm i url-loader -D`