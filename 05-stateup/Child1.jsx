import React, { Component } from "react";

class Child1 extends Component {
  state = {
    count: 10,
  };
  render() {
    // console.log(this.props);
    return <div>child1组件 - {this.state.count}</div>;
  }

  componentDidMount() {
    this.props.onGetCount(this.state.count);
  }
}

export default Child1;
