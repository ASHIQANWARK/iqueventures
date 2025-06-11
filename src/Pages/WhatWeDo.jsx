import React from "react";
import svg2 from "../assets/images/svg2.svg"; // SVG background image

const pillars = [
  {
    id: 1,
    title: "Entrepreneurs",
    description: "Helping founders become confident leaders with:",
    points: [
      "Hands-on mentoring",
      "Startup-building programs",
      "Community support",
      "Co-founder matching",
    ],
  },
  {
    id: 2,
    title: "Startups",
    description: "Empowering early-stage startups to scale via:",
    points: [
      "MVP & product development",
      "Business model refinement",
      "Market entry strategies",
      "Incubation & acceleration",
    ],
  },
  {
    id: 3,
    title: "Investors",
    description: "Connecting intelligent capital with opportunities through:",
    points: [
      "Curated startups",
      "Transparent evaluations",
      "Long-term collaboration",
      "FOCO & unique models",
    ],
  },
  {
    id: 4,
    title: "Governments & Institutions",
    description: "Bridging policy and execution using:",
    points: [
      "Implementation-ready programs",
      "Public-private collaboration",
      "Educational partnerships",
      "Policy incubation",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-bl from-[#046c52] via-[#07342a] to-black py-20 px-4 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold uppercase">
          What <span className="italic font-light">We Do</span>
        </h2>
        <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto italic">
          Solving the Real Problems in the Startup Ecosystem
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
};

const PillarCard = ({ pillar }) => {
  return (
    <div
      className="relative border border-emerald-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center overflow-hidden min-h-[420px]"
    >
      {/* SVG Background as backgroundImage */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${svg2})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0  z-10" />

      {/* Card Content */}
      <div className="relative z-20 py-10 px-6 flex flex-col justify-center items-center h-full">
        <h3 className="text-3xl font-bold text-white uppercase mb-3">
          {pillar.title}
        </h3>
        <p className="text-gray-300 text-xl mb-4 max-w-xs">{pillar.description}</p>
        <ul className="list-disc list-inside space-y-1 text-lg text-white text-left max-w-xs mx-auto">
          {pillar.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
