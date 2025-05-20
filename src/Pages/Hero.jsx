import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import team1 from "../assets/images/hero.jpeg";
import team2 from "../assets/images/startup.jpg";
import team3 from "../assets/images/sucess.jpeg";
import team4 from "../assets/images/hero.jpeg";
import mainImage from "../assets/images/hero.jpeg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-white w-full max-w-7xl"
      >
        <p className="text-sm sm:text-base md:text-lg tracking-widest text-blue-200 uppercase mb-4">
          Always Ready To Help You
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-[Open_Sans]">
          Grow Your Company
          <br />
          <span className="text-teal-300">For The Future</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-blue-100 mt-4 sm:mt-6 max-w-3xl leading-relaxed">
          We're committed to nurturing and scaling businesses to new heights.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="mt-6 sm:mt-8 bg-teal-600 hover:bg-gray-700 text-white font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-lg shadow-md text-sm sm:text-base"
        >
          Get Started
        </motion.button>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10"
        >
          <div className="flex -space-x-3">
            {[team1, team2, team3, team4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`user${i + 1}`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <div>
            <p className="text-sm sm:text-base font-semibold">3K+ Clients</p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm sm:text-base font-medium">
              Reviews <span className="font-bold">(4.8 of 5)</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
