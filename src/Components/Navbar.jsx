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
      className={`fixed w-full z-20 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-black/40 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Incubenation Logo" className="h-14" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/blogs" className="text-white hover:text-gray-300">Blog</Link>
          <Link to="/career" className="text-white hover:text-gray-300">Career</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/70 text-white">
          <div className="flex flex-col space-y-2 p-4">
            <Link onClick={closeMobileMenu} to="/" className="hover:text-gray-300">Home</Link>
            <Link onClick={closeMobileMenu} to="/about" className="hover:text-gray-300">About</Link>
            <Link onClick={closeMobileMenu} to="/blogs" className="hover:text-gray-300">Blog</Link>
            <Link onClick={closeMobileMenu} to="/career" className="hover:text-gray-300">Career</Link>
            <Link onClick={closeMobileMenu} to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
