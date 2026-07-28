import React from "react";
import { motion } from "framer-motion";
import svg2 from "../assets/images/svg2.svg"; // SVG background image

const pillars = [
  {
    id: 1,
    title: "Entrepreneurs",
    description: "Helping founders become confident leaders with:",
    points: [
      "Hands-on mentoring",
      "Startup-building programs",
      "Community support",
      "Co-founder matching",
    ],
  },
  {
    id: 2,
    title: "Startups",
    description: "Empowering early-stage startups to scale via:",
    points: [
      "MVP & product development",
      "Business model refinement",
      "Market entry strategies",
      "Incubation & acceleration",
    ],
  },
  {
    id: 3,
    title: "Investors",
    description: "Connecting intelligent capital with opportunities through:",
    points: [
      "Curated startups",
      "Transparent evaluations",
      "Long-term collaboration",
      "FOCO & unique models",
    ],
  },
  {
    id: 4,
    title: "Governments & Institutions",
    description: "Bridging policy and execution using:",
    points: [
      "Implementation-ready programs",
      "Public-private collaboration",
      "Educational partnerships",
      "Policy incubation",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      {/* Hero Header */}
      <div className="section-header">
        <div className="section-header-content">
          <span className="section-label">What We Do</span>
          <h2>
            Solving the <em>Real Problems</em><br />
            in the Startup Ecosystem
          </h2>
          <p className="section-subtitle">
            Empowering entrepreneurs, startups, investors, and institutions
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="cards-container">
        <div className="cards-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="pillar-card"
            >
              <div
                className="pillar-card-bg"
                style={{ backgroundImage: `url(${svg2})` }}
              />
              <div className="pillar-card-content">
                <div className="pillar-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-description">{pillar.description}</p>
                <ul className="pillar-card-list">
                  {pillar.points.map((point, i) => (
                    <li key={i}>
                      <span className="pillar-card-bullet">✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .what-we-do-section {
          width: 100%;
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          color: white;
          overflow: hidden;
        }

        /* Header Styles */
        .section-header {
          padding: 80px 60px 50px;
          background: transparent;
          color: white;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .section-header::after {
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

        .section-header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          font-weight: 500;
        }

        .section-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          max-width: 700px;
          margin: 8px 0 12px;
        }

        .section-header h2 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .section-subtitle {
          font-size: 1.1rem;
          
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        /* Cards Container */
        .cards-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 60px 80px;
          background: transparent;
          box-sizing: border-box;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }

        /* Individual Card */
        .pillar-card {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 28px 24px 24px;
          min-height: 320px;
          transition: all 0.4s ease;
          overflow: hidden;
          cursor: default;
        }

        .pillar-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(125, 211, 252, 0.2);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .pillar-card-bg {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-size: cover;
          background-position: center;
          pointer-events: none;
          border-radius: 16px;
        }

        .pillar-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .pillar-card-number {
          font-size: 0.75rem;
          font-weight: 500;
          color: #7dd3fc;
          opacity: 0.3;
          letter-spacing: 1px;
          font-feature-settings: "tnum";
          margin-bottom: 12px;
        }

        .pillar-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .pillar-card-description {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .pillar-card-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pillar-card-list li {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pillar-card-bullet {
          color: #7dd3fc;
          font-size: 0.7rem;
          opacity: 0.6;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .section-header {
            padding: 70px 40px 40px;
          }

          .section-header h2 {
            font-size: 2.8rem;
          }

          .cards-container {
            padding: 40px 40px 60px;
          }

          .pillar-card {
            min-height: 280px;
            padding: 24px 20px 20px;
          }
        }

        @media (max-width: 768px) {
          .section-header {
            padding: 60px 24px 35px;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .section-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .section-subtitle {
            font-size: 0.95rem;
          }

          .cards-container {
            padding: 30px 16px 50px;
          }

          .cards-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .pillar-card {
            min-height: 260px;
            padding: 20px 16px 18px;
          }

          .pillar-card-title {
            font-size: 1.1rem;
          }

          .pillar-card-description {
            font-size: 0.8rem;
          }

          .pillar-card-list li {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            padding: 50px 16px 30px;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .cards-container {
            padding: 20px 12px 40px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .pillar-card {
            min-height: auto;
            padding: 18px 16px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;