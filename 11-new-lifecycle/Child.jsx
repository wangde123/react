import React, { Component } from "react";

class Child extends Component {
  state = {
    count: 10,
    prevCount: 10,
  };

  // 从props得到一个state
  // 需要由一个state的值，总是和props的值保持一致
  // 必须要有state，才能用getDerivedStateFromProps
  // 必须要return 一个对象或者null
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    // return null;
    // return {
    //   count: 20,
    // };
    // return {
    //   count: nextProps.num,
    // };

    // 1. nextProps.num 20  nextState.prevCount 10  ->  count：20  prevCount： 20
    // 2. nextProps.num 40  nextState.prevCount 20  ->  count：40  prevCount： 40
    // 3. nextProps.num 40  nextState.prevCount 40  ->  count: 80  prevCount： 40
    if (nextProps.num === nextState.prevCount) {
      return null;
    } else {
      return {
        count: nextProps.num,
        prevCount: nextProps.num,
      };
    }
  }

  fn = () => {
    this.setState({
      count: 80,
    });
  };

  render() {
    return (
      <>
        <div>child组件</div>
        <p>{this.state.count}</p>
        <button onClick={this.fn}>btn2</button>
      </>
    );
  }

  // 在更新之前得到一个快照（记录）
  // 在更新前拿到一个记录，传给更新后的状态
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    // 只能传递一些ui的数据
    // 元素的css的状态
    return 100;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
  }
}

export default Child;
