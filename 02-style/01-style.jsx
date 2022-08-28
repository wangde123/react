import React, { Component } from "react";

// const obj = { color: "red" };

class App extends Component {
  render() {
    return (
      <>
        <h2>添加style内联样式</h2>
        {/* style属性只能是对象 */}
        {/* 外层是jsx的括号，里层是对象的括号 */}
        {/* 属性值要加引号，属性有连字符要转成小驼峰 */}
        {/* 单位要写好，单位是px的可以直接写数字 */}
        <p style={{ color: "red", fontSize: 30, lineHeight: "30px" }}>
          hello react!
        </p>
      </>
    );
  }
}

export default App;
