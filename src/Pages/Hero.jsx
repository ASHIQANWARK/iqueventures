import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import mainImage from "../assets/images/hero4.png";
import svg2 from "../assets/images/ffflurry.svg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 h-[75%] z-0 bg-gradient-to-tl from-[#046c52] via-[#07342a] to-black">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_30%,#00ffcc33_0%,transparent_40%)] opacity-30"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_60%,#ff5e0033_0%,transparent_40%)] opacity-30"></div>
      </div>
      <div className="absolute bottom-0 w-full h-[25%] bg-white z-0" />

      {/* Main Content */}
      <div className="relative z-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-tight uppercase font-[Open_Sans]">
              Welcome to <br />
              <span className="text-[#2effb5] text-5xl sm:text-6xl md:text-7xl block">
                iQue Ventures
              </span>
            </h2>

            <p className="text-white text-base sm:text-lg mb-4">
              Empowering India's startups with strategy, support, and success.
            </p>
            <p className="text-white text-sm sm:text-base mb-8">
              We nurture innovative minds and disruptive ideas by providing the
              resources, network, and mentorship they need to thrive. From
              ideation to scale-up, we stand by visionary founders every step
              of the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#2effb5] hover:bg-[#1ad89e] text-black px-6 py-3 rounded-full text-base font-semibold shadow-lg transition-all"
              >
                Get Started
              </button>
              <a
                href="https://youtube.com/shorts/ImUoLEFkAbE?si=S213Q0VTmTedxi1z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#2effb5] hover:text-white text-base font-medium"
              >
                <PlayCircle size={24} />
                Watch Video
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12"
          >
            <motion.img
              src={mainImage}
              alt="Innovation at iQue"
              className="w-full max-h-[450px] object-cover rounded-xl shadow-2xl border-[3px] border-[#2effb566]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>

        {/* Icon Grid */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "🚀", title: "Entrepreneurs" },
              { icon: "💰", title: "Investors" },
              { icon: "🌱", title: "Startups" },
              { icon: "🏛️", title: "Govt. & Institutions" },
            ].map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                className="relative bg-gradient-to-br from-[#046c52] via-[#07342a] to-black w-full aspect-square rounded-lg text-center p-6 shadow-md hover:shadow-xl transition-all border border-[#2effb544] flex flex-col justify-center items-center overflow-hidden"
              >
                <img
                  src={svg2}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{box.icon}</div>
                  <h4 className="text-lg font-semibold text-white">
                    {box.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => {
                const section = document.getElementById("whatwedo");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[#2effb5] text-black border border-[#2effb5] hover:bg-[#2effb5] hover:text-black transition px-6 py-3 rounded-full text-base font-medium"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
