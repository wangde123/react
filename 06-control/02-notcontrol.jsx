import React, { Component, createRef } from "react";

// 由react自己控制的组件叫非受控组件
class App extends Component {
  // constructor() {
  //   super();
  //   // createRef的返回值是一个地址的引用
  //   this.ipt = createRef();
  // }
  ipt = createRef();
  ipt2 = createRef();

  handleClick = () => {
    console.log(this.ipt.current.value);
    console.log(this.ipt2.current.value);
  };

  render() {
    return (
      <>
        <h2>非受控组件</h2>
        {/* 将input指向那一块地址 */}
        {/* 非受控组件的默认值是使用defaultValue属性 */}
        <input type="text" ref={this.ipt} defaultValue="abc" />
        <input type="text" ref={this.ipt2} />
        <button onClick={this.handleClick}>btn</button>
      </>
    );
  }
}

export default App;
