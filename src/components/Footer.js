import React from "react";
import styled from "styled-components";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Container = styled.div``;
const RowOne = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const Content = styled.div``;

const ContentItemHeader = styled.h4`
  color: #e74c3c;
`;
const ContentItem = styled.p`
  color: #e74c3c;
  font-size: 14px;
  cursor: pointer;
`;
const Companies = styled.div``;
const CompaniesItemHeader = styled.h4`
  color: #e74c3c;
`;
const CompaniesItem = styled.p`
  color: #e74c3c;
  font-size: 14px;
  cursor: pointer;
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialHeading = styled.h4`
  color: #e74c3c;
`;
const SocialContainerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SocialContainer = styled.div`
  color: #e74c3c;
  padding-right: 10px;
`;

const RowTwo = styled.div`
  padding: 0 60px;
  background: #e74c3c;
  ${"" /* height: 40px; */}
  display: flex;
  align-items: center;
`;

const Contact = styled.div`
  color: #e74c3c;
`;
const ContactHeading = styled.h4``;
const ContactItem = styled.div`
  padding-bottom: 15px;
`;
const Map = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const MailIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const PhoneIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Col = styled.div`
  padding-right: 30px;
  color: white;
  font-size: 12px;
`;

const CopyRightContainer = styled.div``;
const CopyRightText = styled.p`
  cursor: pointer;
`;
const TermsContainer = styled.div``;
const TermsText = styled.p`
  cursor: pointer;
`;
const PrivecyContainer = styled.div``;
const PrivecyText = styled.p`
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <RowOne>
        <Content>
          <ContentItemHeader>PandaMart</ContentItemHeader>
          <ContentItem>Why PandaMart</ContentItem>
          <ContentItem>Services</ContentItem>
          <ContentItem>Whats Next</ContentItem>
          <ContentItem>Learn More About Us</ContentItem>
        </Content>
        <Companies>
          <CompaniesItemHeader>Get to know us</CompaniesItemHeader>
          <CompaniesItem>Careers</CompaniesItem>
          <CompaniesItem>Blog</CompaniesItem>
          <CompaniesItem>PandaMart Outlets</CompaniesItem>
          <CompaniesItem>Investor Relations</CompaniesItem>
        </Companies>
        <Social>
          <SocialHeading>Our Social Accounts</SocialHeading>
          <SocialContainerWrapper>
            <SocialContainer>
              <LinkedInIcon style={{ cursor: "pointer" }} />
            </SocialContainer>
            <SocialContainer>
              <YouTubeIcon style={{ cursor: "pointer" }} />
            </SocialContainer>
            <SocialContainer>
              <TwitterIcon style={{ cursor: "pointer" }} />
            </SocialContainer>
            <SocialContainer>
              <FacebookIcon style={{ cursor: "pointer" }} />
            </SocialContainer>
          </SocialContainerWrapper>
        </Social>
        <Contact>
          <ContactHeading>Contact</ContactHeading>
          <ContactItem>
            <Map>
              <FmdGoodIcon style={{ "padding-right": "10" }} />
              404 None Street, Nowhere
            </Map>
          </ContactItem>
          <ContactItem>
            <MailIcon>
              <EmailIcon style={{ "padding-right": "10" }} />
              Pandamart@gmail.com
            </MailIcon>
          </ContactItem>
          <ContactItem>
            <PhoneIcon>
              <LocalPhoneIcon style={{ "padding-right": "10" }} />
              +01988888880
            </PhoneIcon>
          </ContactItem>
        </Contact>
      </RowOne>
      <RowTwo>
        <Col>
          <CopyRightContainer>
            <CopyRightText>&copy; 2023 PandaMart</CopyRightText>
          </CopyRightContainer>
        </Col>

        <Col>
          <TermsContainer>
            <TermsText>Terms And Conditions</TermsText>
          </TermsContainer>
        </Col>

        <Col>
          <PrivecyContainer>
            <PrivecyText>Privecy Policy</PrivecyText>
          </PrivecyContainer>
        </Col>
      </RowTwo>
    </Container>
  );
};

export default Footer;
