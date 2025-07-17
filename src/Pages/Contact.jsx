import React, { useState } from "react";
import { motion } from "framer-motion";

const infoCards = [
  {
    title: "Address",
    icon: "fas fa-map-marker-alt",
    text: "Door No: 84, 3rd Cross Rd, KHB Block, Koramangala, Bengaluru, Karnataka 560095",
  },
  {
    title: "Call Us",
    icon: "fas fa-phone-alt",
    text: "+91 9061774448",
  },
  {
    title: "Email Us",
    icon: "fas fa-envelope-open-text",
    text: "ceo@ique.ventures",
  },
  {
    title: "Open Hours",
    icon: "fas fa-clock",
    text: "Mon-Sat: 9.30AM - 6.30PM",
  },
];

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#005c6d] overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center uppercase mb-4">
          Contact Us
        </h2>
        <p className="text-base sm:text-xl text-gray-300 text-center mb-12">
          Reach out to us for any assistance or queries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Contact Info */}
          <div className="space-y-6 w-full">
            {infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="w-full flex flex-col sm:flex-row items-start p-6 rounded-xl shadow-xl bg-white bg-opacity-20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <div className="text-2xl text-[#046c52] mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <i className={card.icon}></i>
                </div>
                <div>
                  <h5 className="text-[#046c52] font-semibold text-lg">{card.title}</h5>
                  <p className="text-[#046c52] text-sm sm:text-base">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Contact Form */}
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={sendWhatsAppMessage} className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#046c52]"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#046c52]"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#046c52]"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#046c52]"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#046c52] hover:bg-[#034336] text-white rounded-lg font-semibold transition-colors"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
