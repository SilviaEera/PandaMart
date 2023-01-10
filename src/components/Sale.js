import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #e74c3c;
  color: White;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
`;

const Sale = () => {
  return <Container>Holiday Sale! Every Product 50% off!</Container>;
};

export default Sale;
