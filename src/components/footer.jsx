import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
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
                <li>Social Media Management</li>
                <li>Graphic Design</li>
                <li>Webmaster & IT Support</li>
              </ul>
            </div>
            <div className="social-links">
              <h4>Follow On</h4>
              <ul>
                <li>
                  <a href="https://facebook.com/iwmvictor" className="facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/iwmvictor" className="instagram">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/iwmvictor" className="twitter">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/63ne85" className="whatsapp">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/iwmvictor" className="linkedin">
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
                <option value="" hidden>
                  Choose Service
                </option>
                <option value="">Web Design</option>
                <option value="">Web Development</option>
                <option value="">App Development</option>
                <option value="">Graphic Design</option>
                <option value="">IT Support</option>
                <option value="">Webmaster</option>
                <option value="">Digital Marketing</option>
                <option value="">Social Media Management</option>
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
        <p>&copy; {currentYear} Iwmvictor. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
