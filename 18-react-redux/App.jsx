import React, { Component } from "react";
// import store from "./store";

// 3. 引入connect
// connect方法，connect的返回值是一个高阶组件
import { connect } from "react-redux";

import Form from "./Form";
import List from "./List";

// 4. connect函数需要两个函数作为参数
// 将仓库的state的值，映射到组件的props里面
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
// 将仓库的dispatch，映射到组件的props里面
const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch({ type: "increment" });
    },
    minus() {
      dispatch({ type: "decrement" });
    },
  };
};

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <h2>react结合redux</h2>
        {/* <button>-</button>
        <span>{store.getState().count}</span>
        <button onClick={() => store.dispatch({ type: "increment" })}>+</button> */}

        <button onClick={this.props.minus}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.add}>+</button>

        <hr />

        <Form />
        <List />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
