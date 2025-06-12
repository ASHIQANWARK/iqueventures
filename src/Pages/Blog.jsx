import React from "react";
import { Link } from "react-router-dom";

import startupImg from "../assets/images/startup.jpg";
import successImg from "../assets/images/sucess.jpeg";
import fundingImg from "../assets/images/funding.jpeg";
import teamworkImg from "../assets/images/teamwoek.jpg";
import marketingImg from "../assets/images/marketing.jpeg";

const blogs = [
  {
    slug: "how-to-grow-your-startup-in-2024",
    title: "How to Grow Your Startup in 2024",
    date: "2024-01-10",
    author: "Shafi Shoukath",
    image: startupImg,
  },
  {
    slug: "top-5-business-strategies-for-success",
    title: "Top 5 Business Strategies for Success",
    date: "2024-02-05",
    author: "Shafi Shoukath",
    image: successImg,
  },
  {
    slug: "funding-tips-for-entrepreneurs",
    title: "Funding Tips for Entrepreneurs",
    date: "2024-03-15",
    author: "Shafi Shoukath",
    image: fundingImg,
  },
  {
    slug: "how-to-build-a-strong-startup-team",
    title: "How to Build a Strong Startup Team",
    date: "2024-04-02",
    author: "Shafi Shoukath",
    image: teamworkImg,
  },
  {
    slug: "startup-marketing-strategies",
    title: "Startup Marketing Strategies",
    date: "2024-05-10",
    author: "Shafi Shoukath",
    image: marketingImg,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#07342a] text-white pt-24 pb-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.slug}
              className="bg-[#0c3e49] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
                <p className="text-sm text-gray-400">by {blog.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
