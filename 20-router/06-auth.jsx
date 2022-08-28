import React, { Component } from "react";
import { Link, Route, Switch, Redirect, withRouter } from "react-router-dom";

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

@withRouter
class Login extends Component {
  login = () => {
    localStorage.setItem("token", "123");
    // 跳转，编程式导航
    // console.log(this.props);
    // push replace go goBack

    const { from } = this.props.location.state;
    this.props.history.push(from);
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div>登录页面</div>
        <button onClick={this.login}>登录</button>
      </>
    );
  }
}

class Auth extends Component {
  render() {
    return (
      <Route
        path={this.props.path}
        render={() => {
          if (localStorage.getItem("token")) {
            return this.props.children;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: this.props.path,
                  },
                }}
              ></Redirect>
            );
          }
        }}
      ></Route>
    );
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>路由鉴权</h2>
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
          {/* <Route path="/about" component={About}></Route> */}
          <Auth path="/about">
            <About />
          </Auth>
          {/* <Route
            path="/mine"
            render={() => {
              if (localStorage.getItem("token")) {
                return <Mine />;
              } else {
                return <Redirect to="/login"></Redirect>;
              }
            }}
          ></Route> */}
          <Auth path="/mine">
            <Mine />
          </Auth>
          {/* <Route path="/login" component={Login}></Route> */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
