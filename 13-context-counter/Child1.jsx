import React, { Component } from "react";
import Child2 from "./Child2";

class Child1 extends Component {
  state = {};
  render() {
    return <Child2 />;
  }
}

export default Child1;
