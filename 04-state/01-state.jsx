import React, { Component } from "react";
// 只有类组件可以定义自己的state，函数组件是没有的
// 只有加了state的数据才具有响应式

// state有两种定义方式
// 1. 声明式定义
// 2. 在构造函数的构造器里面定义state

class App extends Component {
  // state = {
  //   count: 10,
  // };

  // constructor函数是在类被实例化的时候调用，最先调用的
  constructor() {
    super();
    // 需要调用super以后才能调用this
    this.state = {
      count: 10,
      name: "pengshao",
      url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
      show: true,
      list: ["张三", "里斯", "王五"],
    };
  }

  render() {
    const { show, list } = this.state;
    return (
      <>
        <h2>响应式数据-state</h2>
        <p>{this.state.count}</p>
        <p>name: {this.state.name}</p>
        <img src={this.state.url} alt="" />

        {/* 条件渲染可以使用三目运算或者&&短路 */}
        {/* {show ? <p>state</p> : null} */}
        {show && <p>state</p>}

        {/* 循环渲染 */}
        {/* <ul>{this.state.list}</ul> */}
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
