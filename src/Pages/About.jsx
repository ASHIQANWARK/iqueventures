import React from "react";
import { motion } from "framer-motion";
import aboutImage1 from "../assets/images/blog-recent-4.jpg";
import aboutImage2 from "../assets/images/about-2.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Header */}
      <div className="about-header">
        <div className="about-header-content">
          <span className="about-label">About Us</span>
          <h2>
            Empowering <em>Visionaries</em>
          </h2>
          <p className="about-subtitle">
            Fueling Innovation. Building the Future.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-left"
          >
            <h3 className="about-left-title">
              Transforming Vision into Value
            </h3>
            <div className="about-image-wrapper">
              <img
                src={aboutImage1}
                alt="About iQue Ventures"
                className="about-image"
              />
            </div>
            <p className="about-text">
              At iQue Ventures, we are more than just an incubator — we are your
              growth partners. Our mission is to empower visionary startups with
              the tools, mentorship, and strategic guidance necessary to transform
              bold ideas into impactful realities. With a deep focus on innovation,
              technology, and scalable solutions, we walk hand-in-hand with entrepreneurs
              to help them thrive in today's competitive landscape.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-right"
          >
            <div className="about-info-card">
              <h4 className="about-info-title">Our Vision</h4>
              <p className="about-info-text">
                To become a global catalyst for entrepreneurial excellence — a launchpad
                where the world's most daring and disruptive ideas are cultivated and
                transformed into industry-defining ventures.
              </p>
            </div>

            <div className="about-info-card">
              <h4 className="about-info-title">Our Mission</h4>
              <p className="about-info-text">
                To foster a dynamic ecosystem that supports startups through mentorship,
                funding access, strategic networking, and operational excellence. We strive
                to build sustainable businesses that create long-term value for society and
                the economy.
              </p>
            </div>

            <div className="about-video-wrapper">
              <img
                src={aboutImage2}
                alt="Watch Video"
                className="about-video-image"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Header */
        .about-header {
          padding: 80px 60px 50px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .about-header::after {
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

        .about-header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          color: #004D5B;
        }

        .about-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          font-weight: 500;
        }

        .about-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          max-width: 700px;
          margin: 8px 0 12px;
          color: #004D5B;
        }

        .about-header h2 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .about-subtitle {
          font-size: 1.1rem;
          color: #004D5B;
          font-weight: 400;
          letter-spacing: 0.5px;
          max-width: 700px;
        }

        /* Container */
        .about-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 60px 80px;
          background: #ffffff;
          box-sizing: border-box;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          width: 100%;
        }

        /* Left Column */
        .about-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-left-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #004D5B;
          margin: 0;
        }

        .about-image-wrapper {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .about-image {
          width: 100%;
          object-fit: cover;
          max-height: 350px;
          border-radius: 16px;
          transition: transform 0.4s ease;
        }

        .about-image:hover {
          transform: scale(1.02);
        }

        .about-text {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.8;
          margin: 0;
        }

        /* Right Column */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-info-card {
          background: #f8fafc;
          padding: 24px 28px;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .about-info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 54, 64, 0.08);
          border-color: rgba(125, 211, 252, 0.2);
        }

        .about-info-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #004D5B;
          margin: 0 0 8px 0;
          letter-spacing: 0.5px;
        }

        .about-info-text {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.7;
          margin: 0;
        }

        .about-video-wrapper {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          margin-top: 4px;
        }

        .about-video-image {
          width: 100%;
          object-fit: cover;
          max-height: 300px;
          border-radius: 16px;
          transition: transform 0.4s ease;
        }

        .about-video-image:hover {
          transform: scale(1.02);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-header {
            padding: 70px 40px 40px;
          }

          .about-header h2 {
            font-size: 2.8rem;
          }

          .about-container {
            padding: 40px 40px 60px;
          }

          .about-grid {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-header {
            padding: 60px 24px 35px;
          }

          .about-header h2 {
            font-size: 2.2rem;
          }

          .about-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .about-subtitle {
            font-size: 0.95rem;
          }

          .about-container {
            padding: 30px 16px 50px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-left-title {
            font-size: 1.3rem;
          }

          .about-text {
            font-size: 0.95rem;
          }

          .about-info-card {
            padding: 20px;
          }

          .about-info-title {
            font-size: 1rem;
          }

          .about-info-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .about-header {
            padding: 50px 16px 30px;
          }

          .about-header h2 {
            font-size: 1.8rem;
          }

          .about-container {
            padding: 20px 12px 40px;
          }

          .about-grid {
            gap: 24px;
          }

          .about-left-title {
            font-size: 1.1rem;
          }

          .about-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;