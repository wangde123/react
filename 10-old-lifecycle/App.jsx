// import React, { Component } from "react";
import React, { PureComponent } from "react";
//! 只有类组件才有生命周期
import Child from "./Child";

// PureComponent可以帮助我们自动比较props和state与之前是否相同
class App extends PureComponent {
  //! 1.初始化阶段
  // constructor是特殊的函数，实例化就自动执行，只执行一次
  // 初始化props和state
  // constructor还可以接收一个参数是props
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 10,
      list: [
        {
          sex: 1,
          name: "zhangsan",
        },
        {
          sex: 1,
          name: "lisi",
        },
        {
          sex: 2,
          name: "hanmeimei",
        },
      ],
      // name: props.name
    };
    // this.fn = this.fn.bind(this);
    // this.ipt = createRef();
  }

  //! 挂载阶段
  // componentWillMount相当于vue的beforeMount
  // componentWillMount已经被废弃了
  // 不能再这里做数据请求, 因为fiber算法的存在，由可能导致请求多次执行
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
    // this.setState({
    //   count: 20,
    // });
    // fetch("http://www.pudge.wang:3080/api/rated/list")
    //   .then((response) => response.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  }

  // render其实就是一个生命周期，渲染
  // render必须要renturn jsx
  // render也不能做数据请求, 原因和上面一样
  // 一般只做解构, 做数据的转换或者过滤或者计算
  render() {
    console.log("render");
    const { count, list } = this.state;
    const manList = list.filter((item) => item.sex === 1);
    return (
      <>
        <h2>旧版生命周期</h2>
        <p>{count}</p>
        {/* <p>{this.props.xxx}</p> */}
        <ul>
          {manList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <Child count={count} />
      </>
    );
  }

  // 挂载结束，相当于vue的mounted
  // 什么都能做
  // 只能在这里做数据请求
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        count: 20,
      });
    }, 2000);
  }

  //! 更新阶段
  // state的更新
  // shouldComponentUpdate一定要返回一个布尔值,来判断组件是否要更新
  // 是很重要的(面试),和性能优化相关的
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   // if (nextState.count === this.state.count) {
  //   //   return false;
  //   // } else {
  //   //   return true;
  //   // }
  //   return nextState.count !== this.state.count;
  // }

  // 组件更新前，相当于vue的beforeUpdate
  // 啥也没的做
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  // 组件更新后，相当于vue的updated
  // 没有被废弃，正常使用
  // 不要在这里改变数据, 会造成死循环
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //! 卸载阶段
  // 相当于vue的beforeDestory
  // 这里要做 卸载定时器，关闭websocket长连接，卸载事件监听, 卸载第三方插件
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default App;
