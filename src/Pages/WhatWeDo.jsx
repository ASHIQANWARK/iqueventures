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
    <section id="whatwedo" className="bg-white py-12 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-[#005c6d] font-bold uppercase">
          What <span className="italic font-light">We Do</span>
        </h2>
        <p className="text-[#005c6d] text-sm mt-2 max-w-xl mx-auto italic">
          Solving the Real Problems in the Startup Ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
};

const PillarCard = ({ pillar }) => {
  return (
    <div className="relative bg-[#005c6d] border border-emerald-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 min-h-[300px]">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none rounded-xl"
        style={{ backgroundImage: `url(${svg2})` }}
      />
      <div className="relative z-10 text-white">
        <h3 className="text-xl font-semibold uppercase mb-2 text-emerald-200">
          {pillar.title}
        </h3>
        <p className="text-sm mb-2">{pillar.description}</p>
        <ul className="list-disc list-inside space-y-1 text-[14px] text-gray-100">
          {pillar.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
