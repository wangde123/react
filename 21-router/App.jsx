import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <h2>react-router-路由表</h2>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/about">关于页</Link>
          </li>
        </ul>

        <Switch>{this.props.children}</Switch>
      </>
    );
  }
}

export default App;
