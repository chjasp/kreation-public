import React, { useState } from "react";
import { SliderData } from "./SliderData";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Tilt from "react-tilt";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <StyledSection className="slider">
        <StyledH1>
          <h1>
            {current == 0
              ? "Writing Copies: 10 Seconds"
              : "Testing Copies: 5 Seconds"}
          </h1>
        </StyledH1>
        <Carousel className="carousel">
          <StyledFaArrowAltCircleLeft
            className="left-arrow"
            onClick={prevSlide}
          />
          <StyledFaArrowAltCircleRight
            className="right-arrow"
            onClick={nextSlide}
          />
          {SliderData.map((video, index) => {
            return (
              <StyledDiv
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                    <video autoPlay loop muted>
                      <source src={video} type="video/mp4" />
                    </video>
                )}
              </StyledDiv>
            );
          })}
        </Carousel>
        <Bottom>
          <h3>A GPT-3-Powered Workflow-Revamp</h3>
          <h3>Made For You.</h3>
          <Link to="/Login">
            <StyledButton className="register" variant="primary">
              <span>Beta Login</span>
            </StyledButton>
          </Link>
        </Bottom>
      </StyledSection>
    </>
  );
};

export default ImageSlider;

const StyledButton = styled(Button)`
  &.register {
    height: 2rem;
    width: 10rem;
    padding: 0px;
    text-decoration: none;
    text-align: top !important;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: #38a3f1;
    position: relative;
    transition: all 0.35s;
    margin-top: 0.6rem;
    background-color: white;

    &:hover {
      background-color: #38a3f1;
      color: white;
      box-shadow: 0px 13px 16px -13px #38a3f1;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30%;

  h3 {
    color: white;
    text-align: center;
  }
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%
`;

const StyledH1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;

  h1 {
    color: white;
    text-align: center;

    @media (max-width: 300px) {
      display: none;
    }
  }
`;

const StyledDiv = styled.div`
  &.slide {
    opacity: 0;
    transition-duration: 1s ease;
    display: flex;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;

    video {
      border-radius: 2rem;
      border: 0px solid white;
      max-width: 65vw;
      position: absolute;
      box-shadow: 0px 40px 50px 15px rgba(0, 0, 0, 0.7);
      max-height: 90%;
  }

  &.slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%
`;

const StyledFaArrowAltCircleLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  left: 3vw;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const StyledFaArrowAltCircleRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  right: 3vw;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
