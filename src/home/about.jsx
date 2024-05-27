import React, { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="about">
      <div className="container">
        <div className="about-container">
          <div className="sidebar">
            <ul>
              <li
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => setActiveTab("experience")}
              >
                <span>Experience</span>
              </li>
              <li
                className={activeTab === "education" ? "active" : ""}
                onClick={() => setActiveTab("education")}
              >
                <span>Education</span>
              </li>
              <li
                className={activeTab === "awards" ? "active" : ""}
                onClick={() => setActiveTab("awards")}
              >
                <span>Awards</span>
              </li>
            </ul>
          </div>
          <div className="content">
            <h5>About Me</h5>
            <h2>Why you should hire me for your next project?</h2>
            {activeTab === "experience" && (
              <div className="experience">
                <div className="experience-item">
                  <h4>
                    Web Design <span>2016-2022</span>
                  </h4>
                  <p>
                    I break down complex user experience problems to create
                    integrity connect billions of people.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>
                    UI Design <span>2018-2019</span>
                  </h4>
                  <p>
                    I break down complex user experience problems to create
                    integrity connect billions of people.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>
                    Social Manager <span>2016-2022</span>
                  </h4>
                  <p>
                    I break down complex user experience problems to create
                    integrity connect billions of people.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>
                    Plugin Developer <span>2016-2022</span>
                  </h4>
                  <p>
                    I break down complex user experience problems to create
                    integrity connect billions of people.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>
                    App Developer <span>2016-2022</span>
                  </h4>
                  <p>
                    I break down complex user experience problems to create
                    integrity connect billions of people.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>
                    Graphic Designer <span>2016-2022</span>
                  </h4>
                  <p>
                    I break down complex user experience problems to create
                    integrity connect billions of people.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div className="education">
                <div className="education-item">
                  <h4>
                    BS in Computer Science <span>2012-2016</span>
                  </h4>
                  <p>University of Technology</p>
                </div>
                <div className="education-item">
                  <h4>
                    MS in User Experience Design <span>2017-2019</span>
                  </h4>
                  <p>Design Academy</p>
                </div>
              </div>
            )}
            {activeTab === "awards" && (
              <div className="awards">
                <div className="awards-item">
                  <h4>
                    Best Designer <span>2018</span>
                  </h4>
                  <p>Design Awards</p>
                </div>
                <div className="awards-item">
                  <h4>
                    Top UX Specialist <span>2020</span>
                  </h4>
                  <p>UX Excellence Awards</p>
                </div>
              </div>
            )}
          </div>
          <div className="summary">
            <div className="summary-item">
              <h2>1.5k</h2>
              <p>Happy Clients</p>
            </div>
            <div className="summary-item">
              <h2>50+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="summary-item">
              <h2>15+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
