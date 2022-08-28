import React, { Component } from "react";

class App extends Component {
  state = {
    count: 3,
    name: "pengshao",
  };

  handleClick = () => {
    // console.log(this);
    // 想改变state的值，需要去调用setState方法
    // this.state.count = 10; ×

    // 里面可以接收一个对象
    // setState是异步的
    // setState可以接收第二个参数是回调函数,改变以后再调用
    // this.setState(
    //   {
    //     count: 10,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    // 里面可以接收一个函数，函数有一个参数是prevState
    // setState可以接收第二个参数是回调函数,改变以后再调用
    this.setState(
      (prevState) => {
        return {
          count: prevState.count + 1,
        };
      },
      () => {
        console.log(this.state.count);
      }
    );

    // 如果改变以后的值，不需要依赖前一次的值，写成对象更简单
    // 如果改变以后的值，需要依赖前一次的值，写成函数更安全

    // setState是同步还是异步
    // 18版本全部是异步的
    // 17版本中，合成事件和生命周期是异步的，在定时器和原生js里面是同步的
  };

  render() {
    return (
      <>
        <h2>setState</h2>
        <p>{this.state.count}</p>
        {/* <button onClick={this.handleClick.bind(this)}>btn</button> */}
        {/* <button onClick={this.handleClick}>btn</button> */}
        <button>btn</button>
      </>
    );
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     count: 20,
    //   });
    //   console.log(this.state.count);
    // }, 1000);

    document.querySelector("button").addEventListener("click", () => {
      this.setState({
        count: 20,
      });
      console.log(this.state.count);
    });
  }
}

export default App;
