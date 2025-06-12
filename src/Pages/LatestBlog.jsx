import React from "react";
import { PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "../assets/images/startup.jpg";
import blog2 from "../assets/images/sucess.jpeg";
import blog3 from "../assets/images/funding.jpeg";

const blogs = [
  { 
    title: "How to Grow Your Startup in 2024", 
    date: "2024-01-10", 
    author: "Shafi Shoukath", 
    image: blog1
  },
  { 
    title: "Top 5 Business Strategies for Success", 
    date: "2024-02-05", 
    author: "Shafi Shoukath", 
    image: blog2
  },
  { 
    title: "Funding Tips for Entrepreneurs", 
    date: "2024-03-15", 
    author: "Shafi Shoukath", 
    image: blog3
  },
  
];

// Sort blogs by date (newest first)
const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

// Get the latest 3 blogs
const latestBlogs = sortedBlogs.slice(0, 3);

const LatestBlog = () => {
  return (
    <div className="w-full bg-[#ffffff] pt-16 pb-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-[#046c52] mb-10 font-[Open_Sans] uppercase">
        Latest Blogs <PenTool className="inline-block w-7 h-7 ml-2" />
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBlogs.map((blog, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#006471] to-black p-6 md:p-8  border border-teal-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
          >
            {/* Blog Image */}
            <img 
              src={blog.image} 
              alt={`Cover image for ${blog.title}`} 
              className="w-full h-44 object-cover"
              loading="lazy"
            />

            {/* Blog Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#f6f6f6]">{blog.title}</h3>
              <p className="text-white text-sm">{blog.date} | {blog.author}</p>

              <Link to="/blog" className="mt-3 inline-block text-[#f9f9f9] font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
