// import React, { Component, Fragment } from "react";
// 从React里面解构的东西，首字母大写的是组件，小写的是方法
// Fragment表示空的占位标签
import React, { Component } from "react";
import Header from "./Header";

// const Header = () => {
//   return <header>头部组件</header>;
// };

const Button = () => {
  return <button>按钮</button>;
};

class Content extends Component {
  render() {
    return (
      <main>
        内容组件 - <Button />
      </main>
    );
  }
}

class App extends Component {
  state = {
    count: 10,
  };

  render() {
    // 每个组件只能有一个根元素
    // console.log(this);
    return (
      <>
        {/* 123 */}
        <p title={this.state.count}>{this.state.count}</p>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
