import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import spinner from "../assets/other_imgs/spinner.svg";
import OutputCards from "./OutputCards";
import { Row, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import bg from "../assets/other_imgs/bg.png";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosUserAPI";

function Copypress({ setCompName, setText }) {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [charLim, setCharLim] = useState(200);
  const [selection, setSelection] = useState("");

  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("Product Description");
  const [isClicked, setIsClicked] = useState([]);
  const [rerender, setRerender] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    setOutput([]);
    setName("");
    setDescription("");
    console.log("IN");
    switch (mode) {
      case "Product Description":
        setCharLim(200);
        break;
      case "Facebook Ad":
        setCharLim(100);
        break;
      case "Google Ad":
        setCharLim(100);
        break;
      case "Blog Idea":
        setCharLim(100);
        break;
      case "Blog Intro":
        setCharLim(100);
        break;
    }
    return;
  }, [mode]);

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

  async function getOutput() {
    setIsLoading(true);
    if (description.trim() === "") return;

    var response_mode = mode;

    console.log(name);
    console.log(description);
    console.log(response_mode);

    let formData = new FormData();
    if (userInfo) {
      formData.append("id", userInfo._id);
      formData.append("name", name.trim());
      formData.append("text", description.trim());
      formData.append("response_mode", response_mode);

      var out = await callBackend(formData);
    } else {
      var out = ["Please Log In"];
    }

    let answers = [];
    let isClicked = [];

    for (const s of out) {
      answers.push(s);
      isClicked.push(false);
    }

    setOutput(answers);
    setIsClicked(isClicked);
    setIsLoading(false);

    return;
  }

  async function callBackend(data_passed) {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "https://sleepy-mesa-77250.herokuapp.com/api/generate_json_copypress/",
      {
        id: data_passed.get("id"),
        name: data_passed.get("name"),
        text: data_passed.get("text"),
        response_mode: data_passed.get("response_mode"),
      },
      config
    );
    return data.result;
  }

  function handleModeChange(new_child) {
    setMode(new_child);
    setTextLength(0);
    setRerender(!rerender);
  }

  function handleClick(index) {
    let isClickedCopy = isClicked;
    isClickedCopy[index] = !isClicked[index];
    setIsClicked(isClickedCopy);
    let selected = isClicked.map((bool, index) =>
      bool ? output[index] : "---"
    );
    let copiesArray = selected.filter((str) => str !== "---");
    let copiesStr = copiesArray.join("\n\n");
    setSelection(copiesStr);
  }

  function handleTesting() {
    let selectedText = isClicked
      .map((bool, index) => (bool ? output[index] : "-"))
      .filter((text) => text.length > 1);

    let result =
      selectedText.length > 0
        ? selectedText[0]
        : "No text chosen in previous step";
    setText(result);
    setCompName(name);
  }

  return (
    <Container bg={bg}>
      <Content>
      <BarWrapper className="barwrapper">
        <Sidebar handleModeChange={handleModeChange} />
      </BarWrapper>
      <StyledRow className={`input ${mode}`}>
        <Wrapper className="input">
          <h5>KREATION-CARD</h5>
          {mode == "Blog Idea" || mode == "Blog Intro" ? (
            <TextFieldPlaceholder />
          ) : (
            <StyledTextField
              id="standard-basic"
              className="productName"
              // does only seem to work when split in i/InputProps
              inputProps={{
                maxLength: { charLim },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={handleNameFieldChange}
              value={name}
              placeholder="Product Name"
            />
          )}
          <StyledTextField
            id="standard-multiline-static"
            className="description"
            // does only seem to work when split in i/InputProps
            inputProps={{
              maxLength: { charLim },
            }}
            style={{ borderColor: "black" }}
            InputProps={{
              disableUnderline: true,
            }}
            multiline
            onChange={handleTextFieldChange}
            rows={3}
            value={description}
            placeholder={
              mode == "Blog Idea" || mode == "Blog Intro"
                ? "Describe the Topic"
                : "Describe the Product"
            }
          />
          <Indicators>
            <span className="mode">Mode: {mode}</span>
            <span className="length">
              {textLength} / {charLim}{" "}
            </span>
          </Indicators>
          {isLoading ? (
            <StyledButton className="spinning-send-btn" variant="primary">
              <img src={spinner} alt="" />
            </StyledButton>
          ) : (
            <StyledButton
              className="send-btn generate"
              onClick={getOutput}
              variant="primary"
            >
              <span>Send to AI</span>
            </StyledButton>
          )}
        </Wrapper>
      </StyledRow>
      <Wrapper className="outputWrapper">
        <StyledRow className="output">
          {output.map((resultText, index) =>
            isClicked[index] == "green" ? (
              <StyledRowOutput key={index}>
                <OutputCards
                  key={index}
                  text={resultText}
                  bgColor="red"
                  markerFunction={handleClick}
                  index={index}
                ></OutputCards>
              </StyledRowOutput>
            ) : (
              <StyledRowOutput key={index}>
                <OutputCards
                  key={index}
                  text={resultText}
                  bgColor="green"
                  markerFunction={handleClick}
                  index={index}
                  mode={mode}
                ></OutputCards>
              </StyledRowOutput>
            )
          )}
        </StyledRow>
      </Wrapper>
      <Menu>
        <Link to={{ pathname: "/Edit", elements: selection }}>
          <StyledButton className="leftBtn" variant="primary">
            <span>Edit</span>
          </StyledButton>
        </Link>
        <Link to={{ pathname: "/Focusgroup", compName: name, text: selection }}>
          <StyledButton
            className="rightBtn"
            variant="primary"
            onClick={() => handleTesting()}
          >
            <span>Show Group</span>
          </StyledButton>
        </Link>
      </Menu>
      </Content>
    </Container>
  );
}

export default Copypress;

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

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextFieldPlaceholder = styled.div`
  width: 50%;
  height: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-left: 7px !important;
  background-color: white;
  position: center;
  z-index: 10040;
  margin-top: 0.2rem;
`;

const StyledTextField = styled(TextField)`
  width: 80%;
  max-height: 10vh;
  padding-left: 7px !important;
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

const Wrapper = styled.div`
  &.input {
    width: 65%;
    height: 100%;
    max-height: 40vh;
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
  }
  &.outputWrapper {
    height: 60vh;
    width: 80%;
    max-width: 1100px;
    max-height: 400px;
    display: flex;
    align-items: center;
    margin-top: 2rem;

    @media(max-height: 550px) {
      margin-top: 0rem;
      height: 10vh;
    }
  }

  &.productNameWrapper {
    margin-left: 24%;
    width: 50%;
    margin-bottom: -0.3rem !important;
  }
`;

const StyledRowOutput = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BarWrapper = styled.div`
  margin-left: -100%;
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

  @media(max-width: 650px) {
    display: none;
  }
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
    @media(max-width: 300px) {
      width: 5rem;
    }
  }

  &.send-btn {
    margin-bottom: 1rem;
    background-image: linear-gradient(
      to right,
      #ef2779 0%,
      #b42d9b 51%,
      #7834be 100%
    );

    &:hover {
      background-color: #ef2779;
      color: white;
      box-shadow: 0px 13px 16px -13px #ef2779;
    }
  }

  &.leftBtn,
  &.rightBtn {
    height: 2rem;
    width: 8rem;
    margin-top: 2rem;
    padding: 0px;
    text-decoration: none;
    text-align: top !important;
    border-radius: 0.5rem;
    color: white;
    position: relative;
    transition: all 0.35s;

    @media(max-width: 300px) {
      width: 5rem;
    }
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

  &.leftBtn {
    margin-right: 10px;
  }
  &.rightBtn {
    margin-left: 10px;
  }
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

const StyledRow = styled(Row)`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 40vh;

  &.input {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &.input.Blog {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &.output {
    max-width: 1100px;
    max-height: 400px;
    background: rgba(255, 255, 255, 0.25);
    margin-left: 0px;
    width: 100% !important;
    height: 101% !important;
    text-align: center;
    border-radius: 2rem;
    overflow: auto;
    box-shadow: 0px 17px 20px 7px rgba(0, 0, 0, 0.7);
  }
`;
