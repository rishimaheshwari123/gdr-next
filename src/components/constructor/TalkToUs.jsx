import React from "react";
import { FaEnvelope } from "react-icons/fa";
import backgroundImage from "@/assests/constructor/c2.png";
const TalkToUs = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center p-5"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 153, 255, 0.8)), url('/constructor/c2.png')`,
      }}
    >
      <div className="text-center p-8 bg-white bg-opacity-75 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <h6 className="text-green-600 text-4xl font-bold mb-4">TALK TO US</h6>
        <p className="text-gray-600 text-lg mb-6">
          Have any questions? We are always open to talk about your business,
          new projects, creative opportunities, and how we can help you.
        </p>
        <a
          href="mailto:r.k_construction@yahoo.com"
          className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          GET IN TOUCH
        </a>
        <div className="mt-6 flex items-center justify-center text-gray-600 hover:text-gray-600 transition-colors duration-300">
          <FaEnvelope className="mr-2" />
          <span>send mail to r.k_construction@yahoo.com</span>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
