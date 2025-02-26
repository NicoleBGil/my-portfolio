"use client"; // For Next.js client components

import React, { useState } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Predefined responses
  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I help you today?";
    } 
    if (lowerMessage.includes("portfolio")) {
      return "This portfolio was built using Next.js, TailwindCSS, and Framer Motion!";
    } 
    if (lowerMessage.includes("contact")) {
      return "You can contact Nicole at bencosmegilnicole@gmail.com.";
    } 
    if (lowerMessage.includes("projects")) {
      return "Nicole has worked on secure coding practices and AI research projects.";
    } 
    return "I'm not sure how to respond to that. Try asking about my portfolio, projects, or contact info!";
  };

  // Handle sending messages
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botReply = { text: getBotResponse(input), sender: "bot" };

    setMessages([...messages, userMessage, botReply]);
    setInput(""); // Clear input field
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-80 md:w-96 bg-gray-900 text-white rounded-lg shadow-lg p-4 border-none">
          {/* Chat Header */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-lg font-semibold">Chat Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex flex-col space-y-2 mt-3 h-60 overflow-y-auto p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg w-fit max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-700 ml-auto text-right"
                    : "bg-gray-700 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center mt-2 border-t border-gray-700 pt-2">
            <input
              type="text"
              className="flex-grow p-2 bg-gray-800 text-white rounded-lg outline-none border-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
            >
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
