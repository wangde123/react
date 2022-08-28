import React, { Component } from "react";
import Child1 from "./Child1";
import { Provider } from "./context";

class App extends Component {
  state = {
    count: 3,
  };
  add = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  minus = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  render() {
    return (
      <Provider
        value={{
          count: this.state.count,
          add: this.add,
          minus: this.minus,
        }}
      >
        <Child1 />
      </Provider>
    );
  }
}

export default App;
