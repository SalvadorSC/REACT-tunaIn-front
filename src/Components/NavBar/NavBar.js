import { Link } from "react-router-dom";
import logo from "../../assets/logo-tuna-noname.svg"; // with import
import React from "react";
import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <br />
          <img src={logo} alt="Logo" />
          <br />
          <h2 className="navbar-LogoName">Tuna</h2>
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
          <Link to='/userPodcastList'>User Podcast List</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
