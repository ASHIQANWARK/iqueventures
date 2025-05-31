import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BarChart2, Globe2, Users } from "lucide-react";
import svg from "../assets/images/wwwhirl.svg";
import svg2 from "../assets/images/ffflurry.svg"

const ApproachSection = () => {
  const approachItems = [
    {
      icon: <Lightbulb className="text-teal-300 w-8 h-8" />,
      title: "Problem-centric",
      text: "We identify gaps, pain points, and inefficiencies in each of the 4 pillars.",
    },
    {
      icon: <BarChart2 className="text-teal-300 w-8 h-8" />,
      title: "Data-driven",
      text: "We analyze data deeply and use it to build our project models.",
    },
    {
      icon: <Globe2 className="text-teal-300 w-8 h-8" />,
      title: "Scalable across regions",
      text: "Solutions designed to scale regionally and globally with impact.",
    },
    {
      icon: <Users className="text-teal-300 w-8 h-8" />,
      title: "Built with collaboration",
      text: "All projects are created in collaboration with domain experts.",
    },
  ];

  return (
    <section
      className="bg-black text-white py-16 px-6 sm:px-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center justify-center gap-2">
          💡 Our Approach:{" "}
          <span className="text-teal-400">Project-Driven Solutions</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
          We identify gaps, pain points, and inefficiencies in each of the 4 pillars—then{" "}
          <span className="italic text-white">
            design real-world projects and scalable models
          </span>{" "}
          to solve them.
        </p>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#0d2b3a] to-[#0a1f2b] border border-[#1f3a4c] rounded-xl p-6 text-left shadow-md overflow-hidden"
            >
              {/* Card Background SVG */}
              <img
                src={svg2}
                alt="Card Background"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#123748] rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ApproachSection;
