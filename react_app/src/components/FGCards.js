import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import Alex from "../assets/focus_group_imgs/Alex.png";
import Marie from "../assets/focus_group_imgs/Marie.png";
import Henry from "../assets/focus_group_imgs/Henry.png";
import Jia from "../assets/focus_group_imgs/Jia.png";

const FGCards = ({
  name,
  id,
  text,
  answers,
  elaborateFunction,
  answerFunction,
  showBack,
  SBFunction,
  showBtn,
}) => {
  let picArr = [Alex, Marie, Henry, Jia];

  return (
    <StyledReactCardFlip isFlipped={showBack[id]} flipDirection="vertical">
      <StyledCard className="my-0 p-3">
        <StyledImg src={picArr[id]} />
        <StyledCardBody>
          <StyledCardTitle as="div">
            <strong>{name}</strong>
          </StyledCardTitle>
          <StyledCardText as="div">
            <p>{text}</p>
          </StyledCardText>
        </StyledCardBody>
        <StyledCardFooter as="div">
          <StyledButton
            onClick={() => elaborateFunction(id)}
            variant="primary"
            className="leftBtn"
          >
            Elaborate
          </StyledButton>
          <StyledButton
            onClick={() => answerFunction(id)}
            variant="primary"
            className="rightBtn"
          >
            Answer
          </StyledButton>{" "}
        </StyledCardFooter>
      </StyledCard>
      <StyledCard className="my-0 p-3">
        <StyledCardBody className="back">
          <StyledCardText as="div" className="answer">
          <p>{answers[id]}</p>
          </StyledCardText>
        </StyledCardBody>
        <StyledCardFooter as="div" className="backFoot">
          {showBtn ? (
            <>
              <StyledButton
                onClick={() => SBFunction(id)}
                variant="primary"
                className="turn"
              >
                Turn
              </StyledButton>{" "}
            </>
          ) : (
            <StyledPlaceholder></StyledPlaceholder>
          )}
        </StyledCardFooter>
      </StyledCard>
    </StyledReactCardFlip>
  );
};

export default FGCards;

const StyledReactCardFlip = styled(ReactCardFlip)`
  // position: absolute;
  // height: 100%;
`;

const StyledImg = styled(Card.Img)`
  border-radius: 1rem;

  @media(max-height: 830px) {
    display: none;
  }
`;

const StyledCardText = styled(Card.Text)`
  background-color: #e5e5e5;
  border-radius: 1rem;
  min-height: 130px;
  height: 80%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: auto;
  z-index: 200;

  &.answer {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  p {
    padding-top: 4px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
  }
`;

const StyledCardTitle = styled(Card.Title)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledPlaceholder = styled.div`
  height: 2rem;
`;

const StyledCardFooter = styled(Card.Footer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1rem;

  &.backFoot {
    display: flex !important;
    align-items: center !important;
    justify-content: center;
    
    p {
      padding-top: 4px;
      padding-left: 4px;
      padding-right: 4px;
      padding-bottom: 4px;
    }
  }
`;

const StyledCard = styled(Card)`
  max-width: 250px;
  // max-height: 400px;
  height: 45vh;
  max-height: 430px;
  border-radius: 2rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 17px 10px 7px rgba(0, 0, 0, 0.7);
`;

const StyledCardBody = styled(Card.Body)`
  overflow: auto;
  padding: 0rem;
  width: 100%;
  overflow: hidden;

  &.back {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledButton = styled(Button)`
  &.leftBtn,
  &.rightBtn,
  &.turn {
    height: 2rem;
    width: 6rem;
    padding: 0px;
    text-decoration: none;
    text-align: top !important;
    border-radius: 0.5rem;
    color: white;
    position: relative;
    transition: all 0.35s;
  }

  &.leftBtn,
  &.rightBtn {
    background-color: #ef2779;
    color: white;

    &:hover {
      background-color: #ef2779;
      color: white;
      box-shadow: 0px 13px 16px -13px #ef2779;
    }
  }

  &.turn {
    background-color: #38A3F1;

    &:hover {
      background-color: #38A3F1;
      color: white;
      box-shadow: 0px 17px 16px -11px #38A3F1;
  }
`;
