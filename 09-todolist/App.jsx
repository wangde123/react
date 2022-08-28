import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title: "张三",
        checked: false,
      },
      {
        id: 2,
        title: "李四",
        checked: false,
      },
    ],
  };

  add = (v) => {
    // console.log(v);
    this.setState((prevState) => {
      return {
        list: [
          ...prevState.list,
          {
            id: new Date().getTime(),
            title: v,
            checked: false,
          },
        ],
      };
    });
  };

  remove = (id) => {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((item) => item.id !== id),
      };
    });
  };

  changeCheck = (id, c) => {
    // console.log(id, c);
    const result = this.state.list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: c,
        };
      } else {
        return item;
      }
    });
    this.setState({
      list: result,
    });
  };

  render() {
    return (
      <>
        <h2>todolist</h2>
        <Form onGetItem={this.add} />
        <List
          list={this.state.list}
          onRemove={this.remove}
          onChangeChecked={this.changeCheck}
        />
      </>
    );
  }
}

export default App;
