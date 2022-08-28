import React, { Component } from "react";
// NavLink和Link有完全相同的功能,多了一个高亮的功能
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

import "./09-style.css";

class Home extends Component {
  render() {
    return <div>首页页面</div>;
  }
}
class About extends Component {
  render() {
    return <div>关于页面</div>;
  }
}
class Mine extends Component {
  render() {
    return <div>我的页面</div>;
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>导航高亮</h2>
        <ul>
          <li>
            <NavLink to="/home" activeClassName="select">
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="select">
              关于页
            </NavLink>
          </li>
          <li>
            <NavLink to="/mine" activeClassName="select">
              我的
            </NavLink>
          </li>
        </ul>

        <hr />

        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
