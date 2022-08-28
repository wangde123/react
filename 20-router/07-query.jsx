import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    // console.log(this.props.match.params.id);
    const {
      params: { id },
    } = this.props.match;
    return <div>首页页面 - {id}</div>;
  }
}
class About extends Component {
  render() {
    // console.log(this.props.location.search); // ?a=3&b=4
    const obj = new URLSearchParams(this.props.location.search);
    // console.log(obj.get("a"));
    // console.log(obj.get("b"));
    return <div>关于页面 - {obj.get("a")}</div>;
  }
}
class Mine extends Component {
  render() {
    console.log(this.props);
    return <div>我的页面</div>;
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>路由的query传参</h2>
        <ul>
          <li>
            <Link to="/home/234">首页</Link>
          </li>
          <li>
            <Link to="/about?a=3&b=4">关于页</Link>
          </li>
          <li>
            {/* state是一个在url上面不可见的传参 */}
            {/* 刷新依旧存在 */}
            <Link
              to={{
                pathname: "/mine",
                search: "?c=10&d=20",
                hash: "#xyz",
                state: { x: 100, y: 200 },
              }}
            >
              我的
            </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home/:id" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
