import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logol from "./../assets/brand/light.png";
import logod from "./../assets/brand/dark.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className={navbarClasses.join(" ")}>
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
