import React, { Component } from "react";
// withRouter是一个高阶组件
// 作用就是让那些没有路由信息的组件拥有路由信息
import { Link, Route, Switch, withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return <div>首页页面</div>;
  }
}
// const Home = (props) => {
//   return <div>首页页面</div>;
// };
class About extends Component {
  render() {
    // console.log(this.props);
    return <div>关于页面</div>;
  }
}
// const About = (props) => {
//   return <div>关于页面</div>;
// };
class Mine extends Component {
  render() {
    return <div>我的页面</div>;
  }
}

@withRouter
class Welcome extends Component {
  render() {
    console.log(this.props);
    return <div>欢迎页面</div>;
  }
}
// const Welcome = withRouter((props) => {
//   console.log(props);
//   return <div>欢迎页面</div>;
// });

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>路由渲染</h2>
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
            <Link to="/welcome">欢迎页</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          {/* 常见的方式是使用component属性进行组件的渲染 */}
          {/* 可以渲染函数组件和类组件 */}
          <Route path="/home" component={Home}></Route>

          {/* render属性也可以做组件的渲染 */}
          {/* 但是render只能渲染函数组件 */}
          {/* render里面可以写函数，那么里面就可以写一些判断和逻辑 */}
          <Route
            path="/about"
            render={(props) => {
              return <About {...props} />;
            }}
          ></Route>

          {/* children也可以渲染组件 */}
          {/* 在有Switch的情况下，children和render的效果是一摸一样的 */}
          {/* 在没有Switch的情况下，children是不管url是否匹配，都会渲染 */}
          <Route path="/mine" children={() => <Mine></Mine>}></Route>

          {/* 使用插槽的方法，将组件插入 */}
          {/* 类组件和函数组件都能渲染 */}
          {/* 默认情况下，是没有路由信息的 */}
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
