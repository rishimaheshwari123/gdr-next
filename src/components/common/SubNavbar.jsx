import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiMaplibre } from "react-icons/si";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="bg-yellow-300 text-gray-800 p-5 hidden lg:block md:block">
        <div className="lg:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center lg:px-4 space-y-2 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 justify-between">
            <div className="flex w-full lg:justify-center md:justify-start items-center space-x-6 justify-between">
              <div className="flex items-center">
                <FiMapPin className="text-lg mr-2" />
                <span className="font-semibold">Bhopal</span>
              </div>
              <div className="lg:flex items-center hidden">
                <FiPhone className="text-lg mr-2" />
                <span className="font-semibold">+919893730005</span>
              </div>
              <div className="flex items-center">
                <FiMail className="text-lg mr-2" />
                <span className="font-semibold">rkshomes30@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/RKSHOME.CO.IN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.instagram.com/rks.homes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@rkshomes5376"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Map"
            >
              <SiMaplibre
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#212385] text-black p-4 lg:hidden md:hidden">
        <div className="flex w-full lg:justify-center md:justify-start items-center space-x-6 justify-between">
          <div className="flex items-center">
            <FiMapPin className="text-lg mr-2" />
            <span className="font-semibold">Bhopal</span>
          </div>

          <div className="flex items-center">
            <FiMail className="text-lg mr-2" />
            <span className="font-semibold">rkshomes30@gmail.com</span>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex items-center">
            <FiPhone className="text-lg mr-2" />
            <span className="font-semibold">+919893730005</span>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/RKSHOME.CO.IN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.instagram.com/rks.homes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@rkshomes5376"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Map"
            >
              <SiMaplibre
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
