import styled from "styled-components";
import { Button } from "react-bootstrap";
import bg from "../../assets/other_imgs/bg.png";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";

function Top() {
  return (
    <Container bg={bg}>
      <Content className="content">
        <StyledImageSlider slides={SliderData} />
      </Content>
    </Container>
  );
}

export default Top;

const Content = styled.div`
  position: absolute;
  height: 90%;
  width: 100%;
  top: 10%;
  bottom: 0%;
`;

const StyledImageSlider = styled(ImageSlider)`
  // position: relative;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  bottom: 0;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
