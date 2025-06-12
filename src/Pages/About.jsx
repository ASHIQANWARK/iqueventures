import React from "react";
import aboutImage1 from "../assets/images/blog-recent-4.jpg";
import aboutImage2 from "../assets/images/about-2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-12 sm:py-16 text-gray-800 font-sans"
    >
      {/* Section Title */}
      <div
        className="max-w-6xl mx-auto px-4 mb-10 sm:mb-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#046c52] mb-2 uppercase font-[Open_Sans]">
          About Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          Empowering Visionaries. Fueling Innovation. Building the Future.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg sm:text-xl font-semibold text-[#046c52] mb-4 uppercase font-[Open_Sans]">
              Transforming Vision into Value
            </h3>
            <img
              src={aboutImage1}
              alt="About iQue Ventures"
              className="rounded-xl shadow-md mb-4 w-full object-cover max-h-[350px]"
            />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At iQue Ventures, we are more than just an incubator — we are your
              growth partners. Our mission is to empower visionary startups with
              the tools, mentorship, and strategic guidance necessary to transform
              bold ideas into impactful realities. With a deep focus on innovation,
              technology, and scalable solutions, we walk hand-in-hand with entrepreneurs
              to help them thrive in today’s competitive landscape.
            </p>
          </div>

          {/* Right Column */}
          <div data-aos="fade-up" data-aos-delay="250">
            <div className="mb-6 space-y-4 text-gray-700 text-sm sm:text-base">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#046c52] uppercase font-[Open_Sans]">
                  Our Vision
                </h4>
                <p className="mt-1">
                  To become a global catalyst for entrepreneurial excellence — a launchpad
                  where the world’s most daring and disruptive ideas are cultivated and
                  transformed into industry-defining ventures.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#046c52] uppercase font-[Open_Sans] mt-4">
                  Our Mission
                </h4>
                <p className="mt-1">
                  To foster a dynamic ecosystem that supports startups through mentorship,
                  funding access, strategic networking, and operational excellence. We strive
                  to build sustainable businesses that create long-term value for society and
                  the economy.
                </p>
              </div>
            </div>

            {/* Video Box */}
            <div className="relative group mt-6">
              <img
                src={aboutImage2}
                alt="Watch Video"
                className="rounded-xl w-full shadow-md object-cover max-h-[350px]"
              />
              <a
                href="https://www.instagram.com/reel/DJbFy2MJ4nU/?utm_source=ig_web_copy_link&igsh=MXhnbGYxMm1nbHg2NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-xl transition"
              >
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
