import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "I've seen many organizations claim to support startups, but IQUE Capital lives it. They're a driving force in the innovation space.",
    name: "Sinead Bailey",
    designation: "Volunteer",
    rating: 5,
  },
  {
    text: "IQUE Capital's mentorship has truly transformed our startup's trajectory. Their insight and hands-on approach are game-changing.",
    name: "Marcus Liu",
    designation: "Founder, AgriTechX",
    rating: 5,
  },
  {
    text: "I appreciate how accessible and supportive the team is. They really care about the entrepreneurs they work with.",
    name: "Rina Patel",
    designation: "Co-Founder, EcoRev",
    rating: 4,
  },
  {
    text: "The best investment group we’ve worked with. Their support system is strong and effective.",
    name: "Daniel Gomez",
    designation: "Startup Consultant",
    rating: 5,
  },
  {
    text: "They helped us pivot just in time, saving our product and our mission.",
    name: "Fatima Noor",
    designation: "CTO, MedLifeAI",
    rating: 5,
  },
  {
    text: "The way IQUE Capital empowers youth startups is phenomenal. They walk the talk.",
    name: "Aarav Mehta",
    designation: "Tech Entrepreneur",
    rating: 5,
  },
  {
    text: "Their commitment to innovation is inspiring. Highly recommend for early-stage founders.",
    name: "Linda Osei",
    designation: "Investor & Coach",
    rating: 5,
  },
];

const TestimonialCard = ({ text, name, designation, rating, isCenter }) => (
  <div
    className={`
      transition-all duration-500 transform
      ${isCenter ? "scale-100 opacity-100 z-10" : "scale-90 opacity-50"}
      bg-gradient-to-br from-[#0d2b3a] to-[#0a1f2b]
      border border-[#1f3a4c] rounded-xl p-6 text-left shadow-md relative
      text-white

      ${isCenter ? "w-full sm:w-80 md:w-96" : "hidden sm:block w-64 md:w-72"}
    `}
  >
    <p className="text-base font-medium mb-6">{text}</p>
    <div className="absolute bottom-6 right-6 text-[8rem] text-white opacity-10 pointer-events-none select-none leading-none">
      &rdquo;
    </div>
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs">{designation}</p>
      </div>
      <div className="flex space-x-1">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-orange-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.175 0l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.965z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const getDisplayTestimonials = () => {
    const prev = (centerIndex - 1 + testimonials.length) % testimonials.length;
    const next = (centerIndex + 1) % testimonials.length;
    return [prev, centerIndex, next];
  };

  const displayIndexes = getDisplayTestimonials();

  return (
    <div className=" py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-[#046c52] mb-12 uppercase font-[Open_Sans]">
        Testimonials
      </h2>
      <div className="flex justify-center items-center space-x-4 max-w-full overflow-x-hidden">
        {displayIndexes.map((index) => (
          <TestimonialCard
            key={index}
            {...testimonials[index]}
            isCenter={index === centerIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
