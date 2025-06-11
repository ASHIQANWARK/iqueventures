import React from "react";
import { Rocket } from "lucide-react";

const Career = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#046c52] via-[#07342a] to-black min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-bold text-[#fefefe] mb-4">
        Join Us Today <Rocket className="inline-block w-8 h-8 ml-2" />
      </h2>
      <p className="text-lg text-teal-600 font-[Open_Sans] upperacse">Coming Soon</p>
    </div>
  );
};

export default Career;
