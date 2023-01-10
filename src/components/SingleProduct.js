import { InsertEmoticon, Search } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Info = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease-in;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  background: #e8f6f3;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  right: 50%;
  bottom: 50%;
  opacity: 0.5;
  transform: translate(50%, 50%);
  -webkit-transform: translate(50%, 50%);
  -moz-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  -o-transform: translate(50%, 50%);
  border-radius: 50%;
  background: #f6ddcc;
  position: absolute;
`;
const Image = styled.img`
  object-fit: cover;
  height: 70%;
  z-index: 2;
  margin-left: 30px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f6ddcc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  transition: 0.5s all ease;
  color: #e67e22;
  cursor: pointer;

  &:hover {
    background: #f9e79f;
    color: #f1c40f;
    transform: scale(1.1);
  }
`;

const SingleProduct = (props) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={props.item.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default SingleProduct;
