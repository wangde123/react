import React, { useState } from "react";
// hooks是给函数组件用的
// hooks是16.8版本新增的
// hooks作用是增强函数组件的功能(具有和类组件一样定义state，定义生命周期等等)，提高代码复用度
// hooks可以将同一个功能的代码进行聚合，方便阅读和维护(类似于组合api)
// hooks减少组件树的层级(相比于高阶组件)

const App = () => {
  // useState函数调用会返回一个数组，[变量，改变变量的方法]
  // useState需要接收一个参数，是变量的初始值
  // 改变变量的方法也是异步的
  const [count, setCount] = useState(3);
  // const [str, setStr] = useState("hello");
  const add = () => {
    // setCount(5);
    setCount((v) => v + 1);
    // console.log(count);
  };
  const minus = () => {
    setCount((v) => v - 1);
  };

  // const [arr, setArr] = useState([]);

  return (
    <>
      <h2>useState</h2>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </>
  );
};

export default App;
