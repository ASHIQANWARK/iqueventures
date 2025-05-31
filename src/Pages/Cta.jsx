import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#000000] text-white py-20 px-4 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <p className="text-lg tracking-widest text-purple-300 uppercase mb-2">
          Get in touch
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 uppercase font-[Open_Sans]">
          Join today &{" "}
          <span className="text-teal-500">Grow your business</span>
        </h2>
        <div className="relative flex items-center justify-center gap-4 flex-wrap">
          {/* Button 1 */}
          <button
            onClick={() => navigate("/about")}
            className="bg-white hover:bg-teal-900 px-6 py-2 text-teal-600 rounded-lg font-medium z-10"
          >
            Get Started
          </button>

          {/* Button 2 */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-teal-500 hover:bg-green-600 px-6 py-2 rounded-lg font-medium z-10"
          >
            Get in Touch
          </button>

          {/* Overlapping Span */}
          <span className="absolute bg-black text-teal-500 font-bold px-3 py-1 rounded-full shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            Or
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
