import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import spinner from "../assets/other_imgs/spinner.svg";
import FGCards from "./FGCards";
import bg from "../assets/other_imgs/bg.png";
import { Row, Col, Button } from "react-bootstrap";
import MemberData from "../assets/FocusGroupData";
import Carousel from "react-elastic-carousel";
import TextField from "@material-ui/core/TextField";

function FocusGroup(props) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [memberText, setMemberText] = useState([
    "Hey🙂",
    "Hi🤗",
    "Huhu😀",
    "Hello!✌",
  ]);
  const [memberAnswer, setMemberAnswer] = useState([
    "lol",
    "lol",
    "lol",
    "lol",
  ]);
  const [showBack, setShowBack] = useState([false, false, false, false]);

  const [name, setName] = useState(
    props.location.compName ? props.location.compName : ""
  );
  const [description, setDescription] = useState(
    props.location.text ? props.location.text : ""
  );
  const [textLength, setTextLength] = useState(
    props.location.text
      ? (props.location.compName ? props.location.compName.length : 0) +
          props.location.text.length
      : 0
  );
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(["", "", "", ""]);
  const [initialGeneration, setInitialGeneration] = useState(false);
  const [rerender, setRerender] = useState(false);

  const handleNameFieldChange = (e) => {
    var input = e.target.value;
    setName(input);
    setTextLength(input.length + description.length);
  };

  const handleTextFieldChange = (e) => {
    var input = e.target.value;
    setDescription(input);
    setTextLength(name.length + input.length);
  };

  async function getInitQuestions() {
    setIsLoading(true);

    if (description.trim() === "") return;

    var response_mode = "initQuestions";
    let formData = new FormData();
    if (userInfo) {
      formData.append("id", userInfo._id);
      formData.append("name", name.trim());

      if (description.trim().length > 150 - name.trim().length) {
        let sub_descr = description
          .trim()
          .substring(0, 150 - name.trim().length);
        console.log(sub_descr);
        formData.append("text", sub_descr);
      } else {
        formData.append("text", description.trim());
      }

      formData.append("question", "");
      formData.append("response_mode", response_mode);

      var out = await callBackend(formData);
    } else {
      var out = ["Please Log In"];
    }

    console.log("OUTPUT");
    console.log(out);

    let questions = [];
    for (const s of out) {
      questions.push(s);
    }
    setMemberText(questions);
    setQuestions(questions);
    setIsLoading(false);
    setInitialGeneration(true);

    return;
  }

  async function getElaboration(member_id) {
    setIsLoading(true);

    var response_mode = "elaboration";
    let formData = new FormData();
    if (userInfo) {
      formData.append("id", userInfo._id);
      formData.append("name", name.trim());

      if (description.trim().length > 150 - name.trim().length) {
        let sub_descr = description
          .trim()
          .substring(0, 150 - name.trim().length);
        console.log(sub_descr);
        formData.append("text", sub_descr);
      } else {
        formData.append("text", description.trim());
      }

      formData.append("question", questions[member_id]);
      formData.append("response_mode", response_mode);

      var out = await callBackend(formData);
    } else {
      var out = ["Please Log In"];
    }

    let memberTextCopy = memberText;
    memberTextCopy[member_id] = out;

    setMemberText(memberTextCopy);
    setIsLoading(false);

    return;
  }

  async function getAnswer(member_id) {
    setIsLoading(true);

    var response_mode = "answer";
    let formData = new FormData();
    if (userInfo) {
      formData.append("id", userInfo._id);
      formData.append("name", name.trim());

      if (description.trim().length > 150 - name.trim().length) {
        let sub_descr = description
          .trim()
          .substring(0, 150 - name.trim().length);
        console.log(sub_descr);
        formData.append("text", sub_descr);
      } else {
        formData.append("text", description.trim());
      }

      formData.append("question", questions[member_id]);
      formData.append("response_mode", response_mode);

      var out = await callBackend(formData);
    } else {
      var out = ["Please Log In"];
    }

    let memberAnswerCopy = memberAnswer;
    memberAnswerCopy[member_id] = out[0];
    setMemberAnswer(memberAnswerCopy);

    let showBackCopy = showBack;
    showBackCopy[member_id] = true;
    setShowBack(showBackCopy);
    setIsLoading(false);

    return;
  }

  function setShowBackFromChild(member_id) {
    setRerender(!rerender);
    let showBackCopy = showBack;
    showBackCopy[member_id] = !showBackCopy[member_id];
    setIsLoading(true);
    setShowBack(showBackCopy);
    setIsLoading(false);
  }

  async function callBackend(data_passed) {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "https://sleepy-mesa-77250.herokuapp.com/api/generate_json_focusgroup/",
      {
        id: data_passed.get("id"),
        name: data_passed.get("name"),
        text: data_passed.get("text"),
        question: data_passed.get("question"),
        response_mode: data_passed.get("response_mode"),
      },
      config
    );
    return data.result;
  }

  return (
    <Container bg={bg}>
      <Content className="content">
        <StyledRow className="input">
          <Wrapper className="input">
            <h5>KREATION-CARD</h5>
            <StyledTextField
              id="standard-basic"
              className="productName"
              // does only seem to work when split in i/InputProps
              inputProps={{
                maxLength: 50,
              }}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={handleNameFieldChange}
              placeholder={
                props.location.compName == undefined ? "Product Name" : ""
              }
              defaultValue={
                props.location.compName == undefined
                  ? ""
                  : props.location.compName
              }
            />
            <StyledTextField
              id="standard-multiline-static"
              className="description"
              // does only seem to work when split in i/InputProps
              inputProps={{
                maxLength: 300,
              }}
              style={{ borderColor: "black" }}
              InputProps={{
                disableUnderline: true,
              }}
              multiline
              onChange={handleTextFieldChange}
              rows={3}
              placeholder={
                props.location.text == undefined ? "Product Description" : ""
              }
              defaultValue={
                props.location.text == undefined ? "" : props.location.text
              }
            />
            <Indicators>
              <span className="mode">
                Please limit input to 150 chars (summarize if necessary).
              </span>
              <span className="length">{textLength} / 150</span>
            </Indicators>
            {isLoading ? (
              <StyledButton className="spinning-send-btn" variant="primary">
                <img src={spinner} alt="" />
              </StyledButton>
            ) : (
              <StyledButton
                className="send-btn generate"
                onClick={getInitQuestions}
                variant="primary"
              >
                <span>Send to AI</span>
              </StyledButton>
            )}
          </Wrapper>
        </StyledRow>
        <StyledRow className="members">
          <StyledCarousel breakPoints={breakPoints}>
            {MemberData.map((member) => (
              <StyledCol key={member.name} className="member">
                <StyledFGCards
                  name={member.name}
                  id={member.id}
                  text={memberText[member.id]}
                  answers={memberAnswer}
                  elaborateFunction={getElaboration}
                  answerFunction={getAnswer}
                  showBack={showBack}
                  SBFunction={setShowBackFromChild}
                  showBtn={initialGeneration}
                />
              </StyledCol>
            ))}
          </StyledCarousel>
        </StyledRow>
      </Content>
    </Container>
  );
}

