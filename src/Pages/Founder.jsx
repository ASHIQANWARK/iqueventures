import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import founderImg from "../assets/images/shafi.jpg";
import bgSvg from "../assets/images/ttten.svg"; // Add your SVG file here

const Awards = () => {
  return (
    <section className="relative w-full bg-gradient-to-tl from-[#046c52] via-[#07342a] to-black flex flex-col items-center justify-center text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 font-[Open_Sans] overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center leading-tight mb-12 font-display uppercase bg-white text-transparent bg-clip-text px-2 max-w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Founder Says
      </motion.h2>

      {/* SVG Background behind the card */}
      

      {/* Combined Card */}
      <motion.div
        className="relative z-10 w-full max-w-5xl bg-gradient-to-br from-[#046c52] via-[#07342a] to-black border border-teal-800 rounded-xl shadow-xl flex flex-col lg:flex-row items-center gap-8 p-6 md:p-10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Founder Image & Socials */}
        <div className="flex flex-col items-center w-full lg:w-1/3 text-center">
        <img
        src={bgSvg}
        alt="decorative shape"
        className="absolute top-1/2 left-1/2 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0"
      />
          <img
            src={founderImg}
            alt="Founder"
            className="rounded-lg w-full h-[300px] object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-white uppercase mb-1">
            Shafi Shoukath
          </h3>
          <p className="text-sm text-teal-300 mb-3">Founder of iQue Ventures</p>
          <div className="flex justify-center gap-4 text-2xl text-white">
            
            <a href="https://www.instagram.com/shafishoukath?igsh=MWM0Nnk5NDRtN2g3bA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            
            <a href="https://www.linkedin.com/in/shafi-shoukath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-300 transition" />
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="w-full lg:w-2/3 text-white text-center lg:text-left">
          <p className="text-base md:text-lg italic leading-relaxed mb-4">
            "At iQue Ventures, our mission extends far beyond conventional incubation — it's about unlocking the true potential of visionary thinkers, enabling them to transform bold ideas into impactful realities. We don’t just support startups; we nurture ecosystems where innovation, resilience, and purpose-driven leadership thrive. Startups are more than business ventures — they are powerful engines of societal change, economic growth, and technological evolution. At iQue, we are committed to building an environment that fuels creativity, provides strategic mentorship, and fosters meaningful collaborations — ensuring every founder has the tools and guidance to scale with confidence and integrity."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
