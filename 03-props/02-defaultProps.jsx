import React, { Component } from "react";

class Child1 extends Component {
  // props的默认值 static defaultProps固定写法
  // static表示类的私有属性
  // static defaultProps = {
  //   age: 20,
  // };

  render() {
    const { name, age } = this.props;
    return (
      <div>
        child1子组件 - {name} - {age}
      </div>
    );
  }
}
// 完全等于static defaultProps
// 在类里面，类的私有属性，等同于直接挂载在类上面
Child1.defaultProps = {
  age: 20,
};

const Child2 = (props) => {
  return <div>child2子组件 - {props.name}</div>;
};
Child2.defaultProps = {
  name: "pengshao2",
};

class App extends Component {
  render() {
    return (
      <>
        <h2>props默认值</h2>
        <Child1 name="pengshao" age="18" />
        <Child2 />
      </>
    );
  }
}

export default App;
