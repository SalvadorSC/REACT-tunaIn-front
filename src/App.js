import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { RegisterForm } from "./Components/RegisterForm";
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
      <div className="navbar">
        <h1 className="App-h1-logo">TUNA IN</h1>
        <ul className="App-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <HomeButton />
      </div>


    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function Profile() {
  return <h2>Name</h2>;
}

function About() {
  return <h2>About</h2>;
}
function Register() {
  <RegisterForm />
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
