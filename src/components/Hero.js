"use client"; // Needed for useState & useEffect

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";


export default function Hero() {
  const titles = ["I'm Nicole Bencosme-Gil", "Computer Science Student", "Aspiring Software Engineer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { triggerOnce: true, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState("01");

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (charIndex < titles[index].length) {
          setDisplayText((prev) => prev + titles[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [charIndex, isDeleting, index]);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-row items-center justify-between h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 mb-30">
        <div className="w-1/2 text-left">
          <h1 className="text-6xl font-bold animate-fadeIn">
            Hi, <span className="text-blue-400">{displayText}</span>
          </h1>
          <p className="text-lg mt-4 animate-fadeIn delay-200">
            Welcome to my portfolio
          </p>

 {/* Social Icons */}
<div className="flex gap-6 mt-6">
  <a href="https://www.linkedin.com/in/nicole-bencosme-gil/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-5xl hover:scale-110 transition">
    <FaLinkedin />
  </a>
  <a href="https://github.com/NicoleBGil" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-5xl hover:scale-110 transition">
    <FaGithub />
  </a>
  <a href="/Nicole_Bencosme_ResumeTW.pdf" download className="text-green-400 text-5xl hover:scale-110 transition">
    <HiDocumentDownload />
  </a>
</div>

          {/* Updated Buttons with Glow Effect */}
          <div className="flex gap-4 mt-6">
  <button
    onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
    className="relative text-blue-400 font-semibold text-lg transition duration-300 hover:scale-105"
  >
    About Me
    <span className="absolute inset-0 bg-blue-400 opacity-30 blur-lg rounded-lg"></span>
  </button>

  <button
    onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}
    className="relative text-green-400 font-semibold text-lg transition duration-300 hover:scale-105"
  >
    Experience
    <span className="absolute inset-0 bg-green-400 opacity-30 blur-lg rounded-lg"></span>
  </button>

  <button
    onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
    className="relative text-purple-400 font-semibold text-lg transition duration-300 hover:scale-105"
  >
    Projects
    <span className="absolute inset-0 bg-purple-400 opacity-30 blur-lg rounded-lg"></span>
  </button>

  {/* New Contact Button with White Glow */}
  <button
    onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
    className="relative text-white font-semibold text-lg transition duration-300 hover:scale-105"
  >
    Contact
    <span className="absolute inset-0 bg-white opacity-30 blur-lg rounded-lg"></span>
  </button>
</div>
</div>

    
        <div className="w-1/2 flex justify-center items-center relative">
  {/* Glow effect behind the image */}
  <div className="absolute w-[650px] h-[700px] rounded-full bg-blue-600 blur-3xl opacity-40 animate-pulse"></div>

  {/* Profile Image */}
  <img 
    src="/profile.jpg" 
    alt="Nicole Bencosme-Gil" 
    className="relative w-[300px] h-[400px] object-cover rounded-full border-4 border-black-900 shadow-lg"
  />
</div>

      </section>

      {/* About Me Section */}
      <section id="about" ref={aboutRef} className="h-[60vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 mb-30">
        <h2 className="text-4xl font-bold text-blue-400 mb-4 text-center">/ about me</h2>
        <p className="text-lg max-w-2xl text-center">
          I'm a student at Kean University, passionate about software engineering and coding. 
          I enjoy developing efficient and scalable applications, solving complex programming challenges, and exploring 
          new technologies in web development, artificial intelligence, and cybersecurity. My goal is to build innovative 
          solutions that enhance user experiences and drive technological advancements.
        </p>
        
        {/* Scholar Achievements Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-8">
  <div className="relative bg-gray-800 px-6 py-3 w-[180px] text-center rounded-lg shadow-lg border border-gray-700 text-lg text-blue-400 font-semibold
      before:absolute before:inset-0 before:bg-blue-500 before:opacity-30 before:blur-lg before:rounded-lg">
    Scholar's Academy
  </div>
  <div className="relative bg-gray-800 px-6 py-6 w-[180px] text-center rounded-lg shadow-lg border border-gray-700 text-lg text-blue-400 font-semibold
      before:absolute before:inset-0 before:bg-blue-500 before:opacity-30 before:blur-lg before:rounded-lg">
    NSF S-STEM
  </div>
  <div className="relative bg-gray-800 px-6 py-6 w-[180px] text-center rounded-lg shadow-lg border border-gray-700 text-lg text-blue-400 font-semibold
      before:absolute before:inset-0 before:bg-blue-500 before:opacity-30 before:blur-lg before:rounded-lg">
    CAHSI North
  </div>
</div>
</section>
    

      {/* Experience Section - Interactive */}
    {/* Experience Section - Interactive */}
    <section id="experience" ref={experienceRef} className="h-auto flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 pb-40 mb-30">
  <h2 className="text-4xl font-bold text-green-400 mb-4 text-center">/ experience</h2>
  
  {/* Glowing "01." and "02." */}
  <div className="flex gap-6 justify-center text-lg mt-4">
    <span onClick={() => setActiveTab("01")} className={`cursor-pointer relative px-3 py-1 rounded-lg transition duration-300 ${activeTab === "01" ? "text-green-300 border-b-2 border-green-300 pb-1 shadow-lg shadow-green-500 animate-pulse" : "text-gray-400"}`}>
      01.
    </span>
    <span onClick={() => setActiveTab("02")} className={`cursor-pointer relative px-3 py-1 rounded-lg transition duration-300 ${activeTab === "02" ? "text-green-300 border-b-2 border-green-300 pb-1 shadow-lg shadow-green-500 animate-pulse" : "text-gray-400"}`}>
      02.
    </span>
  </div>

  {activeTab === "01" && (
    <div className="max-w-3xl mt-6 opacity-100 transition-opacity duration-1000 ease-in-out">
      <h3 className="text-2xl font-semibold text-white-300">Security Operations Analyst @ Enterprise Technologies</h3>
      <p className="text-gray-400">MAY 2023 - Present</p>
      <ul className="list-none pl-6 text-lg mt-2 text-left text-white-300">
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Security Monitoring and Incident Response
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Vulnerability Management
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Security Policy and Procedure Compliance
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Security Tools Administration
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Documentation and Reporting
        </li>
      </ul>
    </div>
  )}

  {activeTab === "02" && (
    <div className="max-w-3xl mt-6 opacity-100 transition-opacity duration-1000 ease-in-out">
      <h3 className="text-2xl font-semibold text-white-300">Desktop Support Technician @ Kean University</h3>
      <p className="text-gray-400">DECEMBER 2022 - Present</p>
      <ul className="list-none pl-6 text-lg mt-2 text-left text-white-300">
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Provided technical support for students and faculty
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Troubleshot hardware and software issues
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Assisted in system upgrades and maintenance
        </li>
        <li className="relative flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-green-400 rounded-full shadow-lg shadow-green-500 animate-pulse"></span>
          Ensured network connectivity and security compliance
        </li>
      </ul>
    </div>
  )}

</section>

      {/* Projects Section */}
     {/* Projects Section */}
     

{/* Projects Section */}
<section id="projects" ref={projectsRef} className="h-auto flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 pb-40 mb-30">
  <h2 className="text-4xl font-bold text-purple-400 mb-4 text-center">/ projects</h2>
  
  <div className="max-w-5xl w-full bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
    <h3 className="text-2xl font-semibold text-purple-300">Enhancing the Software Development Lifecycle</h3>
    <p className="text-gray-200">
      How Can Secure Coding Practices be Integrated into the SDLC to Mitigate Common Vulnerabilities?
    </p>
    <p className="mt-2 text-lg text-white">
      This project explores the strategic integration of secure coding practices within the Software Development Lifecycle (SDLC), emphasizing their role in mitigating common vulnerabilities.
      It highlights the practical application of security measures across different SDLC phases—ranging from planning and design to implementation, testing, and maintenance.
      The study underscores the importance of structured, developer-centric security methodologies in fostering resilient software ecosystems.
    </p>

    {/* Research Presentation Image */}
    <div className="mt-6 flex justify-center">
      <img
        src="/poster-presentation.jpg"  // Ensure lowercase .jpg
        alt="Nicole Bencosme-Gil presenting research poster"
        width="500"
        height="400"
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Evaluation Section */}
    <p className="mt-5 text-lg font-semibold text-purple-400">Evaluation of:</p>
    <p className="text-lg text-white">
      <span className="text-purple-300 glow-purple">Google</span>, 
      <span className="text-purple-300 glow-purple"> Microsoft</span>, 
      <span className="text-purple-300 glow-purple"> Johnson & Johnson</span>
    </p>

    {/* Tools Section */}
    <p className="mt-5 text-lg font-semibold text-purple-400">Tools Used:</p>
    <p className="text-lg text-white">
      <span className="text-purple-300 glow-purple">OWASP Framework</span>, 
      <span className="text-purple-300 glow-purple"> ZAP</span>, 
      <span className="text-purple-300 glow-purple"> Dependency-Check</span>, 
      <span className="text-purple-300 glow-purple"> ASVS</span>
    </p>
  </div>
</section>




   {/* Contact Me Section */}
   <section id="contact" ref={contactRef} className="h-auto flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 pb-20 transition-opacity duration-1000 ease-in-out">
   <h2 className="text-4xl font-bold text-white-400 mb-4 text-center">/ get in touch</h2>
   <p className="text-lg text-gray-400 mb-6">Reach out via email: <a href="mailto:bencosmegilnicole@gmail.com" className="text-white-300 underline">bencosmegilnicole@gmail.com</a></p>
   <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
   <form action="/contact.php" method="POST" className="flex flex-col gap-4">
  <input type="text" name="name" placeholder="Name" className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-400" required />
  <input type="email" name="email" placeholder="Email" className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-400" required />
  <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-400" required></textarea>
  <button type="submit" className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
    Send Message
  </button>
</form>
   </div>
 </section>
</div>

);
}