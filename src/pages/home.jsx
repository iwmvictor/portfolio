import React from "react";
import About from "./../home/about";
import Blog from "./../home/blog";
import Hero from "./../home/hero";
import Portfolio from "./../home/portfolio";
import Service from "./../home/service";
import Subscribe from "./../home/subscribe";
import Testimonial from "./../home/testimonial";
import ServiceSlide from "../home/serviceSlide";

function home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Subscribe />
      <Testimonial />
      <Blog />
    </>
  );
}

export default home;
