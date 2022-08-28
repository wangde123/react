import React, { Component } from "react";
// Prompt用于做路由保护
import { Link, Route, Switch, Redirect, Prompt } from "react-router-dom";

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
  state = {
    value: "",
  };
  fn = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div>我的页面</div>
        <input type="text" value={this.state.value} onChange={this.fn} />

        <Prompt when={this.state.value.length} message="你确定要离开吗？" />
      </>
    );
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>路由保护</h2>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/about">关于页</Link>
          </li>
          <li>
            <Link to="/mine">我的</Link>
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
