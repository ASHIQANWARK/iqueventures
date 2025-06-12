import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Logo from "../assets/images/iQue-dp-2-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#006471] to-black text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="IncubeNation Logo" className="h-12 object-contain" />
            </Link>
            <p className="text-sm text-gray-300">
              Empowering ventures through innovation, incubation, and impactful collaborations.
            </p>
            <div className="flex space-x-4 mt-4">
              
              <a href="https://www.facebook.com/share/16ZDHdpQ4J/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/ique.ventures?igsh=bWI5eWx0Z2dqajVz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/ique-international/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/termsandconditions" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/refundpolicy" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-300">
              Door No: 84, 3rd Cross Rd,<br />
              KHB Block, Koramangala,<br />
              Bengaluru, Karnataka 560095
            </p>
            <p className="mt-3 text-sm text-gray-300">
              <strong>Phone:</strong> +91 9061774448
            </p>
            <p className="text-sm text-gray-300">
              <strong>Email:</strong>{" "}
              <a href="mailto:ceo@ique.ventures" className="text-[#ffab00] hover:underline">
                ceo@ique.ventures
              </a>
            </p>
          </div>

          {/* Google Map (same row) */}
          <div className="w-full">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
              width="100%"
              height="180"
              className="rounded-lg shadow-lg w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 mt-10">
          <p>&copy; 2025 <strong className="text-white">Ique Ventures</strong>. All rights reserved.</p>
          <p className="mt-1">Designed by IT Team Ique Ventures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
