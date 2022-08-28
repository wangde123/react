// import React, { Component, PureComponent } from "react";

// class Child extends PureComponent {
//   render() {
//     console.log("child render");
//     return <div>child子组件</div>;
//   }
// }

// const obj = { a: 3 };
// class App extends Component {
//   state = {
//     count: 1,
//   };
//   fn = () => {
//     this.setState({
//       count: 2,
//     });
//   };
//   fn2 = () => {
//     console.log("do something");
//   };
//   render() {
//     return (
//       <>
//         <h2>useCallback</h2>
//         <p>{this.state.count}</p>
//         <button onClick={this.fn}>btn</button>
//         <Child obj={obj} doSomething={this.fn2} />
//       </>
//     );
//   }
// }

// export default App;

import React, { useState, memo, useCallback, useMemo } from "react";
// memo是一个高阶组件，它的作用和PureComponent完全相同
// useCallback用于做函数缓存的
// 当一个函数要作为自定义事件传递给子组件的时候，往往需要加useCallback进行缓存
// 为了减少子组件的渲染次数

const Child = memo(() => {
  console.log("child render");
  return <div>child组件</div>;
});

const obj = { a: 3 };
const App = () => {
  const [count, setCount] = useState(1);

  const fn = () => {
    setCount((v) => v + 1);
  };

  // const fn2 = useCallback(() => {
  //   console.log("do something");
  //   console.log(count);
  // }, [count]);

  const fn2 = useMemo(() => {
    return () => {
      console.log("do something");
      console.log(count);
    };
  }, [count]);

  return (
    <>
      <h2>useCallback</h2>
      <p>{count}</p>
      <button onClick={fn}>btn</button>
      <Child obj={obj} doSomething={fn2} />
    </>
  );
};

export default App;
