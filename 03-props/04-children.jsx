import React, { Component } from "react";

// props.children相当于是vue的插槽，内容分发
// 文本，标签，组件都能分发
class Child1 extends Component {
  render() {
    console.log(this);
    return <div>child1组件 - {this.props.children}</div>;
  }
}

const Child2 = (props) => {
  return <div>child2组件 - {props.children}</div>;
};

class App extends Component {
  render() {
    return (
      <>
        <h2>children</h2>
        <Child1>
          <span>123</span>
        </Child1>
        <Child2>456</Child2>
      </>
    );
  }
}

export default App;
