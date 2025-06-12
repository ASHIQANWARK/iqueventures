import React from "react";
import CountUp from "react-countup";
import statsImage from "../assets/images/stats-img.svg";
import { Smile, BookOpen, Headphones, Users } from "lucide-react";

const stats = [
  {
    icon: <Smile size={36} className="text-black" />,
    value: 100,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: <BookOpen size={36} className="text-black" />,
    value: 35,
    label: "Projects",
    suffix: "+",
  },
  {
    icon: <Headphones size={36} className="text-black" />,
    value: 24,
    label: "Hours of Support / Day",
    suffix: "/7",
  },
  {
    icon: <Users size={36} className="text-black" />,
    value: 32,
    label: "Hard Workers",
    suffix: "+",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Stats Grid */}
          <div
            className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {stats.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#046c52]">
                    <CountUp end={item.value} duration={2} suffix={item.suffix} />
                  </h3>
                  <p className="text-gray-700">
                    <strong>{item.label}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-5/12" data-aos="fade-up">
            <img src={statsImage} alt="Stats" className="w-full max-w-sm mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
