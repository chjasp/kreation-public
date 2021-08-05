import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "./FormContainer";
import Loader from "../Loader";
import Message from "../Message";
import bg from "../../assets/other_imgs/bg.png";
import { login } from "../../actions/UserActions";

function Login({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container bg={bg}>
      <StyledFormContainer>
        <h1 style={{ color: "white" }}>Sign In</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <StyledFormLabel>Email Address</StyledFormLabel>
            <StyledFormControl
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></StyledFormControl>
          </Form.Group>

          <Form.Group controlId="password">
            <StyledFormLabel>Password</StyledFormLabel>
            <StyledFormControl
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></StyledFormControl>
          </Form.Group>

          <StyledButton type="submit" variant="primary">
            Sign In
          </StyledButton>
        </Form>

        <Row className="py-3">
          {/* <Col style={{ color: "white" }}>
            New Customer?{" "}
            <Link to="/Register" style={{ color: "white" }}>
              <u>Register</u>
            </Link>
          </Col> */}
        </Row>
      </StyledFormContainer>
    </Container>
  );
}

export default Login;

const StyledFormLabel = styled(Form.Label)`
  color: white;
`;

const StyledFormContainer = styled(FormContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StyledFormControl = styled(Form.Control)`
  border-radius: 1rem;
`;

const StyledButton = styled.button`
  height: 2rem;
  width: 10rem;
  padding: 0px;
  text-decoration: none;
  text-align: top !important;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #38a3f1;
  border: none;
  position: relative;
  transition: all 0.35s;
  margin-bottom: 1rem;
  margin-top: 0.6rem;
  background-color: white;

  &:hover {
    background-color: #38a3f1;
    color: white;
    box-shadow: 0px 13px 16px -13px #38a3f1;
  }
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
