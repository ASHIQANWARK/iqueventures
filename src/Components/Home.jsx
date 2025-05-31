import React from "react";
import HeroSection from "../Pages/Hero";
import About from "../Pages/About";
import ChatBot from "../Pages/ChatBot"
import LatestBlog from "../Pages/LatestBlog";
import TestimonialCard from "../Pages/Testimonial";
import CTASection from "../Pages/Cta";
import Awards from "../Pages/Founder";
import WhatWeDo from "../Pages/WhatWeDo";
import ApproachSection from "../Pages/ApproachSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CTASection />
      <About />
      <WhatWeDo />
      <ApproachSection />
      <Awards />
      <ChatBot />
      <TestimonialCard />
      <LatestBlog />
    </div>
  );
};

export default Home;
