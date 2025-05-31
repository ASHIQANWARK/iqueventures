import { motion } from "framer-motion";
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
    <section
      className="w-full bg-black flex flex-col items-center justify-center text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 font-[Open_Sans] overflow-x-hidden"
      style={{ boxSizing: "border-box" }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center leading-tight mb-12 font-display uppercase bg-white text-transparent bg-clip-text px-2 max-w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Founder Says
      </motion.h2>

      {/* Content */}
      <div
        className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center gap-12 md:gap-16"
        style={{ minWidth: 0 }}
      >
        {/* Left Side - Quote */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left bg-[#0f1f2b]/70 p-6 md:p-8 rounded-xl border border-teal-800 overflow-hidden max-w-full min-w-0 flex-shrink"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ boxSizing: "border-box" }}
        >
          <p className="text-white text-base md:text-lg italic leading-relaxed mb-6 break-words">
            "At iQue Ventures, our mission extends far beyond conventional
            incubation — it's about unlocking the true potential of visionary
            thinkers, enabling them to transform bold ideas into impactful
            realities. We don’t just support startups; we nurture ecosystems
            where innovation, resilience, and purpose-driven leadership thrive.
            Startups are more than business ventures — they are powerful engines
            of societal change, economic growth, and technological evolution.
            At iQue, we are committed to building an environment that fuels
            creativity, provides strategic mentorship, and fosters meaningful
            collaborations — ensuring every founder has the tools and guidance
            to scale with confidence and integrity."
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold uppercase mt-6">
            Shafi Shoukath,
            <br />
            <span className="text-teal-300">Founder of iQue Ventures</span>
          </h3>
        </motion.div>

        {/* Right Side - Carousel */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center max-w-full min-w-0 flex-shrink"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ boxSizing: "border-box" }}
        >
          <div className="w-[220px] sm:w-[260px] md:w-[300px]">
            <Slider {...sliderSettings}>
              {ceoImages.map((image, idx) => (
                <div key={idx} className="flex justify-center">
                  <div
                    className="rounded-xl overflow-hidden shadow-xl w-full h-[260px] sm:h-[320px] md:h-[380px] bg-[#002B1F] p-2 border-2 border-emerald-400"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  >
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
