import React from "react";
import "./../style/style.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-section">
          <div className="contact-info">
            <h4>Let's Talk Now</h4>
            <h1>Do You Have A Project In Your Mind?</h1>
            <p>
              Ready to turn your vision into a digital masterpiece? Let's
              collaborate and make your project a reality.
            </p>
            <div className="services">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>App Development</li>
                <li>Social Media Marketing</li>
                <li>Graphic Design</li>
                <li>Webmaster & IT Support</li>
              </ul>
            </div>
            <div className="social-links">
              <h4>Follow On</h4>
              <ul>
                <li>
                  <a href="#" className="facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="whatsapp">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <select name="service">
                <option value="">Choose Service</option>
                {/* Add options here */}
              </select>
              <textarea name="message" placeholder="Write Message"></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} All Right Reserved by Iwmvictor</p>
      </div>
    </footer>
  );
}

export default Footer;
