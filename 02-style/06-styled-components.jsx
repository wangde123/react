import React, { Component } from "react";
// 引入styled-components,用于在js里面写css
import styled from "styled-components";

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const BigP = styled.p`
  color: red;
  font-size: 50px;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: ${(props) => props.size + "px"};
`;

class App extends Component {
  render() {
    return (
      <>
        <h2>css-in-js</h2>
        <BigP>hello react!!</BigP>
        <Title size="50">标题</Title>
        <Title size="100">标题2</Title>
      </>
    );
  }
}

export default App;
