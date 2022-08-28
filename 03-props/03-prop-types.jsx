import React, { Component } from "react";
// 引入prop-types，用于做props的类型检查
import { string, number, oneOfType, oneOf } from "prop-types";
// https://www.npmjs.com/package/prop-types

class Child extends Component {
  static propTypes = {
    name: string.isRequired,
    age: oneOfType([string, number]),
    size: oneOf(["small", "large", "middle"]),
  };
  render() {
    const { name, age } = this.props;
    return (
      <div>
        child组件 - {name} - {age}
      </div>
    );
  }
}
// Child.propTypes = {
//   name: string.isRequired,
//   age: oneOfType([string, number]),
//   size: oneOf(["small", "large", "middle"]),
// };

class App extends Component {
  render() {
    return (
      <>
        <h2>检查props的类型</h2>
        <Child name="pengshao" age="20" size="middle" />
      </>
    );
  }
}

export default App;
