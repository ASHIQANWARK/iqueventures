import React, { useState } from "react";

const faqs = [
  {
    question: "What does iQue Ventures offer to early-stage startups?",
    answer:
      "We provide hands-on incubation, strategic mentorship, industry networking, investor access, and the foundational support required to turn your idea into a scalable business.",
  },
  {
    question: "Do you provide funding to startups?",
    answer:
      "While we don't offer direct capital, we help connect startups with the right angel investors, VCs, and funding partners through our extensive network.",
  },
  {
    question: "What industries or sectors does iQue focus on?",
    answer:
      "iQue Ventures is sector-agnostic but places a strong emphasis on innovative, scalable, and impact-driven startups across technology, consumer products, health, education, and sustainability.",
  },
  {
    question: "How can I apply to be incubated by iQue Ventures?",
    answer:
      "You can submit your pitch or startup details through our website’s contact or application form. Shortlisted startups will be contacted for further discussions.",
  },
  {
    question: "Is there a cost involved to join the incubation program?",
    answer:
      "Our support is typically equity-based, meaning we take a small stake in exchange for our resources and guidance. There are no upfront fees.",
  },
  {
    question: "What makes iQue Ventures different from other incubators?",
    answer:
      "Our founder-first approach, long-term commitment, and ecosystem-building mindset set us apart. We're not just partners — we’re your co-builders in success.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#011c17] text-white font-[Open_Sans]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column */}
          <div className="md:w-1/3" data-aos="fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-teal-400">Frequently Asked </span>
              <span className="text-white">Questions</span>
            </h3>
            <p className="text-gray-300">
              Explore answers to the most common questions about iQue Ventures — from incubation support to funding assistance and our founder-first philosophy.
            </p>
          </div>

          {/* Right column */}
          <div className="md:w-2/3 space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-teal-600 rounded-lg p-4 transition-all duration-300 ${
                  activeIndex === index ? "bg-[#062f28]" : "bg-[#031a15]"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex items-start gap-2">
                    <span className="text-teal-400">{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-teal-400">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-3 text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
