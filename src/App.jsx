import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

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
import BlogPage from "./Pages/Blog";
import BlogPost from "./Pages/Blogpost";

// Wrapper component to use hooks
const AppContent = () => {
  const navigate = useNavigate();
  const [showBlogPost, setShowBlogPost] = useState(false);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);

  // Navigation function using React Router
  const navigateTo = (path) => {
    navigate(path);
  };

  // Handle blog post click from BlogPage
  const handleBlogPostClick = (index) => {
    setSelectedBlogIndex(index);
    setShowBlogPost(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to blog list
  const handleBackToBlogs = () => {
    setShowBlogPost(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* About Route */}
        <Route path="/about" element={<About />} />
        
        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Career Route */}
        <Route path="/career" element={<Career />} />
        
        {/* Blog Routes - Insights */}
        <Route 
          path="/blogs" 
          element={
            showBlogPost ? (
              <BlogPost 
                index={selectedBlogIndex} 
                navigateTo={navigateTo} 
                onBack={handleBackToBlogs}
              />
            ) : (
              <BlogPage 
                navigateTo={navigateTo} 
                onPostClick={handleBlogPostClick}
                showBlogPost={showBlogPost}
              />
            )
          } 
        />
        
        {/* Privacy Policy Route */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        
        {/* Terms & Conditions Route */}
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        
        {/* Refund Policy Route */}
        <Route path="/refundpolicy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;