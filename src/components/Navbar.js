import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { fontSize } from "@mui/system";

const Container = styled.div`
  height: 60px;
  ${"" /* position: sticky; */}
  background:white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  font-wight: 600;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Middle = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.img`
  width: 50px;
  padding-right: 5px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Middle>
            <Logo src={logo}></Logo>
          </Middle>
          <Right>
            <Menu>REGISTER</Menu>
            <Menu>SIGN-IN</Menu>
            <Menu>
              <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon style={{ fontSize: 25 }} />
              </Badge>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
