"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import contact from "@/assests/contact.jpg";
import Modal from "@/components/core/contact/Modal";
import Devision from "@/components/common/Devision";
import Image from "next/image";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toggleModal(); // Close the modal after submission
  };

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <Image
          src={contact}
          alt="contact"
          className="w-full h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h6 className="text-4xl md:text-6xl text-white font-bold">Contact</h6>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2">
        {/* Left Column: Contact Details */}
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address:</h3>
            <p>
              Janki Nagar, Neelkant Mahadev Mandir, Near Mashroom Factory
              Ratibad Bhopal
            </p>
          </div>
          {/* <div className="mb-4">
            <h3 className="text-xl font-semibold">Phone Number:</h3>
            <p>98937 30005</p>
          </div> */}
          <div>
            <h3 className="text-xl font-semibold">Email:</h3>
            <p>rkshomes30@gmail.com</p>
          </div>

          <button
            onClick={toggleModal}
            className="mt-6 px-6 py-3 bg-[#631f28] text-white text-lg font-bold rounded-lg hover:bg-[#3b4451] transition duration-300"
          >
            Enquiry Now
          </button>
        </div>

        {/* Right Column: Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.196516107796!2d77.27105677531803!3d23.16302667907558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA5JzQ2LjkiTiA3N8KwMTYnMjUuMSJF!5e0!3m2!1sen!2sin!4v1724832538455!5m2!1sen!2sin"
            className="w-full h-96"
            title="Provision Plus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
      />
      <Devision />
    </div>
  );
};

export default Contact;
