"use client";
import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaPhone } from "react-icons/fa";
import logo from "@/assests/logos/gdrgruop.jpg";
import { navlinks } from "@/data/navlink";
import Modal from "@/components/core/contact/Modal";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div>
      <nav className="bg-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo and Contact Information */}
          <Link href="/" passHref>
            <p className="flex items-center space-x-4">
              <Image src={logo} alt="Logo" className="h-14 w-20" />
            </p>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex flex-grow items-center justify-center">
            <ul className="flex space-x-8">
              {navlinks?.map((link) => (
                <li key={link.id} className="relative group">
                  <Link href={link.path} passHref>
                    <p className="text-lg font-semibold flex items-center border-b-4 border-transparent hover:border-red-700 transition-all duration-300">
                      {link.title}
                      {link.sublink && (
                        <FaChevronDown className="inline ml-1 transition-transform duration-200" />
                      )}
                    </p>
                  </Link>

                  {/* Sublinks dropdown */}
                  {link.sublink && (
                    <ul className="absolute left-0 mt-2 bg-gray-700 border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {link.sublink.map((sublink, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-red-600">
                          <Link href={sublink.path} passHref>
                            <p className="text-white border-transparent transition-all duration-300">
                              {sublink.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden lg:block relative overflow-hidden bg-red-600 text-white py-2 px-5 text-xl rounded shadow-lg transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-black before:z-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-white"
              onClick={handleSubmit}
            >
              <span className="relative z-10">Inquiry</span>
            </button>
            <button onClick={toggleMobileMenu} className="lg:hidden text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-800 border-t border-gray-600 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <Image src={logo} alt="Logo" className="h-14 w-20" />

          <button onClick={toggleMobileMenu} className="text-2xl text-white">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col mt-4">
          {navlinks?.map((link, index) => (
            <li key={link.id} className="relative">
              <Link href={link.path} passHref>
                <p
                  onClick={() => link.sublink && handleLinkClick(link.id)}
                  className={`px-4 py-2 text-lg font-semibold flex items-center justify-between text-white border-b-2 border-transparent hover:border-red-500 transition-all duration-300`}
                >
                  {link.title}
                  {link.sublink && (
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        activeMenu === link.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </p>
              </Link>

              {/* Sublinks dropdown for mobile */}
              {link.sublink && activeMenu === link.id && (
                <ul className="pl-4 bg-gray-600">
                  {link.sublink.map((sublink, index) => (
                    <li
                      key={index}
                      className={`py-2 ${
                        index === link.sublink.length - 1 ||
                        index === link.sublink.length - 2
                          ? "border-b border-gray-500"
                          : ""
                      } hover:bg-gray-500`}
                    >
                      <Link href={sublink.path} passHref>
                        <p className="text-white border-b-2 border-transparent transition-all duration-300">
                          {sublink.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex space-x-2 w-11/12 mx-auto items-center justify-center mt-10">
          <Link
            href="https://www.facebook.com/RKSHOME.CO.IN"
            passHref
            className="text-blue-600 hover:text-blue-400 border border-blue-600 hover:border-blue-400 rounded-full p-3  transition-all duration-300"
            aria-label="Facebook"
            target="_blank"
          >
            <FaFacebook size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/rks.homes/"
            passHref
            className="text-pink-600 hover:text-pink-400 border border-pink-600 hover:border-pink-400 rounded-full p-3  transition-all duration-300"
            aria-label="Instagram"
            target="_blank"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href="https://www.youtube.com/@rkshomes5376"
            passHref
            className="text-red-600 hover:text-red-400 border border-red-600 hover:border-red-400 rounded-full p-3 transition-all duration-300"
            aria-label="YouTube"
            target="_blank"
          >
            <FaYoutube size={22} />
          </Link>

          <Link
            href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
            passHref
            className="text-blue-600 hover:text-blue-400 border border-blue-600 hover:border-blue-400 rounded-full p-3 transition-all duration-300"
            aria-label="Google"
            target="_blank"
          >
            <FaGoogle size={22} />
          </Link>

          <a
            href={`tel:+919893730005`}
            className="text-blue-600 hover:text-blue-400 border border-blue-600 hover:border-blue-400 rounded-full p-3  transition-all duration-300"
          >
            <FaPhone size={22} />
          </a>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Navbar;
