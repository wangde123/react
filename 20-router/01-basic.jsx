import React, { Component } from "react";
// 一切皆组件
// BrowserRouter，要加在所有组件的最外面，只有在BrowserRouter里面的内容才能使用路由
// Link组件相当于vue的router-link，用于切换url
// Route用来渲染对应的组件或者页面
// Switch叫做分支匹配，将包容性路由转成了排他性路由
import { Link, Route, Switch } from "react-router-dom";

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
        <h2>路由基础</h2>
        <ul>
          <li>
            <Link to="/">首页</Link>
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
          {/* vue的路由默认是排他性路由， react的路由默认是包容性路由, 模糊匹配 */}
          {/* exact表示精准匹配 */}
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
