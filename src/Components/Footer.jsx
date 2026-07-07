import React from 'react';
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1d] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
  
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">My<span className="text-blue-500">Blog</span></h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A place where I share my learnings about Web Development and Programming.
          </p>
          <div className="flex gap-4 text-gray-400 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        
        <div>
          <h3 className="font-bold mb-6 text-gray-300">QUICK LINKS</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-500">Categories</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6 text-gray-300">CATEGORIES</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-blue-500">React</a></li>
            <li><a href="#" className="hover:text-blue-500">JavaScript</a></li>
            <li><a href="#" className="hover:text-blue-500">CSS</a></li>
            <li><a href="#" className="hover:text-blue-500">HTML</a></li>
            <li><a href="#" className="hover:text-blue-500">NodeJS</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6 text-gray-300">CONTACT</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Email: info@myblog.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 My Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
