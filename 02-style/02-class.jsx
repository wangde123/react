import React, { Component } from "react";
import "./03-style.css";

class App extends Component {
  render() {
    return (
      <>
        <h2>class添加样式</h2>
        {/* class属性统一换成className */}
        <p className="font">hello react!</p>

        <label htmlFor="username">姓名：</label>
        <input type="text" id="username" />
      </>
    );
  }
}

export default App;
