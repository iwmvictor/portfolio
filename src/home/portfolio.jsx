import React, { useState } from "react";
import thumbnail from "./../assets/portfolio/thumbnail.jpg";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(2); // Assuming the third item is active initially

  const portfolioItems = [
    {
      title: "Stunting UI Design Portfolio",
      description:
        "I break down complex user experience problems to create integrity. Many desktop publishing packages.",
    },
    {
      title: "Stunting UI Design Portfolio",
      description:
        "I break down complex user experience problems to create integrity. Many desktop publishing packages.",
    },
    {
      title: "Stunting UI Design Portfolio",
      description:
        "I break down complex user experience problems to create integrity. Many desktop publishing packages.",
    },
    {
      title: "Stunting UI Design Portfolio",
      description:
        "I break down complex user experience problems to create integrity. Many desktop publishing packages.",
    },
  ];

  return (
    <div className="portfolio container" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-thumbnail">
          <img src={thumbnail} alt="Portfolio Thumbnail" />
        </div>
        <div className="portfolio-content">
          <h2>My Portfolio And Your Success Story</h2>
          <div className="portfolio-items">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`portfolio-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div><h3>
                  <span> 0{index + 1} </span></h3>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="arrow-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
