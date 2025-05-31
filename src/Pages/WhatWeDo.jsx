import React from "react";

// Import images for each pillar
import entrepreneursImg from "../assets/images/entrepremuer.jpg";
import startupsImg from "../assets/images/startupneon.jpg";
import investorsImg from "../assets/images/investor.jpg";
import governmentImg from "../assets/images/govt.jpg";

const pillars = [
  {
    id: 1,
    title: "Entrepreneurs",
    image: entrepreneursImg,
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
    image: startupsImg,
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
    image: investorsImg,
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
    image: governmentImg,
    description: "Bridging policy and execution using:",
    points: [
      "Implementation-ready programs",
      "Public-private collaboration",
      "Educational partnerships",
      "Policy incubation",
    ],
  },
];

const leftPillars = pillars.slice(0, 2);
const rightPillars = pillars.slice(2, 4);

const WhatWeDo = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold uppercase">
          What <span className="italic font-light">We Do</span>
        </h2>
        <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto italic">
          Solving the Real Problems in the Startup Ecosystem
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Left Column - image on right */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {leftPillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} imageLeft={false} />
          ))}
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:block w-px h-[450px] bg-teal-600 mx-8" />

        {/* Right Column - image on left */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {rightPillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} imageLeft={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PillarCard = ({ pillar, imageLeft }) => {
  const imageSection = (
    <div className="relative w-40 lg:w-48 flex-shrink-0">
      <img
        src={pillar.image}
        alt={pillar.title}
        className="w-full h-full object-cover"
      />
      {/* Icon Badge */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-md border-2 border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );

  const contentSection = (
    <div className="p-6 flex flex-col justify-center flex-1">
      <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
      <p className="text-gray-300 text-sm mb-2">{pillar.description}</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-white">
        {pillar.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex rounded-xl bg-gradient-to-r from-[#003f49] to-[#000c10] border border-[#1f2a36] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative">
      {imageLeft ? imageSection : contentSection}
      {imageLeft ? contentSection : imageSection}
    </div>
  );
};

export default WhatWeDo;
