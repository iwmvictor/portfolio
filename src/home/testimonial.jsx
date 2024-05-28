import React, { useState } from "react";
import Slider from "react-slick";
import user1 from "./../assets/testimony/user1.jpg";
import user2 from "./../assets/testimony/user2.png";
import user3 from "./../assets/testimony/user3.png";
import user4 from "./../assets/testimony/user1.jpg";
import user5 from "./../assets/testimony/user4.jpg";
import user6 from "./../assets/testimony/user2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const testimonials = [
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Taylor Hounder",
    title: "CEO of Poogle",
    image: user1,
    rating: 4.5,
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Taylor Hounder",
    title: "CEO of Poogle",
    image: user2,
    rating: 4.0,
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Taylor Hounder",
    title: "CEO of Poogle",
    image: user3,
    rating: 3.5,
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Taylor Hounder",
    title: "CEO of Poogle",
    image: user4,
    rating: 5.0,
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Taylor Hounder",
    title: "CEO of Poogle",
    image: user5,
    rating: 3.0,
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Taylor Hounder",
    title: "CEO of Poogle",
    image: user6,
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="stars">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} color="var(--accent-color)" />
        ))}
      {Array(halfStars)
        .fill()
        .map((_, index) => (
          <FaStarHalfStroke key={index} color="var(--accent-color)" />
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={index} color="var(--accent-color)" />
        ))}
    </div>
  );
};

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="testimonials container" id="testimonial">
      <div className="testimonial-container">
        <h2>What they're saying about My Work!</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial ${index === activeSlide ? "active" : ""}`}
            >
              <div className="testimonial-content">
                <span>{renderStars(testimonial.rating)} </span>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
