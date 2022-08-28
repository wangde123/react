import { Map } from "immutable";

const defaultState = Map({
  count: 3,
  list: [
    {
      id: 1,
      name: "zhangsan",
    },
  ],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      return state.update("count", (v) => v + 1);
    case "minus":
      return state.update("count", (v) => v - 1);
    case "add2":
      return state.update("list", (v) => [...v, action.payload]);
    default:
      return state;
  }
};

export default reducer;
