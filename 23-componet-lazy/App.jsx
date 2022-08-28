// lazy用来做组件懒加载
import React, { Component, lazy, Suspense } from "react";

// import Child from "./Child";
const Child = lazy(() => import("./Child"));

const Loading = () => {
  return <div>loading</div>;
};

class App extends Component {
  state = {
    show: false,
  };
  fn = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    return (
      <>
        <h2>组件懒加载</h2>
        <button onClick={this.fn}>btn</button>
        <Suspense fallback={<Loading />}>
          {this.state.show && <Child />}
        </Suspense>
      </>
    );
  }
}

export default App;
