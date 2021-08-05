import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FreePricingCard = ({ title, text, price }) => {
  return (
    <StyledCard className="my-0 p-2">
      <StyledCardBody>
        <StyledTitle as="div">{title}</StyledTitle>
        <StyledText as="div" className="text">
          {text}
        </StyledText>
        <StyledText as="div" className="price">
          <p className="amount">{price}</p>
          <div className="details">
            <div className="dollar">$</div>
            <div className="month">Per Month</div>
          </div>
        </StyledText>
      </StyledCardBody>
      <Card.Footer as="div">
        <Link>
          <StyledButton variant="primary">Select</StyledButton>
        </Link>
      </Card.Footer>
    </StyledCard>
  );
};

export const PremiumPricingCard = ({ title, text, price }) => {
  return (
    <StyledCard className="my-0 p-2 p">
      <StyledCardBody>
        <StyledTitle as="div">{title}</StyledTitle>
        <StyledText as="div" className="text">
          {text}
        </StyledText>
        <StyledText as="div" className="price">
          <p className="amount">{price}</p>
          <div className="details">
            <div className="dollar">$</div>
            <div className="month">Per Month</div>
          </div>
        </StyledText>
      </StyledCardBody>
      <Card.Footer as="div">
        <Link>
          <StyledButton variant="primary" className="premium">Select</StyledButton>
        </Link>
      </Card.Footer>
    </StyledCard>
  );
};

export const ProfessionalPricingCard = ({ title, text, price }) => {
  return (
    <StyledCard className="my-0 p-2 s">
      <StyledCardBody>
        <StyledTitle as="div">{title}</StyledTitle>
        <StyledText as="div" className="text">
          {text}
        </StyledText>
        <StyledText as="div" className="price">
          <p className="amount">{price}</p>
          <div className="details">
            <div className="dollar">$</div>
            <div className="month">Per Month</div>
          </div>
        </StyledText>
      </StyledCardBody>
      <Card.Footer as="div">
        <Link>
          <StyledButton variant="primary" className="special">Select</StyledButton>
        </Link>
      </Card.Footer>
    </StyledCard>
  );
};

const StyledText = styled(Card.Text)`
  text-align: left;

  &.text {
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  &.price {
    display: flex;
    p {
        text-align: left;
        font-weight: 900;
        font-size: 2.7rem;
    }

    div { 
        div {
          margin-left: 0.2rem;
          &.dollar {
            margin-top: 0.7rem;
            font-weight: bold;
            font-size: 1rem;  
          }
          &.month {
            font-size: 0.7rem; 
          }
        }
      }
    }
  }
`;

const StyledTitle = styled(Card.Title)`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
`;

const StyledCard = styled(Card)`
  max-width: 450px;
  max-height: 900px;
  border-radius: 2rem;
  border: none !important;

  Card.Img {
    height: 5vh;
  }

  &.my-0.p-2.s {
    color: white;
    background-image: linear-gradient(
      to right,
      #ef2779 0%,
      #b42d9b 51%,
      #7834be 100%
    );
  }

  &.my-0.p-2.p {
    color: white;
    background-color: #ef2779;
  }

  text-align: center;
  vertical-align: middle !important;
  overflow: auto;
  background-color: white;
  box-shadow: 0px 17px 10px 7px rgba(0, 0, 0, 0.7);
`;

const StyledCardBody = styled(Card.Body)`
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

  &.premium {
    background-color: white;
    color: #ef2779;
    &:hover {
      background-color: white;
      color: #ef2779;
      box-shadow: 0px 10px 16px -11px white;
    }
  }

  &.special {
    background-color: white;
    color: #ef2779;
    &:hover {
      background-color: white;
      color: #ef2779;
      box-shadow: 0px 10px 16px -11px white;
    }
  }

  &:hover {
    background-color: #38A3F1;
    color: white;
    box-shadow: 0px 10px 16px -11px #38A3F1;
  }
`;
