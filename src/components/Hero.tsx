import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-center mb-20">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <img
          src="https://i.ibb.co/BGxGbnd/profile-pic.jpg"
          alt="Narva Siddhartha"
          className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Narva Siddhartha</h1>
      <p className="text-xl text-gray-600 mb-6">Computer Science Student & AI Enthusiast</p>
      <div className="flex justify-center gap-4 mb-8">
        <a 
          href="mailto:narvasiddhartha@gmail.com" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="Email me"
        >
          <Mail size={20} /> 
          <span>narvasiddhartha@gmail.com</span>
        </a>
        <a 
          href="tel:+917680904822" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="Call me"
        >
          <Phone size={20} /> 
          <span>+91 7680904822</span>
        </a>
        <a 
          href="https://github.com/Narvasiddhartha" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="View GitHub Profile"
        >
          <Github size={20} /> 
          <span>GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/narva-siddhartha-4b04bb211/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="Connect on LinkedIn"
        >
          <Linkedin size={20} /> 
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;