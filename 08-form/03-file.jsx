import React, { Component, createRef } from "react";

class App extends Component {
  file = createRef();

  fn = () => {
    // files所有选择的文件的数组
    console.log(this.file.current.files);
  };

  render() {
    return (
      <>
        <h2>文件上传</h2>
        <input type="file" ref={this.file} multiple />

        <hr />

        <button onClick={this.fn}>提交</button>
      </>
    );
  }
}

export default App;
