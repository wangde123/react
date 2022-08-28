import React, { PureComponent } from "react";

//! 只要父组件render了，子组件必然会render
class Child extends PureComponent {
  render() {
    console.log("child render");
    return <div>child组件 - {this.props.count}</div>;
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }

  // 组件将要接收props
  // 被废弃了
  // 当props的值发生改变的时候调用
  // 一般不在这里做什么
  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.count !== this.props.count;
  // }

  UNSAFE_componentWillUpdate() {}
  componentDidUpdate() {}
}

export default Child;
