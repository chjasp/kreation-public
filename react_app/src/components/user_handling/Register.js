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
import { register } from "../../actions/UserActions";

function Register({ location, history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <Container bg={bg}>
      <StyledFormContainer>
        <h1 style={{ color: "white" }}>Registration Form</h1>
        {message && <Message variant="danger">{message}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <StyledFormLabel>Name</StyledFormLabel>
            <StyledFormControl
              required
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></StyledFormControl>
          </Form.Group>

          <Form.Group controlId="email">
            <StyledFormLabel>Email Address</StyledFormLabel>
            <StyledFormControl
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></StyledFormControl>
          </Form.Group>

          <Form.Group controlId="password">
            <StyledFormLabel>Password</StyledFormLabel>
            <StyledFormControl
              required
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></StyledFormControl>
          </Form.Group>

          <Form.Group controlId="passwordConfirm">
            <StyledFormLabel>Confirm Password</StyledFormLabel>
            <StyledFormControl
              required
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></StyledFormControl>
          </Form.Group>

          <StyledButton type="submit" variant="primary">
            Register
          </StyledButton>

          <Row className="py-3">
            <Col style={{ color: "white" }}>
              Have an Account?{" "}
              <Link to="/Login" style={{ color: "white" }}>
                <u>Sign In</u>
              </Link>
            </Col>
          </Row>
        </Form>
        
      </StyledFormContainer>
    </Container>
  );
}

export default Register;

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
