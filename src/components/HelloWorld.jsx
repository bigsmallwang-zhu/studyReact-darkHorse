import React from 'react'
// import jQuery from'jquery/dist/jquery'
import bootcss from 'bootstrap/dist/css/bootstrap.css'
import '@/style/less/demo.less'
import '@/style/sass/demo.scss'

// console.log(bootcss);

class HelloWorld extends React.Component{
  constructor(){
    super()
  }
  render(){
    {/*组件返回一个dom*/}
    return <h1>
    我是组件HelloWorld
    <button className="btn btn-primary">点我</button>
    <p className="panel panel-danger"></p>
    </h1>
  }
}

export default HelloWorld