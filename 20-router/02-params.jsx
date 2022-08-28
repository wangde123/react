import React, { Component } from "react";
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
class Detail extends Component {
  render() {
    // ?.表示可选链操作符
    console.log(this.props?.match?.params?.id);
    // const obj = {
    //   a: 3,
    // };
    // console.log(obj.b?.c);
    // fn?.()
    return <div>详情页面</div>;
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>动态路由参数</h2>
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
          <li>
            <Link to="/detail/234">详情页</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
          {/* 动态参数和vue相同，也是/:id */}
          <Route path="/detail/:id" component={Detail}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
