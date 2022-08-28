import React, { Component } from "react";
// createPortal用于将组件放置到父元素以外的位置
import { createPortal } from "react-dom";
// createPortal由两个参数，第一个是组件，第二个是放置的位置

const withPortal = (Comp) => {
  return class extends Component {
    render() {
      return createPortal(<Comp />, document.querySelector("body"));
    }
  };
};

class Child extends Component {
  render() {
    return <div>child组件</div>;
  }
}
const Child3 = withPortal(Child);

// class Child2 extends Component {
//   render() {
//     return <div>child2组件</div>;
//   }
// }
// const Child4 = withPortal(Child2);

const Child2 = withPortal(() => {
  return <div>child2组件</div>;
});

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <h2>portal</h2>
        <Child3 />
        <Child2 />
      </div>
    );
  }
}

export default App;
