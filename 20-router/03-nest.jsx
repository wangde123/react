import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

// 如果一个路由有下一级路由的，那么不能加exact精准匹配
class Home1 extends Component {
  render() {
    return <div>首页1页面</div>;
  }
}
class Home2 extends Component {
  render() {
    return <div>首页2页面</div>;
  }
}

class Home extends Component {
  render() {
    // console.log(this.props);
    // const {url} = this.props.match;
    const {
      match: { url },
    } = this.props;
    return (
      <>
        <div>首页页面</div>
        <ul>
          <li>
            <Link to={`${url}/home1`}>home1</Link>
          </li>
          <li>
            <Link to={`${url}/home2`}>home2</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path={`${url}/home1`} component={Home1}></Route>
          <Route path={`${url}/home2`} component={Home2}></Route>
        </Switch>
      </>
    );
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
        <h2>嵌套路由</h2>
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
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
