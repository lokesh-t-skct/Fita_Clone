import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-800">PYTHON ANYWHERE</a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#courses" className="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#success" className="text-gray-700 hover:text-blue-600">Success Stories</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <div className="hidden md:block">
          <span className="text-gray-600">For Enquiry: </span>
          <a href="tel:9345045466" className="text-blue-600 font-semibold">+91 93450 45466</a>
        </div>
        <button className="md:hidden">
          {/* hamburger icon */}
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
