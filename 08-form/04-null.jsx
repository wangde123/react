import React, { Component } from "react";

// 任何时候都不要将input的value设置成null或者undefined
// 请求的时候，后端给了一个null或者undefined，需要放入input的时候，做一个判断
class App extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <>
        <h2>受控输入空值</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </>
    );
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       value: undefined,
  //     });
  //   }, 3000);
  // }
}

export default App;
