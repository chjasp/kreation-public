import styled from "styled-components";
import { Col } from "react-bootstrap";
import bg from "../assets/other_imgs/bg.png";

const FAQ = () => {

  return (
    <Container bg={bg}>
      <Wrapper>
      <StyledCol>
              <QASet>
                <span><i>Q: When does the Beta end?</i></span><br />
                <span>A: 25th of May 6PM GMT</span>
              </QASet>
              <QASet>
                <span><i>Q: What does output saying "Warning: Inappropriate output generated" mean?</i></span><br />
                <span>A: You can most likely ignore those warnings. The generated output is scanned for sensitive content to prevent misuse. As off now the system is very sensitive and often "errs on the safe side".</span>
              </QASet>
              <QASet>
                <span><i>Q: How much usage am I granted in this Beta?</i></span><br />
                <span>A: You start with 400 Kredits ("Send to AI" = 3 Kredits; "Elaborate", "Answer" = 1 Kredit)</span>
              </QASet>
              <QASet>
                <span><i>Q: Can I press the "Send to AI"-button more than once?</i></span><br />
                <span>A: You can press it as often as you want (given you have Kredits left). </span>
              </QASet>
              <QASet>
                <span><i>Q: After pressing a button it shows a loading circle for more than 20 seconds - is this normal?</i></span><br />
                <span>A: No, please copy your inputs and reload the page. Additionally, we'd appreciate if you'd tell us about this in the feedback questionnaire.</span>
              </QASet>
              <QASet>
                <span><i>Q: Why is the input length restricted?</i></span><br />
                <span>A: To prevent potential misuse. However, we plan on extending the length.</span>
              </QASet>
              <QASet>
                <span><i>Q: Why is my output occasionally cutoff mid-sentence?</i></span><br />
                <span>A: This is expected to happen since the output length is restricted too. Please let us know if this happends too frequently in your opinion.</span>
              </QASet>
              <QASet>
                <span><i>Q: What does the "Elaborate" function in Focus Group do?</i></span><br />
                <span>A: It should provide a use case related to the given question.</span>
              </QASet>
              <QASet>
                <span><i>Q: Can I have the AI elaborate on a question more than once?</i></span><br />
                <span>A: You can have it elaborating as often as you want (given you have Kredits left).</span>
              </QASet>
              <QASet>
                <span><i>Q: What does the "Answer" function in Focus Group do?</i></span><br />
                <span>A: It generates an answer to the initially stated question.</span>
              </QASet>
              <QASet>
                <span><i>Q: Can I have the AI answer a question more than once?</i></span><br />
                <span>A: You can have it answering as often as you want (given you have Kredits left).</span>
              </QASet>
            </StyledCol>
            </Wrapper>
    </Container>
  );
};

export default FAQ;


const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1rem;

  h6 {
    font-size: 1.4rem;
  }
`;

const QASet = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.7rem;

  span {
    text-align: left;
  }
`;

const BigInput = styled.input`
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  padding: 0.4rem;
  font-size: 0.8rem;

  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;

const StyledInp = styled.input`
  color: white;
  margin-top: -1.5rem;
  text-align: center;
  background-color: transparent;
  height: 5vh;
  font-size: 0.8rem;
  width: 10vh;
  border: none;
  border-radius: 1rem;
  background-image: linear-gradient(
    to right,
    #ef2779 0%,
    #b42d9b 51%,
    #7834be 100%
  );

  &:hover {
    background-image: linear-gradient(
      to right,
      #ef2779 0%,
      #b42d9b 51%,
      #7834be 100%
    );
      color: white;
      box-shadow: 0px 13px 16px -13px #ef2779;
    }
  }

  @media(max-width: 560px) {
    font-size: 1rem;
`;

const StyledBye = styled.div`
display: flex;
align-items: center;  
text-align: center;
justify-content: center;
margin-top: 37vh;

  h5 {
    color: black;
    font-size: 2rem;

    &.bottom {
      margin-top: 2rem;
    }
  }

  @media (max-width: 560px) {
    h5 {
      color: black;
      font-size: 1rem;

      &.bottom {
        margin-top: 2rem;
      }
    }
  }
`;

const StyledCol = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;

  input.mail {
    margin-top: 1.5rem;
  }

  h5 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  @media(max-width: 560px) {
    h5 {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-height: 80vh;
  padding: 2rem;
  max-width: 1000px;
  border: none !important;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1.5rem;
  box-shadow: 0px 17px 10px 7px rgba(0, 0, 0, 0.7);
  overflow: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
