import React, { Component } from "react";
import { Consumer } from "./context";

class Child2 extends Component {
  render() {
    return (
      <Consumer>
        {(value) => (
          <>
            <button onClick={value.minus}>-</button>
            <span>{value.count}</span>
            <button onClick={value.add}>+</button>
          </>
        )}
      </Consumer>
    );
  }
}

export default Child2;
