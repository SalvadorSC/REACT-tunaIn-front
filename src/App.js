import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { EditUserProfile } from "./pages/editUserProfile/EditUserProfile";
import { RegisterForm } from "./pages/register/RegisterForm";
import { LogIn } from "./pages/login/LogIn";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./pages/home/home";
import { Terms } from "./pages/terms/Terms";
import { UserPodcastList } from "./pages/userPodcastList/UserPodcastList";
import { HOME, USER, PODCAST, REGISTER, LOGIN, PROFILE, EDITUSERPROFILE, TERMS, USERPODCASTLIST } from "./routes/routes";
import { getToken } from "./util/LocalStorage.utils";

export default function App() {

  const PrivateRoute = ({component: Component, path}) => (
    <Route  
      path={path}
      render={() => getToken() ? <Component /> : <Redirect to={LOGIN}/>}
    />
  )
  

  return (
    <Router>
      <div className={"container"}>
        <div className="main">
          <Switch>
            {/* <Route path="/about" component={About} /> */}
            <Route exact path={REGISTER} component={RegisterForm} />
            <Route exact path={LOGIN} component={LogIn} />
            {/* <Route exact path={PROFILE} component={UserProfile} /> */}
            <Route exact path={EDITUSERPROFILE} component={EditUserProfile} />
            <Route exact path={HOME} component={Home} />
            <Route exact path={TERMS} component={Terms} />
            <Route exact path={USERPODCASTLIST} component={UserPodcastList} />
            <PrivateRoute exact path={PROFILE} component={UserProfile} />
          </Switch>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}
