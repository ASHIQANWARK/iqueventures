import React from "react";
import { useParams, Link } from "react-router-dom";
import { PenTool } from "lucide-react";

// Simulated blog data — ideally this should come from an API or global state
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
    content: `
      Growing your startup in 2024 requires agility, product-market fit, and a lean mindset. 
      Focus on solving real problems, building community, and measuring user engagement. 
      Don’t forget to invest in your team and stay close to your customers.
    `
  },
  { 
    slug: "top-5-business-strategies-for-success",
    title: "Top 5 Business Strategies for Success", 
    date: "2024-02-05", 
    author: "Shafi Shoukath", 
    image: successImg, 
    content: `
      The most successful companies embrace strategies like customer obsession, clarity of vision, 
      experimentation, data-driven decisions, and lean execution. Apply these pillars to scale impact.
    `
  },
  { 
    slug: "funding-tips-for-entrepreneurs",
    title: "Funding Tips for Entrepreneurs", 
    date: "2024-03-15", 
    author: "Shafi Shoukath", 
    image: fundingImg, 
    content: `
      When raising funds, always prepare your pitch deck with clarity, show traction early, and 
      research your investors. Focus on storytelling and align your vision with the investor's thesis.
    `
  },
  { 
    slug: "how-to-build-a-strong-startup-team",
    title: "How to Build a Strong Startup Team", 
    date: "2024-04-02", 
    author: "Shafi Shoukath", 
    image: teamworkImg, 
    content: `
      A startup is only as good as its team. Look for complementary skills, shared values, and 
      mission-driven individuals. Transparency, empathy, and trust create high-performing cultures.
    `
  },
  { 
    slug: "startup-marketing-strategies",
    title: "Startup Marketing Strategies", 
    date: "2024-05-10", 
    author: "Shafi Shoukath", 
    image: marketingImg, 
    content: `
      Marketing on a budget? Focus on content marketing, SEO, partnerships, and community building. 
      Know your audience and double down on what converts. Track your CAC and LTV metrics closely.
    `
  },
];

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0c3e49] text-white flex items-center justify-center">
        <p className="text-xl">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0c3e49] pt-24 pb-16 px-4 md:px-8 lg:px-24 text-white">
      <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#1d375f] mb-2">{blog.title}</h1>
          <p className="text-gray-600 text-sm mb-4">{blog.date} | {blog.author}</p>
          <p className="text-base leading-relaxed whitespace-pre-line">
            {blog.content.trim()}
          </p>
          <Link 
            to="/blog" 
            className="mt-8 inline-block text-[#1d375f] font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
