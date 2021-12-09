import React from "react";
import logo from "../../logo.svg";
import './navbar.scss';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="city tours company"></img>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="/">home</a>
          </li>
          <li className="nav-link">
            <a href="/">about</a>
          </li>
          <li className="nav-link active">
            <a href="/">tours</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
