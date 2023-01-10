import React from "react";
import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
  ${"" /* margin-top: 100px; */}
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: auto;

  text-align: center;
  padding: 30px;
  ${"" /* border: 0.5px solid #e74c3c; */}
  border-radius: 10px;
  margin-bottom: 50px;
`;

const CardBody = styled.div`
  position: relative;
`;

const Title = styled.h4`
  font-size: 25px;
  font-weight: 500;
  color: #e74c3c;
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
`;

const CatImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;
const BuyBtn = styled.button`
  padding: 10px 25px;
  background: #e74c3c;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  color: white;
  letter-spacing: 2px;
  font-size: 12px;
  right: 50%;
  bottom: 45%;
  transform: translate(50%, 50%);
`;

const CategoryItem = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Card>
          <CardBody>
            <CatImg src={item.img} />
            <Title>{item.title}</Title>
            <BuyBtn>Show More</BuyBtn>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default CategoryItem;
