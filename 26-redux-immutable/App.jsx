import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    // count: state.count,
    count: state.get("count"),
    list: state.get("list"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch({ type: "add" });
    },
    minus() {
      dispatch({ type: "minus" });
    },
    add2(v) {
      dispatch({ type: "add2", payload: { name: v, id: 3 } });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  state = {
    value: "",
  };

  fn = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { count, add, minus, list, add2 } = this.props;
    const { value } = this.state;
    return (
      <>
        <h2>redux配合immutable</h2>
        <button onClick={minus}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>

        <hr />

        <input type="text" value={value} onChange={this.fn} />
        <button onClick={() => add2(value)}>添加</button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
