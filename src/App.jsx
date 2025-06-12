import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Page components
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsandConditions";
import RefundPolicy from "./Pages/Refundpolicy";
import Blogs from "./Pages/Blog";

const App = () => {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        {/* Optional: Add Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/career" element={<Career/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
