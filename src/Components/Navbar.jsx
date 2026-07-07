import React from 'react';
import './App.css';
import { FiSearch } from 'react-icons/fi'; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 max-w-6xl mx-auto">
      
     
      <div className="text-2xl font-bold text-gray-900">
        My<span className="text-purple-600">Blog</span>
      </div>

      <div className="hidden md:flex gap-8 font-medium text-gray-600">
        <a href="#" className="text-purple-600 border-b-2 border-purple-600 transition">Home</a>
        <a href="#" className="hover:text-purple-600 transition">Blogs</a>
        <a href="#" className="hover:text-purple-600 transition">Categaries</a>
        <a href="#" className="hover:text-purple-600 transition">About</a>
        <a href="#" className="hover:text-purple-600 transition">Contact</a>
      </div>

      <div className="flex items-center gap-6">
        <FiSearch className="text-xl text-gray-600 cursor-pointer hover:text-purple-600" />
      </div>
    </nav>
  );
};

export default Navbar;