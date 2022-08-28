// 写函数
export const addAction = () => {
  // return { type: "increment" };
  // 有了中间件以后,就可以接收一个参数是dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "increment" });
    }, 2000);
  };
};

export const minusAction = () => {
  return { type: "decrement" };
};

export const pushAction = (v) => {
  return {
    type: "push",
    payload: {
      name: v,
      id: new Date().getTime(),
    },
  };
};

export const removeAction = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "remove", id });
    }, 1000);
  };
};

export const loadAction = () => {
  return (dispatch) => {
    fetch("http://www.pudge.wang:3080/api/rated/list")
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: "load",
          payload: res.result,
        });
      });
  };
};
