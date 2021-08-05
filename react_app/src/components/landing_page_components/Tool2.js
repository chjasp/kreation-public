import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import cpImage from "../../assets/other_imgs/copypress.jpg";
import fgImage from "../../assets/other_imgs/focusgroup.jpg";

function Tool2() {
  return (
    <Container>
      <StyledRow className="content">
        <StyledCol className="left">
          <StyledImg src={fgImage} />
        </StyledCol>
        <StyledCol className="right">
          <StyledRow className="rowHead">
            <h3>Know Your Customers.</h3>
            <h3>Inside out.</h3>
            <span className="text-top">
              Have you been missing out on an important pain-point you should
              have known? Have you overlooked a use case that would've made a
              great fit for a product? Or do you simply not have enough time for
              extensive market research? Fear not! In <i>Focus Group</i> you
              will be seated vis-à-vis 4 curious potential customers that asks
              questions. Lots of questions.
            </span>
            <span className="text-bottom">
              And as soon as a questions touches a pain point, topic, or a use
              case you could improve your copy with - do it!. Adjust your copy
              and have the <i>Focus Group</i> ask some questions again. This
              way, you'll end up with a well-rounded and <i>Focus Group</i>
              -tested copy.
            </span>
          </StyledRow>
        </StyledCol>
      </StyledRow>
    </Container>
  );
}

export default Tool2;

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

  h3 {
    color: white;
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
