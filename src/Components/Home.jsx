import React from "react";
import HeroSection from "../Pages/Hero";
import About from "../Pages/About";
import Service from "../Pages/Service";
import ChatBot from "../Pages/ChatBot"
import LatestBlog from "../Pages/LatestBlog";
import TestimonialCard from "../Pages/Testimonial";
import CTASection from "../Pages/Cta";
import Awards from "../Pages/Founder";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CTASection />
      <About />
      <Service />
      <Awards />
      <ChatBot />
      <TestimonialCard />
      <LatestBlog />
    </div>
  );
};

export default Home;
