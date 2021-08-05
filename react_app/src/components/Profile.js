import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import Tilt from "react-tilt";
import axiosInstance from '../axiosUserAPI'
import  {  useHistory } from 'react-router-dom'

function Profile()  {
    let history = useHistory()
    const handleLogout = async function(){
      try {
        const response = await axiosInstance.post('/user/logout/', {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push("/Login/")
        // return <Redirect to='/'/>
    }
    catch (e) {
        console.log(e);

    }
  }
  return (
    <TiltWrapper options={{ max: 0, scale: 1.0 }}>
        <StyledCard className="my-0 p-3">
          <StyledCardBody>
            <Card.Title as="div">
              <strong>Profile</strong>
            </Card.Title>
            <Card.Text as="div">
              <div className="my-3">
                <StyledInput className="form-group">
                  <label className="label">UsernameXYT</label>
                </StyledInput>
                <StyledInput className="form-group">
                  <label className="label">Plan: Premium</label>
                </StyledInput>
              </div>
            </Card.Text>
          </StyledCardBody>
          <Card.Footer as="div">
              <StyledButton variant="primary"
              onClick={handleLogout}
              >Logout</StyledButton>
              <StyledButton variant="primary">Forgot password</StyledButton>
          </Card.Footer>
        </StyledCard>
    </TiltWrapper>
  );
};

export default Profile;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  label {
    text-align: left !important;
    padding-top: 1rem;
  }
`;

const Wrapper = styled.div`
  border: #03b962 solid 10px;
  box-shadow: 0px 17px 20px 7px rgba(0, 0, 0, 0.7);
`;

const TiltWrapper = styled(Tilt)`
  width: 70%;
  max-width: 450px;
  max-height: 900px;

  @media (max-width: 576px) {
    width: 50vw;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  text-align: center;
  text-align: center !important;
  vertical-align: middle !important;
  justify-content: center;
  overflow: auto;
  background-color: white;
  box-shadow: 0px 17px 10px 7px rgba(0, 0, 0, 0.7);
`;

const StyledCardBody = styled(Card.Body)`
  overflow: auto;
  margin-bottom: 0px;
  overflow: hidden;
  div {
    margin-bottom: 0px;
    overflow: hidden;
  }
`;

const StyledButton = styled(Button)`
  text-align: center;
  background-color: transparent !important;
  color: #0A0227 !important; 
  border: solid #0A0227 2px;
  margin: 4%;

  &:hover {
    background-color: #0A0227 !important;
    color: white !important;
    -webkit-transition: background-color 0.3s;
    -webkit-transition: color 0.3s;
`;
