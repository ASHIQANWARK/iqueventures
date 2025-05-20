import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 Import navigate

import team1 from "../assets/images/hero.jpeg";
import team2 from "../assets/images/startup.jpg";
import team3 from "../assets/images/sucess.jpeg";
import team4 from "../assets/images/hero.jpeg";
import mainImage from "../assets/images/hero.jpeg";

const HeroSection = () => {
  const navigate = useNavigate(); // 👈 Hook

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl w-full z-10 relative text-white"
      >
        <p className="text-xl tracking-widest text-blue-200 uppercase mb-4">
          Always Ready To Help You
        </p>
        <h1 className="text-7xl md:text-6xl font-extrabold leading-tight font-[Open_Sans]">
          Grow Your Company
          <br />
          <span className="text-teal-300">For The Future</span>
        </h1>
        <p className="text-2xl text-blue-100 mt-6 max-w-3xl leading-relaxed">
          We're committed to nurturing and scaling businesses to new heights.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")} // 👈 Redirect here
          className="mt-8 bg-teal-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          Get Started
        </motion.button>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center gap-4 mt-10"
        >
          <div className="flex -space-x-3">
            <img src={team1} alt="user1" className="w-12 h-10 rounded-full border-2 border-white" />
            <img src={team2} alt="user2" className="w-12 h-10 rounded-full border-2 border-white" />
            <img src={team3} alt="user3" className="w-12 h-10 rounded-full border-2 border-white" />
            <img src={team4} alt="user4" className="w-12 h-10 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">3K+ Clients</p>
            <div className="flex items-center text-yellow-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="text-white text-sm font-medium">
              Reviews <span className="font-bold">(4.8 of 5)</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
