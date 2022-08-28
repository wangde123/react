import React, { Component } from "react";
// 受控组件还是非受控，都是指表单控件
// 目的都是为了获得input里面的内容

// 由我们自己来控制并且拿到input的值的组件，叫受控组件
// input如果有value属性和onChange事件，那么就是受控组件
class App extends Component {
  state = {
    textValue: "abc",
  };

  handleChange(e) {
    this.setState({
      textValue: e.target.value,
    });
  }

  handleClick() {
    console.log(this.state.textValue);
  }

  render() {
    return (
      <>
        <h2>受控组件</h2>
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>btn</button>
      </>
    );
  }
}

export default App;
