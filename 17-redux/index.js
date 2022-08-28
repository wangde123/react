const { legacy_createStore } = require("redux");

// console.log(redux);
/*
  {
    __DO_NOT_USE__ActionTypes: {
      INIT: '@@redux/INITi.s.u.l.6',
      REPLACE: '@@redux/REPLACE1.g.w.6.8.e',
      PROBE_UNKNOWN_ACTION: [Function: PROBE_UNKNOWN_ACTION]
    },
    ! applyMiddleware是用来做中间件的，用来做异步操作的
    applyMiddleware: [Function: applyMiddleware],
    bindActionCreators: [Function: bindActionCreators],
    ! combineReducers函数是用来做redux的模块化的
    combineReducers: [Function: combineReducers],
    compose: [Function: compose],
    ! createStore函数是用来创建仓库实例的
    createStore: [Function: createStore],
    ! legacy_createStore是新增的，用来代替createStore
    legacy_createStore: [Function: createStore]
  }
*/

// 作为仓库的初始数据
const defaultState = {
  count: 1,
  name: "zhangsan",
};

// 改变仓库数据的方法
// reducer是纯函数
// action参数表示一个带有type属性和参数的对象
// {
//   type: 'increment',
//   amount: 10
// }
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      // return的对象最终会去替换原先的对象
      return {
        ...state,
        count: state.count + action.num,
      };
    case "minus":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// 创建了仓库实例
// 创建实例的时候需要传入至少一个参数，这个参数是用来改变全局数据的reducer函数
const store = legacy_createStore(reducer);
// console.log(store);

/*
  {
    ! dispatch函数是用来触发reducer的
    dispatch: [Function: dispatch],
    ! subscribe是用来监听state的改变的
    subscribe: [Function: subscribe],
    ! getState函数是用来获取仓库数据的
    getState: [Function: getState],
    replaceReducer: [Function: replaceReducer],
    '@@observable': [Function: observable]
  }
*/

// console.log(store.getState());
// store.dispatch({
//   type: "add",
//   num: 2,
// });
// console.log(store.getState());
// store.dispatch({
//   type: "add",
//   num: 3,
// });
// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "add",
  num: 2,
});
store.dispatch({
  type: "add",
  num: 2,
});
