import React, { useState, useEffect } from "react";
import heroImg from "./../assets/other/hero.png";
import aboutImg from "./../assets/other/about.png";
import herobg from "./../assets/other/herobg.png";

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
      <div className="home">
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
                  <a className="btn" title="Preview My Resume">
                    View CV
                  </a>
                </div>
                <div className="hero-social">
                  <p>
                    Follow On -{" "}
                    <a class="hover-effect" href="https://fb.com/iwmvictor/">
                      Facebook
                    </a>{" "}
                    |{" "}
                    <a
                      class="hover-effect"
                      href="https://instagram.com/iwmvictor/"
                    >
                      Instagram
                    </a>{" "}
                    |{" "}
                    <a
                      class="hover-effect"
                      href="https://linkedin.com/iwmvictor/"
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
        <section className="about"></section>
        <section className="partner"></section>
        <section className="service"></section>
        <div className="home-advert"></div>
        <section className="work"></section>
        <section className="subscribe"></section>
        <section className="testimonial"></section>
        <section className="blog"></section>
      </div>
    </>
  );
}

export default home;
