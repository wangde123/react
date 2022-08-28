import React, { Component } from "react";

console.log("child");

class Child extends Component {
  state = {};
  render() {
    return <div>child组件</div>;
  }
}

export default Child;
