import React from "react";
import CountUp from "react-countup";
import statsImage from "../assets/images/stats-img.svg";
import { Smile, BookOpen, Headphones, Users } from "lucide-react";

const stats = [
  {
    icon: <Smile size={36} className="text-black font-extrabold" />,
    value: 100,
    label: "Happy Clients",
  },
  {
    icon: <BookOpen size={36} className="text-black font-extrabold" />,
    value: 35,
    label: "Projects",
  },
  {
    icon: <Headphones size={36} className="text-black font-extrabold" />,
    value: 24,
    label: "Hours of Support / Day", // clarified label
    suffix: "/7", // shown after the number
  },
  {
    icon: <Users size={36} className="text-black font-extrabold" />,
    value: 32,
    label: "Hard Workers",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-5/12" data-aos="fade-up">
            <img src={statsImage} alt="Stats" className="w-full" />
          </div>

          {/* Stats Grid */}
          <div
            className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {stats.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#046c52]">
                    <CountUp end={item.value} duration={2} suffix={item.suffix || ""} />
                  </h3>
                  <p className="text-gray-700">
                    <strong>{item.label}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
