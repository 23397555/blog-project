import React from 'react';
import './App.css';


const Form = () => {
  return (

    <section className="bg-purple-50 rounded-2xl p-8 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Stay Updated!</h2>
        <p className="text-gray-600 text-sm">Subscribe to our newsletter and get the latest blog posts in your inbox.</p>
      </div>
      
      <div className="flex w-full md:w-auto gap-2 bg-white p-1 rounded-xl shadow-sm border border-purple-100">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="px-4 py-2 rounded-lg w-full md:w-64 focus:outline-none" 
        />
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Form;