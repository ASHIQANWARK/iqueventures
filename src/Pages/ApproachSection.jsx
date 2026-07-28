import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BarChart2, Globe2, Users } from "lucide-react";
import svg2 from "../assets/images/svg2.svg";

const ApproachSection = () => {
  const approachItems = [
    {
      icon: <Lightbulb className="text-[#7dd3fc] w-8 h-8" />,
      title: "Problem-centric",
      text: "We identify gaps, pain points, and inefficiencies in each of the 4 pillars.",
    },
    {
      icon: <BarChart2 className="text-[#7dd3fc] w-8 h-8" />,
      title: "Data-driven",
      text: "We analyze data deeply and use it to build our project models.",
    },
    {
      icon: <Globe2 className="text-[#7dd3fc] w-8 h-8" />,
      title: "Scalable across regions",
      text: "Solutions designed to scale regionally and globally with impact.",
    },
    {
      icon: <Users className="text-[#7dd3fc] w-8 h-8" />,
      title: "Built with collaboration",
      text: "All projects are created in collaboration with domain experts.",
    },
  ];

  return (
    <section className="approach-section">
      {/* Header */}
      <div className="approach-header">
        <div className="approach-header-content">
          <span className="approach-label">Our Approach</span>
          <h2>
            Project-Driven <em>Solutions</em>
          </h2>
          <p className="approach-subtitle">
            We identify gaps, pain points, and inefficiencies in each of the 4 pillars—then
            design real-world projects and scalable models to solve them.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="approach-container">
        <div className="approach-grid">
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="approach-card"
            >
              <div
                className="approach-card-bg"
                style={{ backgroundImage: `url(${svg2})` }}
              />
              <div className="approach-card-content">
                <div className="approach-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="approach-card-icon">{item.icon}</div>
                <h3 className="approach-card-title">{item.title}</h3>
                <p className="approach-card-text">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .approach-section {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Header */
        .approach-header {
          padding: 80px 60px 50px;
          
          color: white;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .approach-header::after {
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

        .approach-header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          color: #004D5B;
        }

        .approach-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          font-weight: 500;
        }

        .approach-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          max-width: 700px;
          margin: 8px 0 12px;
          color: #004D5B;
        }

        .approach-header h2 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .approach-subtitle {
          font-size: 1.1rem;
          color: #004D5B;
          font-weight: 400;
          letter-spacing: 0.5px;
          max-width: 700px;
        }

        /* Container */
        .approach-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 60px 80px;
          background: #ffffff;
          box-sizing: border-box;
        }

        .approach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }

        /* Cards */
        .approach-card {
          position: relative;
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px 24px 28px;
          min-height: 300px;
          transition: all 0.4s ease;
          overflow: hidden;
          cursor: default;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .approach-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 54, 64, 0.3);
          border-color: rgba(125, 211, 252, 0.3);
        }

        .approach-card-bg {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-size: cover;
          background-position: center;
          pointer-events: none;
          border-radius: 16px;
        }

        .approach-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .approach-card-number {
          font-size: 0.7rem;
          font-weight: 500;
          color: #7dd3fc;
          opacity: 0.4;
          letter-spacing: 1px;
          font-feature-settings: "tnum";
          margin-bottom: 16px;
        }

        .approach-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: rgba(125, 211, 252, 0.1);
          border-radius: 16px;
          margin-bottom: 16px;
          border: 1px solid rgba(125, 211, 252, 0.1);
          transition: all 0.3s ease;
        }

        .approach-card:hover .approach-card-icon {
          background: rgba(125, 211, 252, 0.2);
          border-color: rgba(125, 211, 252, 0.2);
          transform: scale(1.05);
        }

        .approach-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .approach-card-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .approach-header {
            padding: 70px 40px 40px;
          }

          .approach-header h2 {
            font-size: 2.8rem;
          }

          .approach-container {
            padding: 40px 40px 60px;
          }

          .approach-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .approach-card {
            min-height: 260px;
            padding: 28px 20px 24px;
          }
        }

        @media (max-width: 768px) {
          .approach-header {
            padding: 60px 24px 35px;
          }

          .approach-header h2 {
            font-size: 2.2rem;
          }

          .approach-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .approach-subtitle {
            font-size: 0.95rem;
          }

          .approach-container {
            padding: 30px 16px 50px;
          }

          .approach-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .approach-card {
            min-height: 220px;
            padding: 20px 16px 18px;
          }

          .approach-card-title {
            font-size: 1rem;
          }

          .approach-card-text {
            font-size: 0.8rem;
          }

          .approach-card-icon {
            width: 52px;
            height: 52px;
          }

          .approach-card-icon svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .approach-header {
            padding: 50px 16px 30px;
          }

          .approach-header h2 {
            font-size: 1.8rem;
          }

          .approach-container {
            padding: 20px 12px 40px;
          }

          .approach-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .approach-card {
            min-height: auto;
            padding: 18px 16px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default ApproachSection;