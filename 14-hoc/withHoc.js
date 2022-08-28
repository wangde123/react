import React, { Component } from "react";

const withHoc = (Comp) => {
  return class extends Component {
    render() {
      // console.log(this.props);
      return (
        <>
          {/* {...this.props}将接收到的所有的属性，全部传下去 */}
          <Comp b="4" {...this.props}></Comp>
          {/* <footer>@baidu</footer> */}
        </>
      );
    }
  };
};

export default withHoc;
