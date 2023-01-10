import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  text-align: center;
  height: 60vh;
  background: #f2f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 50px;

  margin-bottom: 20px;
  color: #e74c3c;
`;
const Desc = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 300;
  color: #e74c3c;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
`;
const Input = styled.input`
  padding: 10px;
  flex: 9;
  border: none;
  outline: none;
`;
const Btn = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background: #e74c3c;
  color: white;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>
        Join our newsletter today to get news about our great deals! We offer
        you the best possible deals almost every month.
      </Desc>
      <InputContainer>
        <Input placeholder="Your Email here..." />
        <Btn>
          <SendIcon />
        </Btn>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
