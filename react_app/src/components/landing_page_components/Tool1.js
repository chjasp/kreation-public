import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import cpImage from "../../assets/other_imgs/copypress.jpg";
import fgImage from "../../assets/other_imgs/focusgroup.jpg";

function Tool1() {
  return (
    <Container>
      <StyledRow className="content">
        <StyledCol className="left">
          <StyledImg src={cpImage} />
        </StyledCol>
        <StyledCol className="right">
          <StyledRow className="rowHead">
            <h3>Get Insprired.</h3>
            <h3>Fast.</h3>
            <span className="text-top">
              Create Product Descriptions, Google Ads, and much more in Seconds.
              <i>Copypress</i> will generate a breadth of Ideas for All kinds of
              Copies. Having such a creativity-stimulating tool is nothing short
              of a Copywriting-Superpower.
            </span>
            <span className="text-bottom">
              Furthermore, you can focus on what's important: Great Content.
              Copypress doesn't just give you ideas. It formulates them for you,
              too - freeing you from tedious typing and spellchecking.
            </span>
          </StyledRow>
        </StyledCol>
      </StyledRow>
    </Container>
  );
}

export default Tool1;

const StyledRow = styled(Row)`
  margin: auto;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.rowHead {
    height: 20%;
    text-align: left;
    max-width: 600px;

    h3 {
      color: #ef2779;
    }

    span {
      &.text-top {
        margin-top: 2rem;
        color: white;
      }

      &.text-bottom {
        margin-top: 1rem;
        color: white;
      }
    }
  }

  &.content {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;

const StyledImg = styled.img`
  border-radius: 2rem;
  width: 90%;
  max-width: 600px;
  border: 0px solid white;
  box-shadow: 0px 40px 50px 15px rgba(0, 0, 0, 0.7);
`;

const Container = styled.div`
  background: #252b42;
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    height: 30vh;
  }
`;

const StyledCol = styled(Col)`
  margin: auto;
  width: 50%;
  text-align: center;

  &.left {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  &.right {
    text-align: left;
  }

  h3 {
    color: white;
  }
`;
