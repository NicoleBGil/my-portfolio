"use client";
import { useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  const handleResetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(""); // Reset active section highlighting
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-12 flex justify-between items-center shadow-lg z-50">
      {/* Portfolio button resets to top */}
      <button onClick={handleResetScroll} className="text-2xl font-bold tracking-wide text-blue-400">
        Portfolio
      </button>

      <ul className="flex space-x-6">
        <li>
          <button
            onClick={() => handleScroll("about")}
            className={`transition duration-300 ${
              activeSection === "about" ? "text-blue-400" : "text-white"
            }`}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("experience")}
            className={`transition duration-300 ${
              activeSection === "experience" ? "text-green-400" : "text-white"
            }`}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("projects")}
            className={`transition duration-300 ${
              activeSection === "projects" ? "text-purple-400" : "text-white"
            }`}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("contact")}
            className={`transition duration-300 ${
              activeSection === "contact" ? "text-gray-400" : "text-white"
            }`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
