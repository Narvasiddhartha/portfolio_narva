import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">NS</h1>
        <div className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;