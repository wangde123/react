const defaultState = {
  count: 5,
  list: [
    {
      id: 1,
      name: "zhangsan",
    },
    {
      id: 2,
      name: "lisi",
    },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "push":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "remove":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
