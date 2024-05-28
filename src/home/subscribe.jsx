import React from "react";
import bookImage from "./../assets/other/book.png"; // Adjust the path as necessary

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe-container">
          <div className="subscribe-content">
            <h2>
              Leave your <span className="highlight">email</span> so we can send
              you our <span className="highlight">Free E-Book</span>
            </h2>
            <div className="subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button className="btn">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
