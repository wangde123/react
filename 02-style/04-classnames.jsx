import React, { Component } from "react";
// 引入classnames，用于在不同条件添加不同样式
import classNames from "classnames/bind";
import styles from "./05-style.css";

// bind方法会返回一个cx函数
let cx = classNames.bind(styles);

class App extends Component {
  state = {
    done: true,
    num: 1,
  };

  render() {
    // cx的对象的左边表示类名，右边表示js表达式
    let className = cx({
      red: !this.state.done,
      blue: this.state.done,
      big: this.state.done && this.state.num === 1,
    });
    return (
      <>
        <h2>不同条件添加不同样式</h2>
        {/* <p className={this.state.done ? "blue" : "red"}>hello react!!</p> */}
        <p className={className}>hello react!!</p>
      </>
    );
  }
}

export default App;
