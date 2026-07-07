import React from 'react';
import './App.css';
const Blog = () => {
  return (
    <div 
      className="relative rounded-3xl overflow-hidden text-white h-[400px] flex items-center p-10 bg-cover bg-center my-8"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop')" }}
    >

      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="z-10 max-w-xl">
        <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold">Featured Post</span>
        <h1 className="text-4xl md:text-5xl font-bold my-4">React 2026: Complete Beginner Guide</h1>
        <p className="text-gray-200 mb-6">Learn React from scratch with examples. This complete guide helps you understand React concepts in a simple way.</p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition">Read More →</button>
      </div>
    </div>
  );
};

export default Blog;