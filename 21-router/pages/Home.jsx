import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div>首页页面</div>
        <ul>
          <li>
            <Link to="/home/home1">首页1</Link>
          </li>
          <li>
            <Link to="/home/home2">首页2</Link>
          </li>
        </ul>

        <Switch>{this.props.children}</Switch>
      </>
    );
  }
}

export default Home;
