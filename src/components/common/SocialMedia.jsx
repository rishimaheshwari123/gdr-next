"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import "./SocialMediaBar.css";

const SocialMediaBar = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });

      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) =>
        formDataToSend.append(key, formData[key])
      );

      const response = await axios.post(
        `${BASE_URL}/contact/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Contact form submitted successfully!`,
          text: `Have a nice day!`,
          icon: "success",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          subject: null,
        });
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error",
        text: "Oops, something went wrong!",
        icon: "error",
      });
    }
  };

  const handleContactFormOpen = () => setContactFormOpen(true);
  const handleContactFormClose = () => setContactFormOpen(false);

  return (
    <div className="social-media-bar">
      <div
        className="social-icon contact-us"
        onMouseEnter={handleContactFormOpen}
        onMouseLeave={handleContactFormClose}
      >
        <FaEnvelope />
        <span className="icon-name">Contact Us</span>
        {isContactFormOpen && (
          <div className="contact-form">
            <button className="close-button" onClick={handleContactFormClose}>
              <FaTimes />
            </button>
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit} className="text-gray-600">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
              />
              <input
                type="tel"
                onChange={handleChange}
                placeholder="Your Number"
                name="phone"
                value={formData.phone}
              />
              <textarea
                placeholder="Your Message"
                onChange={handleChange}
                name="message"
                value={formData.message}
              ></textarea>
              <button type="submit" className="sendbutton">
                Send
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="social-icon bg-blue-800">
        <Link
          href="https://www.facebook.com/RKSHOME.CO.IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
          <span className="icon-name">Facebook</span>
        </Link>
      </div>
      <div className="social-icon bg-green-600">
        <Link
          href="https://wa.me/9893730005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span className="icon-name">WhatsApp</span>
        </Link>
      </div>
      <div className="social-icon bg-red-500">
        <Link
          href="https://www.instagram.com/rks.homes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          <span className="icon-name">Instagram</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaBar;
