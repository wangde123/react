import React, { Component } from "react";
import {
  Link,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// react的hooks是专门给函数组件用的
// 16.8版本的时候，react新增hooks，增强了函数组件的功能

// 高阶组件会使得组件树变得更深
// 可以减少组件树的层级

// hooks要放在函数组件的顶层

const Home = () => {
  // const history = useHistory();
  // console.log(history);
  // const location = useLocation();
  // console.log(location);
  // const match = useRouteMatch();
  // console.log(match);
  // const params = useParams();
  // console.log(params);
  const fn = () => {
    history.push("/about");
  };
  const history = useHistory();

  return (
    <>
      <div>首页页面</div>
      <button onClick={fn}>btn</button>
    </>
  );
};
const About = () => {
  return <div>关于页面</div>;
};
const Mine = () => {
  return <div>我的页面</div>;
};

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>路由hooks</h2>
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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mine">
            <Mine />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
