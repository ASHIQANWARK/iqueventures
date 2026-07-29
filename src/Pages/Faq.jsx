import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does iQue Ventures offer to early-stage startups?",
    answer:
      "We build a thriving startup ecosystem by providing strategic mentorship, industry networking, investor access, and the foundational support required to turn your idea into a scalable business. We're ecosystem architects, not just incubators.",
  },
  {
    question: "Do you provide funding to startups?",
    answer:
      "While we don't offer direct capital, we act as a bridge connecting startups with the right angel investors, VCs, and funding partners through our extensive ecosystem network.",
  },
  {
    question: "What industries or sectors does iQue focus on?",
    answer:
      "iQue Ventures is sector-agnostic but places a strong emphasis on innovative, scalable, and impact-driven startups across technology, consumer products, health, education, and sustainability. We're building an ecosystem that spans across industries.",
  },
  {
    question: "How can I be part of the iQue ecosystem?",
    answer:
      "You can submit your pitch or startup details through our website's contact or application form. Shortlisted startups will be contacted for further discussions. We're always looking for passionate founders to join our growing ecosystem.",
  },
  {
    question: "Is there a cost involved to join the ecosystem?",
    answer:
      "Our ecosystem support is typically equity-based, meaning we take a small stake in exchange for our resources, guidance, and network access. There are no upfront fees to be part of our ecosystem.",
  },
  {
    question: "What makes iQue Ventures different from other incubators?",
    answer:
      "We're not just an incubator — we're ecosystem builders. Our founder-first approach, long-term commitment, and ecosystem-building mindset set us apart. We create a collaborative environment where startups, investors, mentors, and industry experts come together to build India's next generation of successful ventures.",
  },
  {
    question: "What is a startup ecosystem and why does it matter?",
    answer:
      "A startup ecosystem is a network of interconnected stakeholders — founders, investors, mentors, service providers, and support organizations — that work together to foster innovation and growth. At iQue Ventures, we believe that building a strong ecosystem creates better outcomes for everyone involved, leading to more successful, sustainable ventures.",
  },
  {
    question: "How does iQue Ventures build the ecosystem?",
    answer:
      "We build the ecosystem through strategic partnerships, community events, mentorship programs, and creating meaningful connections. We bring together the right people, resources, and opportunities to help startups thrive in a supportive, collaborative environment.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Header */}
      <div className="faq-header">
        <div className="faq-header-content">
          <span className="faq-label">Got Questions?</span>
          <h2>
            Building India's <em>Startup Ecosystem</em>
          </h2>
          <p className="faq-subtitle">
            Explore answers to the most common questions about iQue Ventures — 
            from ecosystem support to funding assistance and our founder-first philosophy.
          </p>
        </div>
      </div>

      {/* FAQ Container */}
      <div className="faq-container">
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className={`faq-item ${activeIndex === index ? "faq-item-active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <div className="faq-question-content">
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="faq-question-text">{faq.question}</span>
                </div>
                <span className="faq-question-icon">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <div className="faq-answer-icon">
                        <HelpCircle className="w-4 h-4 text-[#7dd3fc]" />
                      </div>
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Header */
        .faq-header {
          padding: 80px 60px 50px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .faq-header::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(125, 211, 252, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .faq-header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          color: #004D5B;
        }

        .faq-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          font-weight: 500;
        }

        .faq-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          max-width: 700px;
          margin: 8px 0 12px;
          color: #004D5B;
        }

        .faq-header h2 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .faq-subtitle {
          font-size: 1.1rem;
          color: #004D5B;
          font-weight: 400;
          letter-spacing: 0.5px;
          max-width: 700px;
        }

        /* Container */
        .faq-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 60px 80px;
          background: #ffffff;
          box-sizing: border-box;
        }

        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        /* FAQ Items */
        .faq-item {
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(0, 54, 64, 0.08);
        }

        .faq-item:hover {
          border-color: rgba(125, 211, 252, 0.2);
          box-shadow: 0 4px 20px rgba(0, 54, 64, 0.15);
        }

        .faq-item-active {
          border-color: rgba(125, 211, 252, 0.3);
          box-shadow: 0 4px 24px rgba(0, 54, 64, 0.2);
        }

        .faq-question {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #ffffff;
          font-family: inherit;
          text-align: left;
          transition: all 0.3s ease;
          gap: 16px;
        }

        .faq-question:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .faq-question-content {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }

        .faq-question-number {
          font-size: 0.8rem;
          font-weight: 500;
          color: #7dd3fc;
          opacity: 0.4;
          min-width: 32px;
          font-feature-settings: "tnum";
          flex-shrink: 0;
        }

        .faq-question-text {
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.4;
          color: #ffffff;
          flex: 1;
        }

        .faq-question-icon {
          color: #7dd3fc;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(125, 211, 252, 0.1);
          transition: all 0.3s ease;
        }

        .faq-item:hover .faq-question-icon {
          background: rgba(125, 211, 252, 0.2);
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 24px 20px 24px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .faq-answer-icon {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .faq-answer-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .faq-header {
            padding: 70px 40px 40px;
          }

          .faq-header h2 {
            font-size: 2.8rem;
          }

          .faq-container {
            padding: 30px 40px 60px;
          }

          .faq-question {
            padding: 18px 20px;
          }

          .faq-question-text {
            font-size: 0.95rem;
          }

          .faq-answer {
            padding: 0 20px 18px 20px;
          }
        }

        @media (max-width: 768px) {
          .faq-header {
            padding: 60px 24px 35px;
          }

          .faq-header h2 {
            font-size: 2.2rem;
          }

          .faq-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .faq-subtitle {
            font-size: 0.95rem;
          }

          .faq-container {
            padding: 20px 16px 50px;
          }

          .faq-grid {
            gap: 10px;
          }

          .faq-question {
            padding: 16px 16px;
            gap: 12px;
          }

          .faq-question-content {
            gap: 12px;
          }

          .faq-question-number {
            font-size: 0.7rem;
            min-width: 24px;
          }

          .faq-question-text {
            font-size: 0.9rem;
          }

          .faq-question-icon {
            width: 24px;
            height: 24px;
          }

          .faq-question-icon svg {
            width: 16px;
            height: 16px;
          }

          .faq-answer {
            padding: 0 16px 16px 16px;
            gap: 10px;
          }

          .faq-answer-text {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .faq-header {
            padding: 50px 16px 30px;
          }

          .faq-header h2 {
            font-size: 1.8rem;
          }

          .faq-container {
            padding: 15px 12px 40px;
          }

          .faq-question {
            padding: 14px 14px;
          }

          .faq-question-text {
            font-size: 0.85rem;
          }

          .faq-answer {
            padding: 0 14px 14px 14px;
          }

          .faq-answer-text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;