import { useState, useEffect } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import bg from "../assets/other_imgs/bg.png";
import TextField from "@material-ui/core/TextField";

const Edit = (props) => {
  const [textLength, setTextLength] = useState(props.location.elements ? props.location.elements.length : 0);

  const handleTextFieldChange = (e) => {
    var input = e.target.value;
    setTextLength(input.length);
  };

  useEffect(() => {}, []);

  let copiesArray = props.location.elements ? props.location.elements : ""

  return (
    <Container bg={bg}>
      <StyledRow className="input">
        <TextWrapper key={props.location.elements}>
          <StyledTextField
            id="standard-multiline-static"
            InputProps={{
              disableUnderline: true,
            }}
            multiline
            onChange={handleTextFieldChange}
            defaultValue={copiesArray}
            rows={26}
          ></StyledTextField>
          <Counter>{textLength}</Counter>
        </TextWrapper>
      </StyledRow>
    </Container>
  );
};

export default Edit;

const TextWrapper = styled.div`
  width: 80%;
  height: 60%;
  margin-bottom: 4rem;
  max-height: 700px;
  max-width: 1100px;
`;

const Counter = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
  z-index: 3;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  padding-top: 12px !important;
  padding-left: 20px !important;
  border: none !important;
  background: rgba(255, 255, 255, 0.8);
  position: center;
  box-shadow: 0px 17px 10px 7px rgba(0, 0, 0, 0.7);
  z-index: 2;
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

const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.input {
    // margin-bottom: 1.5rem;
    height: 100%;
  }
`;
