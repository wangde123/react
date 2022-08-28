import React, { Component } from "react";

class App extends Component {
  state = {
    textValue: "",
    areaValue: "",
    selectValue: "",
    checkValue: true,
  };
  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };
  handleChange2 = (e) => {
    this.setState({
      areaValue: e.target.value,
    });
  };
  handleChange3 = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  };
  handleChange4 = (e) => {
    this.setState({
      checkValue: e.target.checked,
    });
  };
  handleClick = () => {
    console.log("textValue:" + this.state.textValue);
    console.log("areaValue:" + this.state.areaValue);
    console.log("selectValue:" + this.state.selectValue);
    console.log("checkValue:" + this.state.checkValue);
  };

  render() {
    return (
      <>
        <h2>受控组件</h2>
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
        />
        <hr />
        <textarea
          value={this.state.areaValue}
          onChange={this.handleChange2}
        ></textarea>
        <hr />
        <select value={this.state.selectValue} onChange={this.handleChange3}>
          <option value="1">唱</option>
          <option value="2">跳</option>
          <option value="3">rap</option>
        </select>
        <hr />
        {/* 多选和单选用的不是value属性，是checked属性 */}
        <input
          type="checkbox"
          checked={this.state.checkValue}
          onChange={this.handleChange4}
        />
        已同意
        <hr />
        <button onClick={this.handleClick}>btn</button>
      </>
    );
  }
}

export default App;
