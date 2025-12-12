// src/pages/AboutMePage.jsx
import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import kaif from "../assets/kaif.jpg";

const AboutMePage = ({ onBack }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-cyan-400 hover:text-cyan-300 mb-6 flex items-center font-semibold transition duration-200"
      >
        ← Back
      </button>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 bg-slate-800/70 p-8 rounded-xl shadow-xl border border-slate-700">
        {/* Left: Details */}
        <div className="flex-1 text-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4">
            Mohammad Kaif
          </h1>
          <p className="text-lg md:text-xl mb-4 italic text-gray-300">
            Industrial Engineering Student | Frontend Developer | Tech
            Enthusiast
          </p>

          <p className="text-gray-300 mb-4">
            Hi! I'm Kaif, passionate about building interactive web experiences
            and exploring the latest in tech and AI. I love creating projects
            that combine clean design with functional coding.
          </p>

          <h2 className="text-2xl font-bold text-cyan-200 mb-2">Contact Me</h2>
          <ul className="text-gray-300 mb-6 space-y-1">
            <li>Email: kaif@example.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Varanasi, India</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-200 mb-2">
            Connect with me
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/kaif13"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadkaif1311/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/__mohammad_kaif/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={28} />
            </a>
            <a
              href="mailto:mohammaddkaif0602@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={kaif}
            alt="Kaif"
            className="w-64 md:w-80 lg:w-96 rounded-xl shadow-2xl border-4 border-cyan-500 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
