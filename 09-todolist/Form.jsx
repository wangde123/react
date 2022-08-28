import React, { Component } from "react";

class Form extends Component {
  state = {
    textValue: "",
  };
  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  add = () => {
    // console.log(this.state.textValue);
    this.props.onGetItem(this.state.textValue);
    this.setState({
      textValue: "",
    });
  };

  handleKeyUp = (e) => {
    // if (e.keyCode === 13) {
    if (e.key === "Enter") {
      this.props.onGetItem(this.state.textValue);
      this.setState({
        textValue: "",
      });
    }
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.add}>添加</button>
      </>
    );
  }
}

export default Form;
