// 引入react的核心库
import React from "react";
// 引入react-dom,用于浏览器端
// 如果要开发app端，需要引入react-native
import ReactDOM from "react-dom/client";

// react-redux是react和redux的粘合剂
// 1. 需要引入Provider，套在App组件的最外面
// 2. 引入仓库实例，store={store}
// import { Provider } from "react-redux";
// import store from "./18-react-redux/store";
// import store from "./19-redux-async/store";
// import store from "./26-redux-immutable/store";

// import { BrowserRouter as Router } from "react-router-dom";

// 如果首字母大写的是组件
// 首字母小写的是标签

// 函数组件
// const App = (props) => {
//   return <div>hello react! - {props.msg}</div>;
// };

// 类组件
// class App extends React.Component {
//   render() {
//     // 当在类组件里面，不知道该怎么办的时候，打印一下this
//     // console.log(this);
//     return <div>hello react! - {this.props.msg}</div>;
//   }
// }

// import App from "./01-nest/App";
// import App from "./02-style/01-style";
// import App from "./02-style/02-class";
// import App from "./02-style/04-classnames";
// import App from "./02-style/06-styled-components";
// import App from "./03-props/01-props";
// import App from "./03-props/02-defaultProps";
// import App from "./03-props/03-prop-types";
// import App from "./03-props/04-children";
// import App from "./03-props/05-children2";
// import App from "./04-state/01-state";
// import App from "./04-state/02-setState";
// import App from "./04-state/03-render";
// import App from "./05-stateup/App";
// import App from "./06-control/01-control";
// import App from "./06-control/02-notcontrol";
// import App from "./07-event/01-event";
// import App from "./07-event/02-event2";
// import App from "./08-form/01-form";
// import App from "./08-form/02-form2";
// import App from "./08-form/03-file";
// import App from "./08-form/04-null";
// import App from "./09-todolist/App";
// import App from "./10-old-lifecycle/App";
// import App from "./11-new-lifecycle/App";
// import App from "./12-context/App";
// import App from "./13-context-counter/App";
// import App from "./14-hoc/App";
// import App from "./15-portal/App";
// import App from "./16-modal/App";
// import App from "./18-react-redux/App";
// import App from "./19-redux-async/App";
// import App from "./20-router/01-basic";
// import App from "./20-router/02-params";
// import App from "./20-router/03-nest";
// import App from "./20-router/04-render";
// import App from "./20-router/05-redirect";
// import App from "./20-router/06-auth";
// import App from "./20-router/07-query";
// import App from "./20-router/08-NavLink";
// import App from "./20-router/10-Prevent";
// import App from "./20-router/11-404";
// import App from "./20-router/12-hooks";
// import App from "./21-router/App";
// import App from "./21-router/Router";
// import App from "./23-componet-lazy/App";
// import App from "./24-router-lazy/App";
// import App from "./25-immutable/App";
// import App from "./26-redux-immutable/App";
// import App from "./27-hooks/01-useState";
// import App from "./27-hooks/02-useEffect";
// import App from "./27-hooks/03-useContext";
// import App from "./27-hooks/04-useReducer";
// import App from "./27-hooks/05-useCallback";
// import App from "./27-hooks/06-useMemo";
// import App from "./27-hooks/07-useRef";
// import App from "./27-hooks/08-useImperativeHandle";
// import App from "./27-hooks/09-useLayoutEffect";
import App from "./27-hooks/10-customHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
// render方法就是将虚拟dom，转成真实dom
// root.render(app({ msg: "abc" }));
// 写成标签的写法其实是一种组件实例化的过程
// root.render(<App msg="abcd" />);
// const render = () => {
root.render(<App />);
// };
// render();
// store.subscribe(() => {
//   render();
// });
