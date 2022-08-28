import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import List from "./List";

import { addAction, minusAction, loadAction } from "./store/actionCreator";

const mapStateToProps = (state) => {
  return {
    count: state.count,
    ratedList: state.ratedList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch(addAction());
    },
    minus() {
      dispatch(minusAction());
    },
    load() {
      dispatch(loadAction());
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    return (
      <>
        <h2>redux异步</h2>

        <button onClick={this.props.minus}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.add}>+</button>

        <hr />

        <Form />
        <List />

        <ul>
          {this.props.ratedList.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }
  componentDidMount() {
    this.props.load();
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
