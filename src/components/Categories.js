import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
const Container = styled.div``;
const Wrapper = styled.div``;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <CategoryItem></CategoryItem>
      </Wrapper>
    </Container>
  );
};

export default Categories;
