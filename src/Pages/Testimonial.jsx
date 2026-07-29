import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "I've seen many organizations claim to support startups, but IQUE Capital lives it. They're a driving force in the innovation space.",
    name: "Sinead Bailey",
    designation: "Volunteer",
    rating: 5,
  },
  {
    id: 2,
    text: "IQUE Capital's mentorship has truly transformed our startup's trajectory. Their insight and hands-on approach are game-changing.",
    name: "Marcus Liu",
    designation: "Founder, AgriTechX",
    rating: 5,
  },
  {
    id: 3,
    text: "I appreciate how accessible and supportive the team is. They really care about the entrepreneurs they work with.",
    name: "Rina Patel",
    designation: "Co-Founder, EcoRev",
    rating: 4,
  },
  {
    id: 4,
    text: "The best investment group we've worked with. Their support system is strong and effective.",
    name: "Daniel Gomez",
    designation: "Startup Consultant",
    rating: 5,
  },
  {
    id: 5,
    text: "They helped us pivot just in time, saving our product and our mission.",
    name: "Fatima Noor",
    designation: "CTO, MedLifeAI",
    rating: 5,
  },
  {
    id: 6,
    text: "The way IQUE Capital empowers youth startups is phenomenal. They walk the talk.",
    name: "Aarav Mehta",
    designation: "Tech Entrepreneur",
    rating: 5,
  },
  {
    id: 7,
    text: "Their commitment to innovation is inspiring. Highly recommend for early-stage founders.",
    name: "Linda Osei",
    designation: "Investor & Coach",
    rating: 5,
  },
];

