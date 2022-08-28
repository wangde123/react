import React, { useState, useMemo } from "react";
// useMemo的语法和useCallback一摸一样
// useMemo的作用和vue的计算属性是一样

// useCallback是用来缓存函数的，useMemo是用来缓存函数的返回值的

const App = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(1);

  const [list] = useState([1, 2, 3, 4, 5, 6, 7]);

  const fn = () => {
    setCount((v) => v + 1);
  };
  const fn2 = () => {
    setNum((v) => v + 1);
  };

  const sum = useMemo(() => {
    console.log("sum");
    let s = 0;
    for (let i = 0; i < count * 100; i++) {
      s += i;
    }
    return s;
  }, [count]);

  const doubleNum = useMemo(() => {
    return num * 2;
  }, [num]);

  const oddList = useMemo(() => {
    return list.filter((item) => item % 2);
  }, [list]);

  return (
    <>
      <h2>useMemo</h2>
      <p>count: {count}</p>
      <button onClick={fn}>count++</button>
      <p>sum: {sum}</p>
      <p>num: {num}</p>
      <button onClick={fn2}>num++</button>
      <p>{doubleNum}</p>
      <ul>
        {oddList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
