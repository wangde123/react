import React, { Component } from "react";

class Header extends Component {
  render() {
    // 类组件里面使用this.props来接收props对象
    return <header>头部组件 - {this.props.title}</header>;
  }
}

// 函数组件可以接收一个props形参
const Footer = ({ count }) => {
  return <footer>底部组件 - {count}</footer>;
};

class App extends Component {
  render() {
    return (
      <>
        <h2>props</h2>
        {/* 父传子依旧使用自定义属性 */}
        <Header title="标题" />
        <Footer count="10" />
      </>
    );
  }
}

export default App;
