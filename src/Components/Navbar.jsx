import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-black/60 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 bg-black/30 rounded-full px-6 py-2 border border-teal-500">
          <Link to="/" className="text-white hover:text-cyan-300">Home</Link>
          <Link to="/about" className="text-white hover:text-cyan-300">About Us</Link>
          <Link to="/blogs" className="text-white hover:text-cyan-300">Blogs</Link>
          <Link to="/career" className="text-white hover:text-cyan-300">Careers</Link>
          <Link to="/contact" className="text-white hover:text-cyan-300">Contact Us</Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#2effb5] text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-300 transition"
          >
            Get A Quote
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/90 text-white transition-all">
          <div className="flex flex-col space-y-4 p-6">
            <Link onClick={closeMobileMenu} to="/" className="hover:text-cyan-300">Home</Link>
            <Link onClick={closeMobileMenu} to="/about" className="hover:text-cyan-300">About</Link>
            <Link onClick={closeMobileMenu} to="/blogs" className="hover:text-cyan-300">Blogs</Link>
            <Link onClick={closeMobileMenu} to="/career" className="hover:text-cyan-300">Careers</Link>
            <Link onClick={closeMobileMenu} to="/contact" className="hover:text-cyan-300">Contact Us</Link>
            <Link
              onClick={closeMobileMenu}
              to="/contact"
              className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded-full text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
