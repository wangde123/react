import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";

class Router extends Component {
  render() {
    return (
      <App>
        <Route path="/home">
          <Home>
            <Route path="/home/home1">
              <Home1 />
            </Route>
            <Route path="/home/home2">
              <Home2 />
            </Route>
          </Home>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </App>
    );
  }
}

export default Router;
