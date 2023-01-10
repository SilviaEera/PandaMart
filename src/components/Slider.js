import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItem } from "../data";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
`;

const Wrappre = styled.div`
  display: -webkit-box;
  height: 100%;
  width: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all ease 1s;
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  ${"" /* margin-left: 100px; */}
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 65px;
  color: ${(props) => props.cl};
`;
const Desc = styled.p`
  margin: 40px 0;
  font-size: 20px;
  color: ${(props) => props.cl};
  font-weight: 300;
  letter-spacing: 4px;
`;
const Btn = styled.button`
  padding: 10px 25px;
  border-radius: 50px;
  border: none;
  background: ${(props) => props.cl};
  color: White;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 4px;
  cursor: pointer;
  ${
    "" /* &:hover{
    transition 0.2s all;
    background:#48C9B0;
  } */
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #e6dfdf;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  z-index:2;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition 0.2s;

  }
  opacity: 0.5;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>

      <Wrappre slideIndex={slideIndex}>
        {sliderItem.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title cl={item.cl}>{item.title}</Title>
              <Desc cl={item.cl}>{item.desc}</Desc>
              <Btn cl={item.cl}>Buy Now</Btn>
            </InfoContainer>
          </Slide>
        ))}
      </Wrappre>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
