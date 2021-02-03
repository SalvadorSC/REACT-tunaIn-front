import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-tuna-noname.svg"; // with import
import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { hasSession} from "../../util/LocalStorage.utils";

export function NavBar({ setContainerClass, setMainClass, setFooterClass, buscadorClass, buscadorStyleClass, resultadosbusquedaClass }) {
  const [navbarClass, setNavbarClass] = useState('');
  const [nameClass, setNameClass] = useState('');
  const [navbarLogoClass, setNavbarLogoClass] = useState('');
  const [linksLogInAndRegister, setLinksLogInAndRegister] = useState('');
  // const url = window.location.href;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavbarClass("navbar-home");
      setNavbarLogoClass("navbarLogo-home");
      setContainerClass("container-home");
      setMainClass("main-home");
      setFooterClass("footer-home");
      setNameClass("name-home");
    }
    else {
      setNavbarLogoClass("navbarLogo");
      setNavbarClass("navbar");
      setContainerClass("container");
      setMainClass("main");
      setFooterClass("footer");
      setNameClass("name");
    }
  }, [location]);

  /* const editLinksLogInAndRegister = () => {
    if (hasSession()) {
      setLinksLogInAndRegister(
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>)
    }
    else if (!hasSession()) {
      setLinksLogInAndRegister("")
    }
  } */
  const editLinksLogInAndRegister = (<>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
  </>
  )





  return (
    <>
      <div className={navbarClass}>
        <ul>
          <div className={nameClass}>
            <br></br>

            <h3 className="nameTitle">TUNA IN</h3>
          </div>

          <img src={logo} className={navbarLogoClass} alt="Logo" />

          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {!hasSession() && <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>}
          {linksLogInAndRegister}
          <li>
            <Link to='/myPodcasts'>My Podcasts</Link>
          </li>
          <li>
            <Link to='/PodcastList'>Podcasts</Link>
          </li>
          <li>
            <Link to='/UserList'>Users</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
