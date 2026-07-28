import React, { useState } from "react";
import { motion } from "framer-motion";
// Import Font Awesome icons
import "@fortawesome/fontawesome-free/css/all.min.css";

const infoCards = [
  {
    title: "Startup Park · Bengaluru",
    icon: "fa-solid fa-location-dot",
    text: "Total Mall, Police Station Rd, opposite Madiwala, Koramangala, Bengaluru, Karnataka 560068",
  },
  {
    title: "Call Us",
    icon: "fa-solid fa-phone",
    text: "+91 9061774448",
  },
  {
    title: "Email Us",
    icon: "fa-solid fa-envelope",
    text: "ceo@ique.ventures",
  },
  {
    title: "Open Hours",
    icon: "fa-solid fa-clock",
    text: "Mon-Sat: 9.30AM – 6.30PM",
  },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7799881108012!2d77.6201801!3d12.9218575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b75f01%3A0xd3b7950ec31e6322!2sStartup%20Park%20Bengaluru!5e0!3m2!1sen!2sin!4v1785237215369!5m2!1sen!2sin";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    window.open(`https://wa.me/9061774448?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-header-content">
          <span className="contact-label">Get in Touch</span>
          <h2>
            Let's <em>Connect</em>
          </h2>
          <p className="contact-subtitle">
            Let's build something extraordinary — reach out anytime.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* LEFT COLUMN - Info Cards */}
          <div className="contact-left">
            {/* Info Cards */}
            <div className="contact-cards-grid">
              {infoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <i className={card.icon}></i>
                  </div>
                  <div className="contact-card-content">
                    <h5 className="contact-card-title">{card.title}</h5>
                    <p className="contact-card-text">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-map"
            >
              <div className="contact-map-container">
                <iframe
                  src={MAP_EMBED_URL}
                  title="Startup Park Bengaluru Location"
                  className="contact-map-iframe"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="contact-map-footer">
                <i className="fa-solid fa-location-dot"></i>
                <span>Startup Park Bengaluru · Total Mall, opposite Madiwala Police Station</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <div className="contact-form-header">
              <h3>Send us a Message</h3>
              <p>We'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={sendWhatsAppMessage} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="contact-form-input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="contact-form-input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-form-group">
                <label>Subject</label>
                <input
                  name="subject"
                  placeholder="How can we help?"
                  className="contact-form-input"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="contact-form-textarea"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="contact-form-btn">
                <i className="fa-brands fa-whatsapp"></i>
                Send via WhatsApp
              </button>
              <p className="contact-form-note">
                We'll respond within 24 hours ✦
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          width: 100%;
          background: #0b1f24;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Header */
        .contact-header {
          padding: 120px 60px 50px;
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          color: white;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-header::after {
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

        .contact-header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          font-weight: 500;
        }

        .contact-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 8px 0 12px;
        }

        .contact-header h2 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
          letter-spacing: 0.5px;
          max-width: 500px;
        }

        /* Container */
        .contact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 60px 80px;
          background: transparent;
          box-sizing: border-box;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Left Column */
        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 20px 18px;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(125, 211, 252, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .contact-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(125, 211, 252, 0.08);
          border-radius: 12px;
          flex-shrink: 0;
          color: #7dd3fc;
          font-size: 1.1rem;
          border: 1px solid rgba(125, 211, 252, 0.06);
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-card-icon {
          background: rgba(125, 211, 252, 0.15);
          border-color: rgba(125, 211, 252, 0.15);
        }

        .contact-card-content {
          flex: 1;
          min-width: 0;
        }

        .contact-card-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 2px;
        }

        .contact-card-text {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          margin: 0;
        }

        /* Map */
        .contact-map {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .contact-map:hover {
          border-color: rgba(125, 211, 252, 0.15);
        }

        .contact-map-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .contact-map-iframe {
          width: 100%;
          height: 100%;
        }

        .contact-map-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
        }

        .contact-map-footer i {
          color: #7dd3fc;
          font-size: 0.85rem;
        }

        /* Right Column - Form */
        .contact-form-wrapper {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.3s ease;
        }

        .contact-form-wrapper:hover {
          border-color: rgba(125, 211, 252, 0.1);
        }

        .contact-form-header {
          margin-bottom: 24px;
        }

        .contact-form-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .contact-form-header p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-form-group label {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.5px;
        }

        .contact-form-input,
        .contact-form-textarea {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
          width: 100%;
        }

        .contact-form-input::placeholder,
        .contact-form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }

        .contact-form-input:focus,
        .contact-form-textarea:focus {
          border-color: rgba(125, 211, 252, 0.3);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.05);
        }

        .contact-form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #7dd3fc, #4f46e5);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          margin-top: 4px;
        }

        .contact-form-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(125, 211, 252, 0.25);
        }

        .contact-form-btn i {
          font-size: 1.2rem;
        }

        .contact-form-note {
          text-align: center;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.3);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-header {
            padding: 100px 40px 40px;
          }

          .contact-header h2 {
            font-size: 2.8rem;
          }

          .contact-container {
            padding: 40px 40px 60px;
          }

          .contact-grid {
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .contact-header {
            padding: 80px 24px 35px;
          }

          .contact-header h2 {
            font-size: 2.2rem;
          }

          .contact-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .contact-subtitle {
            font-size: 0.95rem;
          }

          .contact-container {
            padding: 30px 16px 50px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .contact-cards-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .contact-card {
            padding: 16px 14px;
          }

          .contact-card-title {
            font-size: 0.8rem;
          }

          .contact-card-text {
            font-size: 0.72rem;
          }

          .contact-form-wrapper {
            padding: 28px 20px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .contact-form-header h3 {
            font-size: 1.3rem;
          }

          .contact-map-container {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .contact-header {
            padding: 70px 16px 30px;
          }

          .contact-header h2 {
            font-size: 1.8rem;
          }

          .contact-container {
            padding: 20px 12px 40px;
          }

          .contact-cards-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .contact-card {
            padding: 14px 12px;
          }

          .contact-form-wrapper {
            padding: 20px 16px;
          }

          .contact-form-btn {
            font-size: 0.9rem;
            padding: 12px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;