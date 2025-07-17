import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PlayCircle, Briefcase, Rocket, HandCoins, Landmark } from "lucide-react";
import heroImg from "../assets/images/hero4.png";
import svg2 from "../assets/images/ffflurry.svg";

const HeroSection = () => {
  const navigate = useNavigate();

  const focusItems = [
    { icon: <Briefcase size={40} />, title: "Creating Entrepreneurs" },
    { icon: <Rocket size={40} />, title: "Supporting Startups" },
    { icon: <HandCoins size={40} />, title: "Creating and connecting investors" },
    {
      icon: <Landmark size={40} />,
      title: "Collaboration with government and other organisations",
    },
  ];

  return (
    <section className="relative font-[Open_Sans] overflow-hidden pt-5">
      {/* Two-tone Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[75%] bg-[#005c6d]" />
        <div className="absolute bottom-0 left-0 w-full h-[25%] bg-white" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_30%,#00ffcc33_0%,transparent_40%)] opacity-20" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_60%,#ff5e0033_0%,transparent_40%)] opacity-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              Let's create,
              <br />
              <span className="block">a better startup</span>
              <span className="block">Ecosystem</span>
            </h1>

            <p className="text-base sm:text-lg text-white mb-5">
              "Join us in building a better and more efficient startup ecosystem!
              By fostering collaboration, providing mentorship, and offering
              resources, we’re empowering startups to grow and thrive. Together,
              we can create a future where innovation knows no limits."
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#2effb5] text-black hover:bg-white hover:text-[#006674] px-6 py-3 rounded-full font-semibold shadow-md transition-all"
              >
                Get Started
              </button>
              <a
                href="https://youtube.com/shorts/ImUoLEFkAbE?si=S213Q0VTmTedxi1z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#2effb5] hover:text-white text-base font-medium transition"
              >
                <PlayCircle size={24} />
                Watch Video
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <img
              src={heroImg}
              alt="Startup Illustration"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Focus Cards Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            What we focus on :
          </h2>
          <div className="h-[3px] bg-white w-[60px] mx-auto mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {focusItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                className="relative bg-[#005c6d] text-white rounded-lg shadow-lg px-6 py-8 text-center border border-white/20 hover:shadow-[0_0_25px_#2effb5aa] transition w-[80%] h-[380px] mx-auto"
              >
                <img
                  src={svg2}
                  alt="bg"
                  className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="mb-4 text-[#2effb5]">{item.icon}</div>
                  <h4 className="text-lg font-bold leading-snug">{item.title}</h4>
                  <button className="mt-6 bg-[#2effb5] hover:bg-green-300 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-sm transition">
                    Learn More..
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
