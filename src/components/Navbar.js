"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 
          className="text-xl font-bold text-blue-400 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><button onClick={() => handleScroll("about")} className="hover:text-blue-400 transition">About</button></li>
          <li><button onClick={() => handleScroll("experience")} className="hover:text-green-400 transition">Experience</button></li>
          <li><button onClick={() => handleScroll("projects")} className="hover:text-purple-400 transition">Projects</button></li>
          <li><button onClick={() => handleScroll("contact")} className="hover:text-white transition">Contact</button></li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 text-white py-4 shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li><button onClick={() => handleScroll("about")} className="hover:text-blue-400 transition">About</button></li>
            <li><button onClick={() => handleScroll("experience")} className="hover:text-green-400 transition">Experience</button></li>
            <li><button onClick={() => handleScroll("projects")} className="hover:text-purple-400 transition">Projects</button></li>
            <li><button onClick={() => handleScroll("contact")} className="hover:text-white transition">Contact</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
