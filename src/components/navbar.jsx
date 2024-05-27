import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logol from "./../assets/brand/light.png";
import logod from "./../assets/brand/dark.png";

function Navbar() {
  const encodeMessage = () => {
    const message =
      " ```Hi Iwmvictor,``` \n\n _I've had the chance to review your *portfolio* and I'm impressed with your work. *I'd like to schedule a call to discuss a potential job offer.* When would be a good time for you?_ ";
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const encodedMessage = encodeMessage();
    window.open(
      `https://wa.me/250781996271?text=${encodedMessage}&type=phone_number&app_absent=0`,
      "_blank"
    );
  };

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
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#portfolio">projects</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#testimonial">testimonials</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
            </ul>
          </div>
          <div className="navbtn">
            <a onClick={openWhatsApp} className="contact-btn btn" title="Lemme do your job">
              contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
