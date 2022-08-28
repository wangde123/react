import React, { Component, lazy, Suspense } from "react";
import { Link, Switch, Route } from "react-router-dom";

// import Home from "./Home";
// import About from "./About";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>路由懒加载</h2>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/about">关于页</Link>
          </li>
        </ul>

        <hr />

        <Suspense fallback={<div>loading........</div>}>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
