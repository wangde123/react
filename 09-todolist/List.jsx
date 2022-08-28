import React from "react";

const List = ({ list, onRemove, onChangeChecked }) => {
  const remove = (id) => () => {
    onRemove(id);
  };

  const removeAll = () => {
    const ids = list.filter((item) => item.checked).map((item) => item.id);
    console.log(ids);
  };

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => onChangeChecked(item.id, e.target.checked)}
            />
            {item.title} - <button onClick={remove(item.id)}>删除</button>
          </li>
        ))}
      </ul>
      <button onClick={removeAll}>批量删除</button>
    </>
  );
};

export default List;
