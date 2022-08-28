import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

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
// class NotFound extends Component {
//   render() {
//     return <div>404 not found...</div>;
//   }
// }

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>404路由</h2>
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
          {/* 404路由，一定要加Switch，必须写在最后面 */}
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
          <Route
            path="*"
            render={() => {
              return <Redirect to="/home"></Redirect>;
            }}
          ></Route>
        </Switch>
      </>
    );
  }
}

export default App;
