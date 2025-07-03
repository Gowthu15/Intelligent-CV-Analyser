import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Skanjo
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#product" className="hover:text-blue-500">Product</a>
          <a href="#pricing" className="hover:text-blue-500">Pricing</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-sm">
          Start Free Trial
        </button>
      </div>
    </header>
  );
};

export default Header;
