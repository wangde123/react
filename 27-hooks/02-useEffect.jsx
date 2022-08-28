import React, { useEffect, useState } from "react";
// useEffect就是用来代替生命周期的
import { Link, Switch, Route } from "react-router-dom";

const getData = () => {
  return fetch("http://www.pudge.wang:3080/api/rated/list")
    .then((response) => response.json())
    .then((res) => {
      return res;
    });
};

const App1 = () => {
  // console.log(123);
  const [count, setCount] = useState(5);
  const add = () => {
    setCount((v) => v + 1);
  };
  const [num, setNum] = useState(5);
  const add2 = () => {
    setNum((v) => v + 1);
  };

  // useEffect里面如果只有一个参数，那么就相当于componentDidMount和componentDidUpdate

  // useEffect还可以接收第二个参数,第二个参数是一个数组
  // 如果是空数组，相当于componentDidMount
  // 如果数组有内容，相当于vue的watch监听

  // useEffect的第一个参数里面，return一个函数，相当于componentWillUnMount
  useEffect(() => {
    console.log(count);
  }, [count]);

  // useEffect(() => {
  //   return () => {
  //     console.log("销毁了");
  //   };
  // }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(123);
  //     setNum((v) => v + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNum((v) => v + 1);
  //   }, 1000);
  // }, [num]);

  useEffect(() => {
    // getData().then((res) => {
    //   console.log(res);
    // });

    (async () => {
      const res = await getData();
      console.log(res);
    })();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>count:{count}</p>
      <button onClick={add}>btn</button>
      <p>num:{num}</p>
      <button onClick={add2}>btn</button>
    </>
  );
};

const App2 = () => {
  return <div>App2组件</div>;
};

const App = () => {
  return (
    <>
      <p>
        <Link to="/app1">app1</Link> |<Link to="/app2">app2</Link>
      </p>

      <hr />

      <Switch>
        <Route path="/app1">
          <App1 />
        </Route>
        <Route path="/app2">
          <App2 />
        </Route>
      </Switch>
    </>
  );
};

export default App;
