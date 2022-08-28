import React from "react";

import useTodolist from "./utils/useTodolist";
import useTime from "./utils/useTime";

// 文件上传功能, 展示时间, 倒计时秒杀

const App = () => {
  const [list, value, handleChange, add] = useTodolist();
  const time = useTime();

  return (
    <>
      <h2>自定义hooks</h2>
      <p>{time}</p>

      <hr />

      <input type="text" value={value} onChange={handleChange} />
      <button onClick={add}>添加</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
