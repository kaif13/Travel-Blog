// src/components/Navbar.jsx
import React from "react";
import { Home as HomeIcon, Image as ImageIcon, User } from "lucide-react";
import kaif from "../assets/kaif.jpg";

const Navbar = ({ onShowGallery, onShowHome, onProfileClick, onShowAbout }) => (
  <nav className="flex justify-between items-center mb-8 p-3 bg-slate-900/60 backdrop-blur-md rounded-lg border border-slate-700">
    <div className="flex items-center gap-3">
      <img
        src={kaif}
        alt="Profile"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-500 cursor-pointer object-cover"
        onClick={onProfileClick}
      />
      <h1
        className="text-lg sm:text-xl font-bold text-white cursor-pointer"
        onClick={onShowHome}
      >
        Mohammad Kaif
      </h1>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <button
        onClick={onShowHome}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-200 p-2 rounded-md"
      >
        <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Home</span>
      </button>
      <button
        onClick={onShowGallery}
        className="flex items-center gap-2 bg-cyan-600/50 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg shadow-md hover:bg-cyan-600/80 transition duration-300"
      >
        <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Gallery</span>
      </button>
      <button
        onClick={onShowAbout}
        className="flex items-center gap-2 bg-green-600/50 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg shadow-md hover:bg-green-600/80 transition duration-300"
      >
        <User className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">About Me</span>
      </button>
    </div>
  </nav>
);

export default Navbar;
