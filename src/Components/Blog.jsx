import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';



const Blog = () => {

  const blogs = [
    { title: "JS Features", tag: "JS", date: "May 24",  img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80" },
    { title: "CSS Flexbox", tag: "CSS", date: "May 20",  img: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80" },
    { title: "Node.js Intro", tag: "Node", date: "May 18",  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80" },
    { title: "React Hooks", tag: "React", date: "June 01",  img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80" },
    { title: "Tailwind Tips", tag: "CSS", date: "June 05",  img: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80" },
    { title: "JS Basics", tag: "JS", date: "June 07", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80" },
    { title: "HTML Guide", tag: "Web", date: "June 09",  img: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80" },
    { title: "Git Basics", tag: "Tools", date: "June 12",  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80" },
    { title: "API Fetching", tag: "JS", date: "June 15",  img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80" },
    { title: "Deployment", tag: "Cloud", date: "June 20",  img: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80" },
  ];

  const [showAll, setShowAll] = useState(false);

  
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">Latest Blogs</h2>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-200"
        >
          {showAll ? "Show Less ↑" : "View All →"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedBlogs.map((item, index) => (
          <div key={index} className="border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white flex flex-col hover:-translate-y-2">
            <img src={item.img} alt={item.title} className="h-48 w-full object-cover rounded-2xl mb-4" />
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">{item.tag}</span>
            <h3 className="text-xl font-bold my-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-auto border-t pt-4">By {item.author} • {item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;