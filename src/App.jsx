import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Mid from './Components/Mid';
import Blog from './Components/Blog';
import Categaries from './Components/Categaries';
import Form from './Components/Form';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
          <Routes>
            <Route path="/" element={
              <>
                <Mid />
                <Blog />
                <Categaries />
                <Form />
              </>
            } />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;