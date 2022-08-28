import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  state = {
    num: 20,
  };
  fn = () => {
    this.setState({
      num: 40,
    });
  };
  render() {
    return (
      <>
        <h2>
          新版生命周期 - <button onClick={this.fn}>btn</button>
        </h2>
        <Child num={this.state.num} />
      </>
    );
  }
}

export default App;
