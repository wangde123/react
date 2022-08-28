import React, { Component } from "react";

/*
  1. 事件的this指向问题
    1. 在事件的内联里面去bind(this)
      不好的，bind方法会产生一个新函数,存在内存中
    2. 在constructor里面添加this.handleClick = this.handleClick.bind(this);
      比较好的，将bind产生的新函数给存起来了，不会增加内存
    3. 直接使用箭头函数，箭头函数的this指向外层
      推荐的
*/

class App extends Component {
  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  state = {
    count: 10,
  };
  handleClick = () => {
    console.log(this.state.count);
  };

  render() {
    return (
      <>
        <h2>事件处理</h2>
        {/* <button onClick={this.handleClick.bind(this)}>btn</button> */}
        <button onClick={this.handleClick}>btn</button>
      </>
    );
  }
}

export default App;
