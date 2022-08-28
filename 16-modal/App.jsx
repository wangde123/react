import React, { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  state = {
    isModalVisible: false,
  };

  open = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  cancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  ok = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  fn = () => {
    console.log("fn");
  };

  render() {
    return (
      <div className="container" onClick={this.fn}>
        <h2>modal对话框</h2>
        <button onClick={this.open}>Open Modal</button>
        {/* {this.state.isModalVisible && <Modal />} */}
        <Modal
          visible={this.state.isModalVisible}
          onCancel={this.cancel}
          onOk={this.ok}
          title="对话框标题"
          cancelText="关闭"
          okText="提交"
        >
          <input type="text" />
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default App;
