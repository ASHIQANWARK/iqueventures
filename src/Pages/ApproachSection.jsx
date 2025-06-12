import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BarChart2, Globe2, Users } from "lucide-react";
import svg2 from "../assets/images/svg2.svg";

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
    <section className="text-white py-16 px-6 sm:px-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#046c52] uppercase">
          Our Project-Driven Solutions
        </h2>
        <p className="text-lg text-black leading-relaxed mb-12 max-w-2xl mx-auto">
          We identify gaps, pain points, and inefficiencies in each of the 4 pillars—then
          design real-world projects and scalable models to solve them.
        </p>

        {/* 4x1 Grid on large screens, stack on smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#006471] to-black border border-[#1f3a4c] rounded-xl p-6 text-left shadow-md aspect-square overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Background SVG */}
              <img
                src={svg2}
                alt="Card Background"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />

              {/* Card Content */}
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-[#123748] rounded-full mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
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
