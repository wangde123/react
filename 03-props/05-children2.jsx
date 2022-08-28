import React, { Component } from "react";

class Child1 extends Component {
  render() {
    console.log(this);
    return (
      <div>
        {this.props.children.a} - child1组件 - {this.props.children.b}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <h2>children - 具名插槽</h2>
        <Child1>
          {/* <span>111</span>
          <span>222</span> */}

          {{
            a: <span>111</span>,
            b: <span>222</span>,
          }}
        </Child1>
      </>
    );
  }
}

export default App;
