import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Userprofile } from "./pages/userProfile/UserProfile";
import { EditUserProfile } from "./pages/editUserProfile/EditUserProfile";
import { RegisterForm } from "./pages/register/RegisterForm";
import { LogIn } from "./pages/login/LogIn";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from './pages/home/home';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default function App() {

  return (
    <Router>
      <div className={"container"}>
        <div className="main">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/edituserprofile">
              <EditUserProfile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <HomeButton />
        </div>
        <NavBar />
      </div>

    </Router>
  );
}


function Profile() {

  return (
    <>
      <Userprofile />
    </>
  );

}

function About() {
  return <h2>About</h2>;
}

