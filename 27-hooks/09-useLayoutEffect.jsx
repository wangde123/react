import React, { useState, useLayoutEffect } from "react";

// useLayoutEffect和useEffect做同样的事情
// 优先执行
// 推荐使用useEffect，异步的，不会阻塞
// 当我们需要操作元素样式的时候，才使用useLayoutEffect

const App = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    setNum(100);
  }, []);

  return (
    <>
      <h2>useLayoutEffect</h2>
      <div
        style={{
          width: 300,
          height: 300,
          background: "red",
          transform: "translateX(" + num + "px)",
        }}
      ></div>
    </>
  );
};

export default App;
