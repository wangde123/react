import React, { Component } from "react";

import { connect } from "react-redux";
import { pushAction } from "./store/actionCreator";

const mapDispatchToProps = (dispatch) => {
  return {
    push(v) {
      dispatch(pushAction(v));
    },
  };
};

@connect(null, mapDispatchToProps)
class Form extends Component {
  state = {
    textValue: "",
  };
  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };
  fn = () => {
    this.props.push(this.state.textValue);
    this.setState({
      textValue: "",
    });
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
        />
        <button onClick={this.fn}>添加</button>
      </>
    );
  }
}

export default Form;
