import React, { useState, useEffect } from "react";
import heroImg from "./../assets/other/hero.png";
import resume from "./../assets/portfolio/resume.pdf";
import { FaTimes } from "react-icons/fa";

function home() {
  const [services, setServices] = useState([
    "Software Developer",
    "Web Designer & Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Webmaster & Tech Support",
    "Teacher | Trainer | Mentor",
    "Socia Media Marketer To Become",
    "Tech Entrepreneur",
    "Freelancer",
  ]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentService, setCurrentService] = useState("");

  const [openCV, setOpenCV] = useState(false);
  const handleOpenCV = () => {
    setOpenCV(true);
  };
  const handleCloseCV = () => {
    setOpenCV(false);
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentService.length === services[currentServiceIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentService("");
          setCurrentServiceIndex((currentServiceIndex + 1) % services.length);
        }, 2000);
      } else {
        setCurrentService(
          (prevService) =>
            prevService + services[currentServiceIndex][prevService.length]
        );
      }
    }, 300);

    return () => clearInterval(typingInterval);
  }, [currentService, currentServiceIndex, services]);

  return (
    <>
      <div className="home" id="home">
        <section className="hero">
          <div className="hero-sec grid-2-columns">
            <div className="left">
              <div className="content">
                <h1>
                  victor
                  <br /> isingizwe munezero
                </h1>
                <span className="service-span">{currentService || "|"}</span>
                <p>
                  Passionate about crafting innovative digital solutions, I am a
                  versatile professional excelling in software development, web,
                  UI/UX, and graphic design. With a knack for mentoring and a
                  drive for entrepreneurship, I bring creativity, technical
                  expertise, and strategic insight to every project I undertake.
                </p>
                <div className="hero-action">
                  <a
                    className="btn"
                    title="Preview My Resume"
                    onClick={handleOpenCV}
                  >
                    Preview My Resume
                  </a>
                </div>
                <div className="hero-social">
                  <p>
                    Follow On -{" "}
                    <a
                      class="hover-effect"
                      target="_blank"
                      href="https://fb.com/iwmvictor/"
                    >
                      Facebook
                    </a>{" "}
                    |{" "}
                    <a
                      class="hover-effect"
                      target="_blank"
                      href="https://instagram.com/iwmvictor/"
                    >
                      Instagram
                    </a>{" "}
                    |{" "}
                    <a
                      class="hover-effect"
                      target="_blank"
                      href="https://linkedin.com/in/iwmvictor/"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <img src={heroImg} alt="Iwmvictor" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {openCV && (
        <div className="cv-modal">
          <div className="overlay">
            <div className="resume">
              <div className="preview">
                <iframe
                  title="Iwmvictor's CV"
                  src={resume}
                  width="100%"
                  height="580px"
                ></iframe>
                <button onClick={handleCloseCV}>
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default home;