const TestimonialCard = ({ text, name, designation, rating, isCenter, index }) => {
  // Generate stars based on rating
  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isCenter ? 1 : 0.5,
        scale: isCenter ? 1 : 0.9,
        zIndex: isCenter ? 10 : 1
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`
        testimonials-card
        ${isCenter ? "testimonials-card-center" : "testimonials-card-side"}
      `}
    >
      {/* Quote Icon */}
      <div className="testimonials-quote-icon">
        <Quote className="w-8 h-8 text-[#7dd3fc] opacity-20" />
      </div>

      {/* Content */}
      <div className="testimonials-card-content">
        <p className="testimonials-text">{text}</p>
        
        {/* Rating Stars */}
        <div className="testimonials-rating">
          {renderStars()}
        </div>

        {/* Author Info */}
        <div className="testimonials-author">
          <div className="testimonials-author-avatar">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="testimonials-author-name">{name}</h4>
            <p className="testimonials-author-designation">{designation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayTestimonials = () => {
    const prev = (centerIndex - 1 + testimonials.length) % testimonials.length;
    const next = (centerIndex + 1) % testimonials.length;
    return [prev, centerIndex, next];
  };

  const displayIndexes = getDisplayTestimonials();

  // Navigation dots
  const handleDotClick = (index) => {
    setCenterIndex(index);
  };

  return (
    <section className="testimonials-section">
      {/* Header */}
      <div className="testimonials-header">
        <div className="testimonials-header-content">
          <span className="testimonials-label">What People Say</span>
          <h2>
            Trusted by <em>Entrepreneurs</em>
          </h2>
          <p className="testimonials-subtitle">
            Real stories from founders, innovators, and partners who have worked with us.
          </p>
        </div>
      </div>

      {/* Cards Carousel */}
      <div className="testimonials-container">
        <div className="testimonials-carousel">
          {displayIndexes.map((index, i) => (
            <TestimonialCard
              key={testimonials[index].id}
              {...testimonials[index]}
              isCenter={index === centerIndex}
              index={i}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`testimonials-dot ${
                index === centerIndex ? "testimonials-dot-active" : ""
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Header */
        .testimonials-header {
          padding: 80px 60px 50px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .testimonials-header::after {
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

        .testimonials-header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          color: #004D5B;
        }

        .testimonials-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          font-weight: 500;
        }

        .testimonials-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          max-width: 700px;
          margin: 8px 0 12px;
          color: #004D5B;
        }

        .testimonials-header h2 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .testimonials-subtitle {
          font-size: 1.1rem;
          color: #004D5B;
          font-weight: 400;
          letter-spacing: 0.5px;
          max-width: 700px;
        }

        /* Container */
        .testimonials-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 60px 80px;
          background: #ffffff;
          box-sizing: border-box;
        }

        /* Carousel */
        .testimonials-carousel {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          min-height: 350px;
          position: relative;
          padding: 20px 0;
        }

        /* Cards */
        .testimonials-card {
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px 28px 28px;
          transition: all 0.5s ease;
          overflow: hidden;
          position: relative;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 20px rgba(0, 54, 64, 0.15);
        }

        .testimonials-card-center {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 12px 40px rgba(0, 54, 64, 0.3);
          border-color: rgba(125, 211, 252, 0.3);
        }

        .testimonials-card-side {
          transform: scale(0.9);
          opacity: 0.5;
          z-index: 1;
        }

        .testimonials-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 54, 64, 0.3);
          border-color: rgba(125, 211, 252, 0.2);
        }

        .testimonials-card-center:hover {
          transform: translateY(-4px) scale(1);
        }

        .testimonials-card-side:hover {
          transform: translateY(-4px) scale(0.9);
        }

        .testimonials-quote-icon {
          position: absolute;
          top: 16px;
          right: 20px;
          opacity: 0.15;
        }

        .testimonials-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .testimonials-text {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          min-height: 80px;
          font-style: italic;
        }

        .testimonials-rating {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .testimonials-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .testimonials-author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7dd3fc, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 1.1rem;
          color: #ffffff;
          flex-shrink: 0;
        }

        .testimonials-author-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .testimonials-author-designation {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        /* Navigation Dots */
        .testimonials-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .testimonials-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .testimonials-dot:hover {
          background: #7dd3fc;
          transform: scale(1.1);
        }

        .testimonials-dot-active {
          background: #7dd3fc;
          width: 32px;
          border-radius: 5px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .testimonials-header {
            padding: 70px 40px 40px;
          }

          .testimonials-header h2 {
            font-size: 2.8rem;
          }

          .testimonials-container {
            padding: 30px 40px 60px;
          }

          .testimonials-carousel {
            min-height: 320px;
            gap: 16px;
          }

          .testimonials-card {
            max-width: 340px;
            padding: 28px 24px 24px;
          }

          .testimonials-card-side {
            display: none;
          }

          .testimonials-carousel {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .testimonials-header {
            padding: 60px 24px 35px;
          }

          .testimonials-header h2 {
            font-size: 2.2rem;
          }

          .testimonials-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .testimonials-subtitle {
            font-size: 0.95rem;
          }

          .testimonials-container {
            padding: 20px 16px 50px;
          }

          .testimonials-carousel {
            min-height: 300px;
            gap: 12px;
          }

          .testimonials-card {
            max-width: 100%;
            padding: 24px 20px 20px;
          }

          .testimonials-card-side {
            display: none;
          }

          .testimonials-text {
            font-size: 0.95rem;
            min-height: 60px;
          }

          .testimonials-author-name {
            font-size: 0.85rem;
          }

          .testimonials-author-designation {
            font-size: 0.7rem;
          }

          .testimonials-author-avatar {
            width: 38px;
            height: 38px;
            font-size: 0.95rem;
          }

          .testimonials-quote-icon svg {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-header {
            padding: 50px 16px 30px;
          }

          .testimonials-header h2 {
            font-size: 1.8rem;
          }

          .testimonials-container {
            padding: 15px 12px 40px;
          }

          .testimonials-carousel {
            min-height: 280px;
          }

          .testimonials-card {
            padding: 20px 16px 18px;
          }

          .testimonials-text {
            font-size: 0.9rem;
            min-height: 50px;
          }

          .testimonials-dots {
            margin-top: 30px;
            gap: 6px;
          }

          .testimonials-dot {
            width: 8px;
            height: 8px;
          }

          .testimonials-dot-active {
            width: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;