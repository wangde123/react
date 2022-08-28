import React, { Component } from "react";
// import { createPortal } from "react-dom";
import withPortal from "./withPortal";
import { Wrap, Center, ModalHeader } from "./styled";

import { bool, func, string } from "prop-types";

class Modal extends Component {
  // props的默认值
  static defaultProps = {
    okText: "确定",
    cancelText: "取消",
  };

  // props的数据类型
  static propTypes = {
    visible: bool.isRequired,
    onCancel: func,
    onOk: func,
    title: string.isRequired,
    cancelText: string,
    okText: string,
  };

  render() {
    const { visible, children, onCancel, onOk, title, cancelText, okText } =
      this.props;
    return (
      visible && (
        <Wrap>
          <Center>
            <ModalHeader>
              <header>{title}</header>
              <span>X</span>
            </ModalHeader>
            <div>{children}</div>
            <footer style={{ borderTop: "1px solid #333" }}>
              <button onClick={onCancel}>{cancelText}</button>
              <button onClick={onOk}>{okText}</button>
            </footer>
          </Center>
        </Wrap>
      )
    );
  }
}

export default withPortal(Modal);
