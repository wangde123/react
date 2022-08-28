import React, { Component } from "react";

import { connect } from "react-redux";
import { removeAction } from "./store/actionCreator";

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove(id) {
      dispatch(removeAction(id));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
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

export default List;
