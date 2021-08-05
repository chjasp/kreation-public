import React from "react";
import styled from "styled-components";
import bg from "../../assets/other_imgs/bg.png";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "./FormContainer";
import Loader from "../Loader";
import Message from "../Message";
import { getUserDetails, updateUserProfile } from "../../actions/UserActions";
import { USER_UPDATE_PROFILE_RESET } from "./UserConstants"

const Account = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
      if (!userInfo) {
          history.push('/login')
      } else {
          if (!user || !user.name || success || userInfo._id !== user._id) {
              dispatch({ type: USER_UPDATE_PROFILE_RESET })
              dispatch(getUserDetails('profile'))
          } else {
              setName(user.name)
              setEmail(user.email)
          }
      }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
      e.preventDefault()

      if (password != confirmPassword) {
          setMessage('Passwords do not match')
      } else {
          dispatch(updateUserProfile({
              'id': user._id,
              'name': name,
              'email': email,
              'password': password
          }))
          setMessage('')
      }

  }

  return (
    <Container bg={bg}>
      <StyledFormContainer>
          <h2 style={{ color: "white" }}>User Profile</h2>
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
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></StyledFormControl>
            </Form.Group>

            <Form.Group controlId="passwordConfirm">
              <StyledFormLabel>Confirm Password</StyledFormLabel>
              <StyledFormControl
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></StyledFormControl>
            </Form.Group>

            <Form.Group controlId="passwordConfirm">
              <StyledFormLabel>Kredits Left: {user.num_tokens} / 400</StyledFormLabel>
            </Form.Group>

            <StyledButton type="submit" variant="primary">
              Update
            </StyledButton>
          </Form>
        </StyledFormContainer>
    </Container>
  );
};

export default Account;

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
