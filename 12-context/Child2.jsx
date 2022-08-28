// import { createContext } from "react";
import { Consumer } from "./context";

// const { Consumer } = createContext();

const Child2 = () => {
  return (
    <div>
      child2组件 -
      {/* Consumer用在子组件的里面，里面可以写一个函数，函数可以接收value作为参数 */}
      <Consumer>
        {(value) => {
          return <span>{value.count}</span>;
        }}
      </Consumer>
    </div>
  );
};

export default Child2;
