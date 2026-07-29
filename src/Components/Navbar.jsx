import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import logo from "../assets/images/iQue-dp-2-white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Insights", path: "/blogs" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#003640]/95 via-[#00505e]/95 to-[#003640]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/5"
          : "bg-gradient-to-r from-[#003640]/80 via-[#00505e]/80 to-[#003640]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <Link to="/">
            <img src={logo} alt="iQue Ventures" className="h-10 object-contain" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block ml-4">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gradient-to-b from-[#003640]/98 to-[#00505e]/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    onClick={closeMobileMenu}
                    to={link.path}
                    className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
                  >
                    <span className="font-medium">{link.name}</span>
                    <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-2 border-t border-white/10"
              >
                <Link
                  onClick={closeMobileMenu}
                  to="/contact"
                  className="flex items-center justify-center w-full py-3 text-sm font-semibold text-[#003640] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;