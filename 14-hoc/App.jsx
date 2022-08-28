import React, { Component } from "react";

import withHoc from "./withHoc";

// 定义高阶组件
// 本质是函数，传入一个组件，并且返回一个组件

// 函数, 复用
// 1. 可以添加公共的结构
// 2. 可以添加公共的自定义属性
// 3. 等等

// 目的： 增强组件的功能
// const hoc = (Comp) => {
//   return class extends Component {
//     render() {
//       // console.log(this.props);
//       return (
//         <>
//           {/* {...this.props}将接收到的所有的属性，全部传下去 */}
//           <Comp b="4" {...this.props}></Comp>
//           {/* <footer>@baidu</footer> */}
//         </>
//       );
//     }
//   };
// };

// 装饰器的语法只能给类组件用
@withHoc
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h2>hoc高阶组件</h2>
      </>
    );
  }
}

// const App2 = withHoc(App);

// export default withHoc(App);

export default App;
