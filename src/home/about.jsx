import React, { useState, useEffect } from "react";
import aboutImg from "./../assets/other/abt.png";
import GitHubCalendar from "react-github-calendar";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaTelegramPlane,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaJava,
  FaPhp,
  FaSass,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
  FaNode,
  FaFigma,
  FaHtml5,
} from "react-icons/fa6";
import { SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { SiBuymeacoffee } from "react-icons/si";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  const SocialMediaIcons = () => (
    <div className="socialsmedia">
      <span>Link up with me:</span>
      <div className="social-media">
        <a href="https://github.com/iwmvictor" className="icon github">
          <FaGithub title="GitHub" />
        </a>
        <a
          href="mailto:isingizwemunezerovictor5@gmail.com"
          className="icon mail"
        >
          <FaEnvelope title="Leave an Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/iwmvictor"
          className="icon linkedin"
        >
          <FaLinkedinIn title="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/iwmvictor"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/iwmvictor" className="icon facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/iwmvictor" className="icon twitter">
          <FaXTwitter title="TwitterX" />
        </a>
        <a
          href="https://www.pinterest.de/meyvnagency/"
          className="icon pinterest"
        >
          <FaPinterestP />
        </a>
        <a href="https://www.youtube.com/@meyvnagency" className="icon youtube">
          <FaYoutube title="YouTube Channel" />
        </a>
        <a href="https://www.tiktok.com/@iwmvictor" className="icon tiktok">
          <FaTiktok title="TikTok" />
        </a>
        <a href="https://wa.link/63ne85" className="icon whatsapp">
          <FaWhatsapp title="WhatsApp" />
        </a>
        <a href="https://t.me/iwmvictor" className="icon telegram">
          <FaTelegramPlane />
        </a>
        <a
          href="https://buymeacoffee.com/iwmvictor"
          className="icon buymeacoffee"
        >
          <SiBuymeacoffee title="Buy Me a Coffee" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-container">
          <div className="sidebar">
            <ul>
              <li
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => setActiveTab("experience")}
              >
                <span>Overview</span>
              </li>
              <li
                className={activeTab === "education" ? "active" : ""}
                onClick={() => setActiveTab("education")}
              >
                <span>Online</span>
              </li>
              <li
                className={activeTab === "awards" ? "active" : ""}
                onClick={() => setActiveTab("awards")}
              >
                <span>Skills</span>
              </li>
            </ul>
          </div>
          <div className="content">
            <h5>About Me</h5>
            <h2>Why you should hire me for your next project?</h2>
            {activeTab === "experience" && (
              <div className="overview">
                <div className="abt-img">
                  <img src={aboutImg} alt="" />
                </div>
                <div className="abt-content">
                  <p>
                    Hey there! I'm Isingizwe Munezero Victor, a tech enthusiast
                    and versatile creative based in Rwanda. I'm currently
                    completing my degree in computer and software engineering.
                    With a unique blend of skills in software development,
                    graphic design, and content creation, I thrive on turning
                    ideas into reality.
                  </p>
                  <p>
                    My passion for excellence and attention to detail ensures
                    every project shines. Whether developing software, designing
                    graphics, or optimizing websites, I deliver top-notch
                    results. I'm also committed to growth and love sharing
                    knowledge through tutoring, hosting events, and creating
                    educational content.
                  </p>
                  <p>
                    Looking for a dynamic team player passionate about
                    innovation and quality? Let's team up and create something
                    amazing together!
                  </p>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div className="online">
                <SocialMediaIcons />
                <div className="contribution-calendar">
                  <h4>Contribution Calendar</h4>
                  <GitHubCalendar username="iwmvictor" />
                </div>
              </div>
            )}
            {activeTab === "awards" && (
              <div className="skills">
                <div className="skill">
                  <div className="icon">
                    <FaHtml5 />
                  </div>
                  <span>HTML</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaCss3Alt />
                  </div>
                  <span>CSS</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaJs />
                  </div>
                  <span>JavaScript</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaReact />
                  </div>
                  <span>React.js</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <TbBrandReactNative />
                  </div>
                  <span>React Native</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaLaravel />
                  </div>
                  <span>Laravel</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaJava />
                  </div>
                  <span>Java</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaPhp />
                  </div>
                  <span>PHP</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaSass />
                  </div>
                  <span>Sass</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <SiMysql />
                  </div>
                  <span>MySQL</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaGitAlt />
                  </div>
                  <span>Git</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaGithub />
                  </div>
                  <span>GitHub</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaFigma />
                  </div>
                  <span>Figma</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <FaNode />
                  </div>
                  <span>Node.js</span>
                </div>
                <div className="skill">
                  <div className="icon">
                    <SiTypescript />
                  </div>
                  <span>TypeScript</span>
                </div>
              </div>
            )}
          </div>
          <div className="summary">
            <div className="summary-item">
              <h2>312+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="summary-item">
              <h2>36+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="summary-item">
              <h2>4+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
