import React, { Component } from "react";

/*
  1. 内联地使用bind(this, 参数)
    bind可以产生新函数，bind的新函数是不会自动执行，而且会将bind的第二个参数，作为新函数的第一个参数
    不推荐，会产生新函数，增加内存
  
  2. 内联地使用箭头函数
    外层靠点击触发，里层自动触发
    不是很好，每次render更新，都会产生新函数，复杂类型，增加内存
    是开发的时候用的最多的

  3. 柯里化函数,(闭包)
    外层直接执行，点击的时候触发里层函数
    最理想的方式
*/

class App extends Component {
  state = {
    count: 1,
  };
  // handleClick = (num, e) => {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + num,
  //     };
  //   });
  // };

  // handleClick = (n) => {
  //   return (e) => {
  //     console.log(n, e);
  //   };
  // };

  handleClick = (n) => (e) => {
    // 阻止冒泡和阻止默认行为和原生的方式相同
    console.log(n, e);
  };

  render() {
    return (
      <>
        <h2>事件的传参问题</h2>
        <p>{this.state.count}</p>
        {/* <button onClick={this.handleClick.bind(this, 1)}>btn</button>
        <button onClick={this.handleClick.bind(this, 2)}>btn</button> */}

        {/* <button onClick={(e) => this.handleClick(1, e)}>btn</button>
        <button onClick={() => this.handleClick(2)}>btn</button> */}

        <button onClick={this.handleClick(1)}>btn</button>
        <button onClick={this.handleClick(2)}>btn</button>
      </>
    );
  }
}

export default App;
