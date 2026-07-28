// Pages/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  return (
    <div className="min-h-screen bg-[#07342a] text-white pt-24 pb-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog Post: {slug}</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
};

export default BlogPost;