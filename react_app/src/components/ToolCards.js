import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import cpImage from "../assets/other_imgs/copypress.jpg";
import fgImage from "../assets/other_imgs/focusgroup.jpg";
import { Link } from "react-router-dom";

const ToolCards = ({ title, text }) => {
  return (
    <StyledCard className="my-0 p-4">
      {title === "COPYPRESS" ? (
        <StyledImg src={cpImage} />
      ) : (
        <StyledImg src={fgImage} />
      )}
      <StyledCardBody>
        <Card.Title as="div">
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text as="div">
          <div className="my-3">{text}</div>
        </Card.Text>
      </StyledCardBody>
      <Card.Footer as="div">
        {title === "COPYPRESS" ? (
          <Link to="/CopyFlow">
            <StyledButton variant="primary">Select</StyledButton>
          </Link>
        ) : (
          <Link to="/Focusgroup">
            <StyledButton variant="primary">Select</StyledButton>
          </Link>
        )}
      </Card.Footer>
    </StyledCard>
  );
};

export default ToolCards;

const StyledImg = styled(Card.Img)`
  border-radius: 1rem;
  position: relative;
  @media (max-height: 910px) {
    display: none;
  }
`;

const StyledCard = styled(Card)`
  width: 73%;
  // width: 310px;
  height: 80%;
  max-width: 400px;
  max-height: 470px;
  position: relative;
  border-radius: 2rem;

  Card.Img {
    height: 5vh;
  }

  text-align: center;
  text-align: center !important;
  vertical-align: middle !important;
  justify-content: center;
  overflow: auto;
  background-color: white;
  box-shadow: 0px 17px 10px 7px rgba(0, 0, 0, 0.7);
`;

const StyledCardBody = styled(Card.Body)`
  height: 70%;
  overflow: auto;
  margin-bottom: 0px;
  overflow: hidden;
  div {
    margin-bottom: 0px;
    overflow: hidden;
  }
`;

const StyledButton = styled(Button)`
  text-align: center;
  background-color: #38A3F1;
  border-radius: 1rem;
  color: white;

  &:hover {
    background-color: #38A3F1;
    color: white;
    box-shadow: 0px 10px 16px -11px #38A3F1;
`;
