import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO & TAGLINE */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">Skanjo</h3>
          <p className="text-gray-400">Smarter recruiting inside Zoho</p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* RESOURCES LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-2">Product</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* NEWSLETTER SIGNUP + SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-gray-800 flex-1"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM NOTE */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Skanjo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
