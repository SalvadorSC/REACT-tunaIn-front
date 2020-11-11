import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { EditUserProfile } from "./pages/editUserProfile/EditUserProfile";
import { RegisterForm } from "./pages/register/RegisterForm";
import { LogIn } from "./pages/login/LogIn";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./pages/home/home";
import { Terms } from "./pages/terms/Terms";
import {CenterModal} from "./Components/CenterModal/CenterModal";
import { Button } from 'react-bootstrap';



export default function App() {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Router>
      <div className={"container"}>
        <div className="main">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LogIn} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/edituserprofile" component={EditUserProfile} />
            <Route path="/" component={Home} />
            <Route path="/terms" component={Terms} />
          </Switch>
        </div>
        <NavBar />
        <Button variant="primary" onClick={() => setModalShow(true)}>
         TunaIn Podcast Player
        </Button>

        <CenterModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <CenterModal />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
