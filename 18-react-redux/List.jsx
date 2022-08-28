import React, { Component } from "react";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove(id) {
      dispatch({ type: "remove", id });
    },
  };
};

class List extends Component {
  state = {};
  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <li key={item.id}>
            {item.name} -{" "}
            <button onClick={() => this.props.remove(item.id)}>删除</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
