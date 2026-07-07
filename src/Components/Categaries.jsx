import React from 'react';
import './App.css';


const Categaries = () => { 
  const categaries = [
    { name: "React", posts: "12 Posts", icon: "⚛️" },
    { name: "JavaScript", posts: "18 Posts", icon: "JS" },
    { name: "CSS", posts: "10 Posts", icon: "🎨" },
    { name: "HTML", posts: "8 Posts", icon: "🌐" },
    { name: "NodeJS", posts: "9 Posts", icon: "🟢" },
  ];

  return ( 
    <section className="my-10">
      <h2 className="text-xl font-bold mb-6">Categaries</h2>
    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categaries.map((cat, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 border border-gray-200 p-4 rounded-xl hover:border-purple-500 transition-colors cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl">
              {cat.icon}
            </div>
            <div>
              <h3 className="font-bold text-sm">{cat.name}</h3>
              <p className="text-xs text-gray-500">{cat.posts}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 

export default Categaries;