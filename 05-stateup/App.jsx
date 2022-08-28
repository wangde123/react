import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class App extends Component {
  state = {
    num: 0,
  };

  fn = (n) => {
    // console.log(n);
    this.setState({
      num: n,
    });
  };
  render() {
    return (
      <>
        <h2>状态提升</h2>
        <Child1 onGetCount={this.fn} />
        <Child2 num={this.state.num} />
      </>
    );
  }
}

export default App;
