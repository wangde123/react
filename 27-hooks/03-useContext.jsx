import React, { createContext, useContext } from "react";

const context1 = createContext();
const context2 = createContext();

const Child2 = () => {
  // useContext执行的时候要传入一个context对象, 返回一个对象
  // useContext代替Consumer
  const { name } = useContext(context1);
  const { nickname } = useContext(context2);
  return (
    <div>
      child2组件 - {name} - {nickname}
    </div>
    // <context1.Consumer>
    //   {(value) => (
    //     <div>
    //       child2组件 -{" "}
    //       <context2.Consumer>
    //         {(val) => (
    //           <span>
    //             {value.name} - {val.nickname}
    //           </span>
    //         )}
    //       </context2.Consumer>
    //     </div>
    //   )}
    // </context1.Consumer>
  );
};

const Child1 = () => {
  return (
    <context2.Provider value={{ nickname: "xiaosan" }}>
      <div>child1组件</div>
      <Child2 />
    </context2.Provider>
  );
};

const App = () => {
  return (
    <context1.Provider value={{ name: "zhangsan" }}>
      <h2>useContext</h2>
      <Child1 />
    </context1.Provider>
  );
};

export default App;
