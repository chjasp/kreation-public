import styled from "styled-components";
import NavbarBS from "./components/NavbarBS";
import SelectTool from "./components/SelectTool";
import FocusGroup from "./components/FocusGroup";
import Copypress from "./components/Copypress";
import CopyFlow from './components/CopyFlow'
import LandingPage from "./components/LandingPage";
import Edit from "./components/Edit";
import Login from "./components/user_handling/Login";
import Register from "./components/user_handling/Register";
import Account from "./components/user_handling/Account";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledNavbarBS />
      <Route path="/Toolselection" component={SelectTool} />
      <Route path="/Focusgroup" component={FocusGroup} />
      <Route path="/Copypress" component={Copypress} />
      <Route path="/CopyFlow" component={CopyFlow} />
      <Route path="/Edit" component={Edit} />
      <Route path="/Login" component={Login} />
      {/* <Route path="/Register" component={Register} /> */}
      <Route path="/Account" component={Account} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Feedback" component={Feedback} />
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
}

export default App;

const StyledNavbarBS = styled(NavbarBS)`
`;