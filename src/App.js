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

export default function App() {
  return (
    <Router>
      <div className={"container"}>
        <div className="main">
          <Switch>
            {/* <Route path="/about" component={About} /> */}
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LogIn} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/edituserprofile" component={EditUserProfile} />
            <Route path="/" component={Home} />
            <Route path="/terms" component={Terms} />
          </Switch>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}
