import React, { Component } from "react";

class App extends Component {
  state = {
    count: 10,
    show: true,
    num: 1,
    list: [1, 2, 3, 4, 5],
    content: "<h1>标题</h1>",
  };

  handleClick() {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  }

  handleClick2() {
    // this.setState(
    //   (prevState) => {
    //     return {
    //       // list: prevState.list.push(6), ×
    //       // list: prevState.list.concat(6), √
    //       list: [...prevState.list, 6],
    //     };
    //   },
    //   () => {
    //     console.log(this.state.list);
    //   }
    // );

    this.state.list.push(6);
    // console.log(this.state.list);
    this.setState({});
  }

  render() {
    const { count, show, num, list, content } = this.state;

    return (
      <>
        <h2>state的渲染</h2>
        <p>{count}</p>
        {show && <p>hello</p>}
        {num === 1 ? <p>111</p> : <p>222</p>}
        <button onClick={this.handleClick.bind(this)}>btn</button>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleClick2.bind(this)}>btn2</button>
        <div>{content}</div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </>
    );
  }
}

export default App;
