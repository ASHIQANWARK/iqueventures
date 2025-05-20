import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ceo1 from "../assets/images/art14.jpg";
import ceo3 from "../assets/images/art15.jpg";

const ceoImages = [ceo1, ceo3];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
};

const Awards = () => {
  return (
    <section className="w-full bg-[#0c3e49] flex flex-col items-center justify-center text-white py-16 md:py-24 px-4 md:px-8 overflow-x-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center leading-tight mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-white text-transparent bg-clip-text font-[Open_Sans] uppercase">
          What Our Founder Says
        </span>
      </motion.h2>

      {/* Content */}
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
        {/* Left Side - Founder Quote */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white mb-6 max-w-lg font-[OPEN_SANS] italic">
            "At iQue Ventures, our mission extends far beyond conventional
            incubation — it's about unlocking the true potential of visionary
            thinkers, enabling them to transform bold ideas into impactful
            realities. We don’t just support startups; we nurture ecosystems
            where innovation, resilience, and purpose-driven leadership thrive.
            Startups are more than business ventures — they are powerful engines
            of societal change, economic growth, and technological evolution. At
            iQue, we are committed to building an environment that fuels
            creativity, provides strategic mentorship, and fosters meaningful
            collaborations — ensuring every founder has the tools and guidance
            to scale with confidence and integrity."
          </p>

          <h3 className="text-xl sm:text-3xl font-semibold mb-4 font-[Open_Sans] uppercase">
            Shafi Shoukath,<br></br> Founder of iQue Ventures
          </h3>
        </motion.div>

        {/* Right Side - CEO Carousel */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[260px] sm:w-[300px]">
            <Slider {...sliderSettings}>
              {ceoImages.map((image, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="rounded-lg overflow-hidden shadow-lg w-full h-[340px] sm:h-[380px] bg-[#002B1F] p-2 border-2 border-emerald-400">
                    <img
                      src={image}
                      alt={`CEO ${idx + 1}`}
                      className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
