import React from "react";
import { BLOGS } from "../data/blogData";

const BlogPost = ({ index, navigateTo, onBack }) => {
  // Get the blog data based on index
  const blog = BLOGS[index];

  // If no blog found, show not found message
  if (!blog) {
    return (
      <div className="blog-post-not-found">
        <h2>Post not found</h2>
        <button onClick={onBack} className="blog-back-btn">
          ← Back to Insights
        </button>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      {/* Header */}
      <div className="blog-post-header">
        <div className="blog-post-header-content">
          <span className="blog-post-tag">{blog.tag}</span>
          <h1 className="blog-post-title">{blog.title}</h1>
          <div className="blog-post-divider"></div>
          <div className="blog-post-meta">
            <span>{blog.date}</span>
            <span className="blog-post-meta-separator">·</span>
            <span>by Shafi Shoukath</span>
            <span className="blog-post-meta-separator">·</span>
            <span>iQue Ventures Insights</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="blog-post-body">
        <button onClick={onBack} className="blog-back">
          ← Back to Insights
        </button>
        
        {/* Featured Image */}
        <div className="blog-post-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        
        {/* Content */}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

        {/* CTA Box */}
        <div className="blog-post-cta-box">
          <div className="blog-post-cta-bar"></div>
          <div className="blog-post-cta-content">
            <div className="blog-post-cta-label">iQue Ventures</div>
            <h3 className="blog-post-cta-title">Start Your Journey Today</h3>
            <p className="blog-post-cta-text">
              Connect with India's most promising startups and turn your vision into reality.
            </p>
            <button 
              onClick={() => navigateTo('/contact')} 
              className="blog-post-cta-btn"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .blog-post-page {
          background: #0b1f24;
          color: #e5e7eb;
          min-height: 100vh;
        }

        .blog-post-not-found {
          padding: 120px 60px;
          text-align: center;
          color: #e5e7eb;
          background: #0b1f24;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .blog-post-not-found h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .blog-post-not-found .blog-back-btn {
          color: #7dd3fc;
          text-decoration: none;
          background: transparent;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding: 10px 20px;
          transition: all 0.3s ease;
        }

        .blog-post-not-found .blog-back-btn:hover {
          color: #ffffff;
          transform: translateX(-4px);
        }

        .blog-post-header {
          padding: 120px 60px 60px;
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          color: white;
        }

        .blog-post-header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .blog-post-tag {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #7dd3fc;
          background: rgba(125, 211, 252, 0.1);
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(125, 211, 252, 0.15);
          margin-bottom: 20px;
        }

        .blog-post-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .blog-post-divider {
          width: 40px;
          height: 3px;
          background: #7dd3fc;
          margin: 16px 0;
        }

        .blog-post-meta {
          font-size: 0.9rem;
          color: #9ca3af;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }

        .blog-post-meta-separator {
          margin: 0 6px;
          color: #4a5568;
        }

        .blog-post-body {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 60px 80px;
        }

        .blog-back {
          display: inline-flex;
          align-items: center;
          color: #7dd3fc;
          cursor: pointer;
          margin-bottom: 40px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          padding: 8px 0;
          text-decoration: none;
          background: transparent;
          border: none;
          font-family: inherit;
        }

        .blog-back:hover {
          color: #ffffff;
          transform: translateX(-4px);
        }

        .blog-post-image {
          margin: 0 -60px 40px;
          border-radius: 12px;
          overflow: hidden;
        }

        .blog-post-image img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: cover;
          display: block;
        }

        .blog-post-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #d1d5db;
        }

        .blog-post-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .blog-post-content p {
          margin-bottom: 1.2rem;
        }

        .blog-post-content strong {
          color: #7dd3fc;
        }

        .blog-post-content .blog-post-pullquote {
          font-size: 1.4rem;
          font-weight: 600;
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          border-left: 4px solid #7dd3fc;
          background: rgba(125, 211, 252, 0.05);
          border-radius: 0 8px 8px 0;
          color: #e5e7eb;
          font-style: italic;
          line-height: 1.6;
        }

        .blog-post-cta-box {
          margin-top: 60px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        .blog-post-cta-bar {
          height: 4px;
          background: linear-gradient(90deg, #7dd3fc, #4f46e5);
        }

        .blog-post-cta-content {
          padding: 40px;
          text-align: center;
        }

        .blog-post-cta-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #7dd3fc;
          margin-bottom: 8px;
        }

        .blog-post-cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .blog-post-cta-text {
          color: #9ca3af;
          margin-bottom: 24px;
        }

        .blog-post-cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #7dd3fc, #4f46e5);
          color: #ffffff;
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-family: inherit;
        }

        .blog-post-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(125, 211, 252, 0.25);
        }

        @media (max-width: 768px) {
          .blog-post-header {
            padding: 100px 24px 40px;
          }

          .blog-post-title {
            font-size: 2rem;
          }

          .blog-post-meta {
            font-size: 0.8rem;
            flex-wrap: wrap;
          }

          .blog-post-body {
            padding: 20px 20px 60px;
          }

          .blog-post-image {
            margin: 0 -20px 30px;
          }

          .blog-post-content {
            font-size: 1rem;
          }

          .blog-post-content h2 {
            font-size: 1.4rem;
          }

          .blog-post-content .blog-post-pullquote {
            font-size: 1.1rem;
            padding: 1rem 1.2rem;
          }

          .blog-post-cta-content {
            padding: 24px;
          }

          .blog-post-cta-title {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .blog-post-title {
            font-size: 1.6rem;
          }

          .blog-post-meta {
            font-size: 0.7rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }

          .blog-post-meta-separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;