export default FocusGroup;

const StyledFGCards = styled(FGCards)`
  position: absolute;
  height: 60vh;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 88%;
  width: 100%;
  top: 10%;
  bottom: 2%;
`;

const Indicators = styled.div`
  color: rgba(0, 0, 0, 0.6);
  width: 78%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  z-index: 7;

  span {
    .left {
    text-align: right;
  }

  @media(max-height: 650px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  &.input {
    width: 65%;
    height: 100%;
    background-color: white;
    max-width: 900px;
    max-height: 400px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 17px 20px 5px rgba(0, 0, 0, 0.6);

    h5 {
      margin-top: 1rem;
    }

    @media(max-height: 830px) {
      margin-bottom: 2rem;
    }
  }
  &.outputWrapper {
    height: 60vh;
    width: 80%;
    max-width: 1100px;
    max-height: 400px;
    display: flex;
    align-items: center;
    margin-top: 1rem;

  }

  &.productNameWrapper {
    margin-left: 24%;
    width: 50%;
    margin-bottom: -0.3rem !important;
  }
`;

const StyledCarousel = styled(Carousel)`
`;

const StyledButton = styled(Button)`
  &.send-btn,
  &.spinning-send-btn {
    height: 2rem;
    width: 10rem;
    padding: 0px;
    text-decoration: none;
    text-align: top !important;
    border-radius: 0.5rem;
    color: white;
    position: relative;
    transition: all 0.35s;
    margin-bottom: 1rem;
    margin-top: 0.6rem;
    background-image: linear-gradient(
      to right,
      #ef2779 0%,
      #b42d9b 51%,
      #7834be 100%
    );
  }

  &.send-btn span {
    position: relative;
    z-index: 2;
  }

  &:hover {
    background-color: #ef2779;
    color: white;
    box-shadow: 0px 13px 16px -13px #ef2779;
  }
`;

const StyledTextField = styled(TextField)`
  width: 80%;
  max-height: 10vh;
  padding-left: 7px !important;
  padding-right: 7px !important;
  border: none !important;
  background-color: #e5e5e5;
  border-radius: 1rem;
  position: center;
  z-index: 10040;

  &.productName {
    margin-top: 0.2rem;
    border-radius: 0.6rem;
  }

  &.description {
    margin-top: 1rem;
  }
`;

const StyledRow = styled(Row)`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.input {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 40vh;
  }

  &.members {
    margin-left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    @media(max-height: 830px) {
      height: 300px;
    }
  }
  &.member {
    position: absolute;
    margin-right: 0%;
    height: 100%;
  }
`;

const StyledCol = styled(Col)`
  position: relative;
  margin: auto;
  height: 100%;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
