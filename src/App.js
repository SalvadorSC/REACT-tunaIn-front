import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { OtherProfile } from "./pages/otherProfile/OtherProfile";
import { EditUserProfile } from "./pages/editUserProfile/EditUserProfile";
import { RegisterForm } from "./pages/register/RegisterForm";
import { LogIn } from "./pages/login/LogIn";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./pages/home/home";
import { UploadPodcast } from "./pages/uploadPodcast/UploadPodcast";
import { Terms } from "./pages/terms/Terms";
import { MyPodcasts } from "./pages/myPodcasts/MyPodcasts";
import { PodcastInformation } from "./pages/podcastInformation/PodcastInformation";
import { EditPodcastInformation } from "./pages/editPodcastInformation/EditPodcastInformation";
import { PodcastList } from "./pages/podcastList/PodcastList";
import { hasSession} from "./util/LocalStorage.utils";
import { UserList } from "./pages/userList/UserList";
import { Footer } from "./Components/Footer/Footer";
import { Playbar } from "./Components/Playbar/Playbar";
import { PlaybarContextProvider } from './contexts/playbar';
import { HOME, REGISTER, LOGIN, PROFILE, EDITUSERPROFILE, TERMS, MYPODCASTS, PODCASTINFORMATION, EDITPODCASTINFORMATION, PODCASTLIST, USERLIST, OTHERPROFILE, SEARCH, SEARCHITEM } from "./routes/routes";
import { Search } from "./pages/search/Search";

export default function App() {

  const PrivateRoute = ({ component: Component, path }) => {
    if (!hasSession()) {
      return (
        <Redirect to={LOGIN} />
      )
    }

    return (<Route
      path={path}
      render={() => <Component />}
    />)
  }
  const [footerClass, setFooterClass] = useState('');
  const [containerClass, setContainerClass] = useState();
  const [mainClass, setMainClass] = useState();
  return (
    <Router>
      <PlaybarContextProvider>
      <NavBar setContainerClass={setContainerClass} setFooterClass={setFooterClass} setMainClass={setMainClass} />
      <div className={containerClass}>
        <div className={mainClass}>
          <Switch>
            {/* <Route path="/about" component={About} /> */}
            <Route path="/uploadpodcast" component={UploadPodcast} />
            <Route exact path={REGISTER} component={RegisterForm} />
            <Route exact path={LOGIN} component={LogIn} />
            {/* <Route exact path={PROFILE} component={UserProfile} /> */}
            <Route exact path={EDITUSERPROFILE} component={EditUserProfile} />
            <Route exact path={HOME} component={Home} />
            <Route exact path={TERMS} component={Terms} />
            <Route exact path={MYPODCASTS} component={MyPodcasts} />
            <Route exact path={SEARCH} component={Search} />
            <Route exact path={SEARCHITEM} component={Search} />
            <PrivateRoute exact path={PROFILE} component={UserProfile} />
            <PrivateRoute exact path={OTHERPROFILE} component={OtherProfile} />
            <PrivateRoute exact path={PODCASTLIST} component={PodcastList} />
            <PrivateRoute exact path={USERLIST} component={UserList} />
            <PrivateRoute exact path={PODCASTINFORMATION} component={PodcastInformation} />
            <PrivateRoute exact path={EDITPODCASTINFORMATION} component={EditPodcastInformation} />
          </Switch>
        </div>
      </div>
      
      <Footer footerClass={footerClass} />
      <Playbar />
      </PlaybarContextProvider>
    </Router>
  );
}
