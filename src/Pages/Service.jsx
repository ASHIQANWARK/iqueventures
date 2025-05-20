import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave, FaLightbulb, FaChartLine, FaHandsHelping } from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/contact");
  };

  return (
    <div className="px-8 py-12 md:flex justify-between items-start bg-[#0c3e49] text-gray-800">
      {/* Left Section - Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
        <div className="p-6 shadow-lg rounded-xl bg-teal-400">
          <div className="text-purple-700 text-3xl mb-4"><FaMoneyBillWave /></div>
          <h3 className="text-lg font-semibold text-gray-900">Financial Investment</h3>
          <p className="text-sm text-gray-600 mt-2">Fuels startup growth with strategic financial backing.</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <div className="text-green-600 text-3xl mb-4"><FaLightbulb /></div>
          <h3 className="text-lg font-semibold text-gray-900">Strategic Guidance</h3>
          <p className="text-sm text-gray-600 mt-2">Guides startups to success through strategic insights.</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <div className="text-teal-600 text-3xl mb-4"><FaChartLine /></div>
          <h3 className="text-lg font-semibold text-gray-900">Exit Strategy</h3>
          <p className="text-sm text-gray-600 mt-2">Maximizes returns with expert exit strategies.</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-teal-400">
          <div className="text-purple-700 text-3xl mb-4"><FaHandsHelping /></div>
          <h3 className="text-lg font-semibold text-gray-900">Advising Startups</h3>
          <p className="text-sm text-gray-600 mt-2">Mentors startups to thrive and excel.</p>
        </div>
      </div>

      {/* Right Section - Description and Apply */}
      <div className="mt-12 md:mt-0 md:ml-12 max-w-xl">
        <p className="text-white uppercase tracking-widest font-semibold text-md mb-2">What we do</p>
        <h2 className="text-3xl md:text-4xl  text-teal-300 mb-4 leading-snug font-[Open_Sans] uppercase">
          Register as a Startup / Business
        </h2>
        <p className="text-white mb-6 text-lg">
          Are you a passionate entrepreneur with a groundbreaking idea or a business? IQUE Capital is your launchpad
          to success. Register your startup today to access the tools, mentorship, and funding required to turn your
          vision into a thriving reality.
        </p>
        <div className="text-lg text-white mb-6">
          <p><span className="text-green-600 mr-2">✔</span> Building an idea</p>
          <p><span className="text-green-600 mr-2">✔</span> Networking</p>
          <p><span className="text-green-600 mr-2">✔</span> Scaling up</p>
          <p><span className="text-green-600 mr-2">✔</span> Selling franchises/distribution</p>
          <p><span className="text-green-600 mr-2">✔</span> Investments / Business loans</p>
          <p><span className="text-green-600 mr-2">✔</span> Market study</p>
          <p><span className="text-green-600 mr-2">✔</span> Making your business professional & legal</p>
          <p><span className="text-green-600 mr-2">✔</span> Marketing</p>
        </div>

        <button
          onClick={handleApplyClick}
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Services;
