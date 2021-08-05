import styled from "styled-components";
import ToolCards from "./ToolCards";
import bg from "../assets/other_imgs/bg.png";
import { Row, Col } from "react-bootstrap";

function SelectTool() {
  return (
    <Wrapper bg={bg}>
      <StyledRow className="quote">
        <h4 className="top-quote">
          "Creativity is like a pipe of water. You must first pump some out before the clear water arrives."
        </h4>
      </StyledRow>
      <StyledRow className="cards">
        <StyledCol className="left">
          <ToolCards
            title="FOCUSGROUP"
            text="Curious how People would react to Your Texts? Find it out in Your Personal AI-Generated Focus Group Session."
          />
        </StyledCol>
        <StyledCol className="right">
          <ToolCards
            title="COPYPRESS"
            text="Get Great Ideas for Ad Copies, Blog Articles and more in a Heartbeat with Your Personal AI-Powered Copypress."
          />
        </StyledCol>
      </StyledRow>
    </Wrapper>
  );
}
export default SelectTool;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledRow = styled(Row)`

  &.quote {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
    margin-top: 35vh;
    height: 20%;
    width: 70%;
    padding: 1rem;
    max-width: 1300px;
    margin-top: 5rem;
  }

    h4 {
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
        font-style: italic;
    }
  }

  &.cards {
    height: 80%;
    display: flex !important;
    align-items: center !important;
    flex-direction: row !important;
    justify-content: center !important;
    overflow: auto;
    margin-top: 0rem;
  }
`;

const StyledCol = styled(Col)`
  margin-top: -3rem;
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  flex-direction: row !important;
  justify-content: center !important;
  height: 60vh;
  margin-bottom: 2rem;
`;
