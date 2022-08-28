import React, { Component } from "react";
// createContext用于跨组件通信，是一个方法,具有响应式
// 执行createContext方法会返回一个对象
// 当同一组的数据接收的时候，Provider和Consumer要来自于同一个context对象

import Child2 from "./Child2";

import { Provider, Consumer } from "./context";

// const { Provider, Consumer } = createContext();
// const { Provider, Consumer } = context;
//      提供者     消费者

// const Child2 = () => {
//   return (
//     <div>
//       child2组件 -
//       {/* Consumer用在子组件的里面，里面可以写一个函数，函数可以接收value作为参数 */}
//       <Consumer>
//         {(value) => {
//           return <span>{value.count}</span>;
//         }}
//       </Consumer>
//     </div>
//   );
// };

class Child1 extends Component {
  render() {
    return (
      <>
        <div>child1组件</div>
        <Consumer>{(value) => <p>{value.count}</p>}</Consumer>
        <Child2 />
      </>
    );
  }
}

class App extends Component {
  state = {
    count: 8,
  };

  fn = () => {
    this.setState({
      count: 10,
    });
  };

  render() {
    return (
      // Provider是套在父组件的最外面,并且它需要一个value属性
      <Provider
        value={{
          count: this.state.count,
        }}
      >
        <h2>
          context实现跨组件通信 - <button onClick={this.fn}>btn</button>
        </h2>
        <Child1 />
      </Provider>
    );
  }
}

export default App;
