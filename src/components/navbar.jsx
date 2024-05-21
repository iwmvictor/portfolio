import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../style/style.scss";
import logol from "./../assets/brand/light.png";
import logod from "./../assets/brand/dark.png";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logol} alt="IWMVICTOR" />
            </Link>
          </div>
          <div className="navlinks">
            <ul>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">projects</a>
              </li>
              <li>
                <a href="">services</a>
              </li>
              <li>
                <a href="">testimonials</a>
              </li>
              <li>
                <a href="">blog</a>
              </li>
            </ul>
          </div>
          <div className="navbtn">
            <a href="/" className="contact-btn btn">
              contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;