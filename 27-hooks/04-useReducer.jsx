import React, { useReducer } from "react";

const defaultState = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const App = () => {
  // useReducer调用的时候里面要传入两个参数
  // 1. reducer函数 2. state的默认值
  // 返回值是一个数组 [state, dispatch]
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <h2>useReducer</h2>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>btn</button>
    </>
  );
};

export default App;
