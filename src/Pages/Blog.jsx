import React from "react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogData";

const Blog = () => {
  return (
    <div className="blog-page-wrapper">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="blog-hero-content">
          <div className="section-label">Insights & Stories</div>
          <h1>India's <em>Startup</em><br />Story. Told Right.</h1>
          <p className="blog-hero-author">by Shafi Shoukath</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid-container">
        <div className="blog-grid">
          {BLOGS.map((blog, index) => (
            <Link 
              to={`/blog/${blog.slug}`} 
              key={blog.id} 
              className="blog-row"
            >
              <div className="blog-row-number">
                <span className="blog-row-num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="blog-row-content">
                <div className="blog-row-tag-wrapper">
                  <span className="blog-row-tag">{blog.tag}</span>
                </div>
                <div className="blog-row-title">{blog.title}</div>
                <div className="blog-row-excerpt">{blog.excerpt}</div>
                <div className="blog-row-author">{blog.author || "Shafi Shoukath"}</div>
              </div>
              <div className="blog-row-right">
                <span className="blog-row-date">{blog.date}</span>
                <span className="blog-row-cta">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        /* Reset and base */
        .blog-page-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          background: #0b1f24;
        }

        .blog-hero {
          width: 100%;
          padding: 120px 60px 60px;
          background: linear-gradient(135deg, #003640 0%, #00505e 100%);
          color: white;
          min-height: 35vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          margin: 0;
          box-sizing: border-box;
        }

        .blog-hero::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(125, 211, 252, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .blog-hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .blog-hero .section-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #7dd3fc;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .blog-hero h1 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          max-width: 700px;
          margin-bottom: 8px;
        }

        .blog-hero h1 em {
          font-style: italic;
          color: #7dd3fc;
        }

        .blog-hero-author {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 12px;
          font-weight: 400;
          letter-spacing: 1px;
        }

        .blog-grid-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 60px 80px;
          background: #0b1f24;
          box-sizing: border-box;
        }

        .blog-grid {
          display: flex;
          flex-direction: column;
          gap: 2px;
          width: 100%;
        }

        .blog-row {
          display: grid;
          grid-template-columns: 60px 1fr 160px;
          gap: 16px;
          padding: 20px 24px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          align-items: start;
          background: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          text-decoration: none;
          color: inherit;
          width: 100%;
          min-height: 80px;
          box-sizing: border-box;
        }

        .blog-row:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateX(6px);
        }

        .blog-row-number {
          display: flex;
          align-items: flex-start;
          padding-top: 2px;
        }

        .blog-row-num {
          font-size: 0.85rem;
          font-weight: 500;
          color: #7dd3fc;
          opacity: 0.4;
          min-width: 32px;
          font-feature-settings: "tnum";
          text-align: right;
        }

        .blog-row-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .blog-row-tag-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        }

        .blog-row-tag {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #7dd3fc;
          background: rgba(125, 211, 252, 0.08);
          padding: 3px 12px;
          border-radius: 20px;
          border: 1px solid rgba(125, 211, 252, 0.12);
          font-weight: 500;
          display: inline-block;
        }

        .blog-row-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .blog-row-excerpt {
          font-size: 0.85rem;
          color: #9ca3af;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        .blog-row-author {
          font-size: 0.7rem;
          color: #6b7280;
          margin-top: 2px;
          font-weight: 400;
        }

        .blog-row-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          min-width: 0;
          padding-top: 2px;
        }

        .blog-row-date {
          font-size: 0.75rem;
          color: #6b7280;
          white-space: nowrap;
        }

        .blog-row-cta {
          font-size: 0.85rem;
          color: #7dd3fc;
          font-weight: 500;
          opacity: 0;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .blog-row:hover .blog-row-cta {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .blog-hero {
            padding: 100px 40px 50px;
          }

          .blog-hero h1 {
            font-size: 3rem;
          }

          .blog-grid-container {
            padding: 40px 40px 60px;
          }

          .blog-row {
            grid-template-columns: 50px 1fr 140px;
            gap: 14px;
            padding: 18px 20px;
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .blog-hero {
            padding: 80px 24px 40px;
            min-height: 30vh;
          }
          
          .blog-hero h1 {
            font-size: 2.2rem;
          }

          .blog-hero .section-label {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }

          .blog-hero-author {
            font-size: 0.85rem;
          }
          
          .blog-grid-container {
            padding: 30px 16px 60px;
          }

          .blog-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 14px 16px;
            min-height: auto;
          }

          .blog-row-number {
            padding-top: 0;
          }

          .blog-row-right {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            width: 100%;
          }

          .blog-row-cta {
            opacity: 1;
          }

          .blog-row-title {
            font-size: 0.95rem;
          }

          .blog-row-excerpt {
            font-size: 0.8rem;
            -webkit-line-clamp: 1;
          }

          .blog-row-num {
            font-size: 0.7rem;
            min-width: 24px;
          }

          .blog-row-tag {
            font-size: 0.6rem;
            padding: 3px 10px;
          }

          .blog-row-date {
            font-size: 0.7rem;
          }

          .blog-row-cta {
            font-size: 0.75rem;
          }

          .blog-row-author {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 480px) {
          .blog-hero {
            padding: 70px 16px 30px;
          }

          .blog-hero h1 {
            font-size: 1.8rem;
          }

          .blog-grid-container {
            padding: 20px 12px 40px;
          }

          .blog-row {
            padding: 12px 14px;
          }

          .blog-row-right {
            flex-wrap: wrap;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;