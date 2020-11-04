import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Userprofile } from "./userProfile";
import { EditUserProfile } from "./editUserProfile";
import { RegisterForm } from "./Components/RegisterForm";
import { LogIn } from "./Components/LogIn";
import { NavBar } from "./Components/NavBar";
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
              <EditProfile />
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

function Home() {
  return (<>
    <h2>Home</h2>
  </>)

}
function Profile() {
  return (
    <>
      <Userprofile />
      <Link to="/editUserProfile"><button>Edit</button></Link>
    </>
  );
}
function EditProfile() {
  return (
    <>
      <EditUserProfile />
      <button>Edit</button>
      <br />
      <br />
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

