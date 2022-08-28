// 用于创建仓库实例
// applyMiddleware表示中间件，用于处理异步
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
