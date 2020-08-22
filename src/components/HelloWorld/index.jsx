import React from 'react'

class HelloWorld extends React.Component{
  constructor(){
    super()
  }
  render(){
    {/*组件返回一个dom*/}
    {/*jsx不支持文件夹的index.js这种导出方式*/}
    return <h1>我是组件HelloWorld</h1>
  }
}

export default HelloWorld

// jsx中可折叠的注释

//#region
//终于不是helloWorld了
// 环境已经搭建好
// #endregion