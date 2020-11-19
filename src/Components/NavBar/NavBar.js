import { Link } from "react-router-dom";
import logo from "../../assets/logo-tuna-noname.svg"; // with import
import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";


export function NavBar() {
  const [navbarClass, setNavbarClass] = useState('');
  const url = window.location.href;

  useEffect(() => {
    if (url === "http://localhost:3000/") {
      setNavbarClass("navbar-home");
    }
    else {
      setNavbarClass("navbar");
    }
  }, [url]);

  return (
    <>
      <div className={navbarClass}>
        <ul>
          
          <img src={logo} alt="Logo" />

          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to='/myPodcasts'>My Podcasts</Link>
          </li>
          <li>
          <Link to='/PodcastList'>Podcasts</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
