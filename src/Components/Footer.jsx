import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import Logo from "../assets/images/iQue-dp-2-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/share/16ZDHdpQ4J/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/ique.ventures?igsh=bWI5eWx0Z2dqajVz", label: "Instagram" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/ique-international/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/iqueventures", label: "Twitter" },
    { icon: FaYoutube, href: "https://youtube.com/@iqueventures", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Terms of Service", path: "/termsandconditions" },
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Refund Policy", path: "/refundpolicy" },
  ];

  // Updated contact info with new Startup Park address
  const contactInfo = [
    { 
      icon: FaMapMarkerAlt, 
      text: "Total Mall, Police Station Rd, opposite Madiwala, Koramangala, Bengaluru, Karnataka 560068",
      isAddress: true 
    },
    { icon: FaPhoneAlt, text: "+91 9061774448" },
    { icon: FaEnvelope, text: "ceo@ique.ventures", isEmail: true },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#003640] via-[#00505e] to-[#00222a] text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={Logo} alt="Ique Ventures Logo" className="h-14 object-contain hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering ventures through innovation, incubation, and impactful collaborations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <social.icon size={18} className="text-white hover:text-cyan-300 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-5 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-1"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with new address */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-5 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-1"></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 3 }}
                >
                  <item.icon className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                  {item.isEmail ? (
                    <a href={`mailto:${item.text}`} className="hover:text-cyan-300 transition-colors">
                      {item.text}
                    </a>
                  ) : item.isAddress ? (
                    <span className="leading-relaxed">{item.text}</span>
                  ) : (
                    <a href={`tel:${item.text}`} className="hover:text-cyan-300 transition-colors">
                      {item.text}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / CTA Section */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-5 relative">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-1"></span>
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events and opportunities.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 text-[#003640] font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 mt-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} <strong className="text-white">Ique Ventures</strong>. All rights reserved.
            </p>
            <p className="text-xs">
              Designed with <span className="text-red-400">❤</span> by IT Team Ique Ventures
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="/privacypolicy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/termsandconditions" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/refundpolicy" className="hover:text-white transition-colors">Refund</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;