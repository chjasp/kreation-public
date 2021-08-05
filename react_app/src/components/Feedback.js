import styled from "styled-components";
import bg from "../assets/other_imgs/bg.png";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Col } from "react-bootstrap";

const Feedback = () => {
  const [finishedForm, setFinishedForm] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lwin2j4",
        "template_ffxgrzg",
        e.target,
        "user_CfaDG3jL7fohxQ1WsKVBs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFinishedForm(true);
  }

  return (
    <Container bg={bg}>
      <Wrapper>
        {finishedForm ? (
          <StyledBye>
            <h5>Feedback received👍😊</h5>
          </StyledBye>
        ) : (
          <form className="contact-form" onSubmit={sendEmail}>
            <StyledCol>
              <StyledCenter>
                <h6>- General Questions -</h6>
              </StyledCenter>
              <QASet>
                <span>
                  Do you find that the proposed workflow of ...
                  <li>Generating text with Copypress</li>
                  <li>Checking text with Focus Group</li>
                  <li>Improving text</li>
                  <li>Checking text again</li>
                      ... makes sense? Why (not)?
                </span>
                <BigInput type="text" name="11" />
              </QASet>
              <QASet>
                <span>Did you get the "workflow-idea" right from the start, or could it be better communicated?</span>
                <BigInput type="text" name="12" />
              </QASet>
              <QASet>
                <span>What $10-price range would be appropriate for this service (0-10, 10-20, 20-30, ...)?</span>
                <BigInput type="text" name="13" />
              </QASet>
              <QASet>
                <span>Did you struggle to understand how any feature works? If so: Which one(s)?</span>
                <BigInput type="text" name="14" />
              </QASet>
              <QASet>
                <span>Did you experience any bugs (e.g. button not working, crashed, infinite loading, ...)?</span>
                <BigInput type="text" name="15" />
              </QASet>
              <QASet>
                <span>How do you like the UI in general? Is it "pleasant" to work with?</span>
                <BigInput type="text" name="16" />
              </QASet>
              <QASet>
                <span>Anything else you'd like to let us know about the app in general?</span>
                <BigInput type="text" name="17" />
              </QASet>
              <StyledCenter>
                <h6>- Copypress Questions -</h6>
              </StyledCenter>
              <QASet>
                <span>How useful was the output on a scale of 1 (not at all) to 10 (very)? Please elaborate a bit.</span>
                <BigInput type="text" name="21" />
              </QASet>
              <QASet>
                <span>How useful was the Copypress tool overall on a scale of 1 to 10? Please elaborate a bit.</span>
                <BigInput type="text" name="22" />
              </QASet>
              <QASet>
                <span>How likely would copypress make it into your workflow as a content creator? Please elaborate a bit.</span>
                <BigInput type="text" name="23" />
              </QASet>
              <QASet>
                <span>Do you miss any feature (e.g. generating Instagram captions, Landing page headers, ...)?</span>
                <BigInput type="text" name="24" />
              </QASet>
              <QASet>
                <span>Anything else you'd like to let us know about Copypress?</span>
                <BigInput type="text" name="25" />
              </QASet>
              <StyledCenter>
                <h6>- Focus Group Questions -</h6>
              </StyledCenter>
              <QASet>
                <span>How useful was the output on a scale of 1 to 10. Please elaborate a bit?</span>
                <BigInput type="text" name="31" />
              </QASet>
              <QASet>
                <span>How useful was the Focus group tool overall on a scale of 1 to 10? Please elaborate a bit.</span>
                <BigInput type="text" name="32" />
              </QASet>
              <QASet>
                <span>How likely would Focus group make it into your workflow as a content creator? Please elaborate a bit.</span>
                <BigInput type="text" name="33" />
              </QASet>
              <QASet>
                <span>Do you miss any feature?</span>
                <BigInput type="text" name="34" />
              </QASet>
              <QASet>
                <span>Anything else you'd like to let us know about Focus Group?</span>
                <BigInput type="text" name="35" />
              </QASet>
              <StyledCenter>
                <h6>- Compensation -</h6>
              </StyledCenter>
              <QASet>
                <span>Thank You for Participating! Please insert Your E-Mail for a PayPal-Transfer to You ($5)</span>
                <BigInput type="text" name="41" />
              </QASet>
              <QASet>
                <span>Got time for a 5-minute call via zoom and want to have 5$ on top? Geat! Please give us 2 possible dates.</span>
                <BigInput type="text" name="42" />
              </QASet>
              <StyledCenter>
                <StyledInp type="submit" value="Submit" />
              </StyledCenter>
            </StyledCol>
          </form>
        )}
      </Wrapper>
    </Container>
  );
};

export default Feedback;

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
  height: 80%;
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
