import React from "react";
import personImage from "../assets/images/businessman.jpg"; // Replace with your actual image path
import svg from "../assets/images/ffflurry.svg"; // Background SVG for card
import { Eye, Target } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={personImage}
          alt="About Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Card */}
      <div className="w-full md:w-1/2 bg-[#000000] flex items-center justify-center px-6 py-10">
        <div
          className="w-full max-w-2xl bg-[#000000] relative rounded-2xl p-8 sm:p-10 shadow-lg border border-[#1f2a36] overflow-hidden"
          style={{ backgroundImage: `url(${svg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-4 font-[Open_Sans]">
            Transforming <span className="italic text-teal-300">Vision</span> into Value
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-300 mb-6">
            At iQue Ventures, we are more than just an incubator — we are your growth partners. Our mission is to empower visionary startups with the tools, mentorship, and strategic guidance necessary to transform bold ideas into impactful realities. With a deep focus on innovation, technology, and scalable solutions, we walk hand-in-hand with entrepreneurs to help them thrive in today’s competitive landscape.
          </p>


          {/* Vision & Mission Inside Same Box */}
          <div className="grid sm:grid-cols-2 gap-6 bg-[#0f1f2b]/70 p-6 rounded-xl border border-teal-800">
            {/* Vision */}
            <div className="flex flex-col items-start text-left">
              <Eye className="text-teal-300 mb-2" />
              <h3 className="text-lg font-bold text-teal-300 uppercase font-[Open_Sans] mb-1">Our Vision</h3>
              <p className="text-sm text-gray-300">
                To become a global catalyst for entrepreneurial excellence — a launchpad where the world’s most daring and disruptive ideas are cultivated and transformed into industry-defining ventures.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-start text-left">
              <Target className="text-teal-300 mb-2" />
              <h3 className="text-lg font-bold text-teal-300 uppercase font-[Open_Sans] mb-1">Our Mission</h3>
              <p className="text-sm text-gray-300">
                To foster a dynamic ecosystem that supports startups through mentorship, funding access, strategic networking, and operational excellence. We strive to build sustainable businesses that create long-term value for society and the economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
