import React from "react";
import HeroSection from "../Pages/Hero";
import About from "../Pages/About";
import ChatBot from "../Pages/ChatBot"

import TestimonialCard from "../Pages/Testimonial";

import WhatWeDo from "../Pages/WhatWeDo";
import ApproachSection from "../Pages/ApproachSection";
import StatsSection from "../Pages/StatsSection";
import FaqSection from "../Pages/Faq";
import Contact from "../Pages/Contact";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <StatsSection />
      <WhatWeDo />
      <ApproachSection />

      <ChatBot />
      <TestimonialCard />
      <FaqSection />
     
   
    </div>
  );
};

export default Home;
