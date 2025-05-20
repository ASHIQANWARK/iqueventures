import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0c3e49] px-4 sm:px-6 lg:px-12 py-16 lg:py-20 flex items-center justify-center text-white">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center font-[Open_Sans] uppercase">
          About Us
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-12 max-w-4xl mx-auto">
          At <span className="font-semibold text-teal-300">iQue Ventures</span>, we are more than just an incubator —
          we are your growth partners. Our mission is to empower visionary startups with the tools, mentorship, and
          strategic guidance necessary to transform bold ideas into impactful realities. With a deep focus on
          innovation, technology, and scalable solutions, we walk hand-in-hand with entrepreneurs to help them thrive in
          today’s competitive landscape.
        </p>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-tr-4xl rounded-bl-4xl shadow-md hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-300 text-center font-[Open_Sans] uppercase">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-center sm:text-left">
              To become a global catalyst for entrepreneurial excellence — a launchpad where the world’s most daring and
              disruptive ideas are cultivated and transformed into industry-defining ventures.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-tl-4xl rounded-br-4xl shadow-md hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-300 text-center font-[Open_Sans] uppercase">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-center sm:text-left">
              To foster a dynamic ecosystem that supports startups through mentorship, funding access, strategic
              networking, and operational excellence. We strive to build sustainable businesses that create long-term
              value for society and the economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
