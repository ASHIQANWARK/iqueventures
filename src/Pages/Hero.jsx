import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import svg from "../assets/images/svg2.svg";
import team1 from "../assets/images/hero.jpeg";
import team2 from "../assets/images/startup.jpg";
import team3 from "../assets/images/sucess.jpeg";
import team4 from "../assets/images/hero.jpeg";
import mainImage from "../assets/images/hero.jpeg";

const teamImages = [team1, team2, team3, team4];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-12 py-20"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 bg-opacity-70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl w-full text-white bg-[#0e1b24] rounded-2xl p-8 sm:p-10 border border-[#1f2a36] shadow-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${svg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Poppins', 'Open Sans', sans-serif",
        }}
      >
        <p className="text-sm sm:text-base md:text-2xl tracking-widest text-blue-200 uppercase mb-4 text-center">
          Welcome to iQue Ventures
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug text-center mb-6">
          Building a Better & Private <br />
          <span className="text-teal-300">Startup Ecosystem for India</span>
        </h1>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg text-base transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
        >
          <div className="flex -space-x-3">
            {teamImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Client ${index + 1}`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-semibold">3K+ Clients</p>
            <div className="flex justify-center sm:justify-start items-center text-yellow-400 mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm sm:text-base font-medium mt-1">
              Reviews <span className="font-bold">(4.8 of 5)</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
