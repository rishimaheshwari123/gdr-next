import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Modal = ({ isOpen, toggleModal, onSubmit }) => {
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
    setFormData({
      ...formData,
      [name]: value,
    });
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
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

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
        toggleModal();
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      Swal.close();
      // toast.error("Oops, something went wrong!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg relative m-14">
        {/* Image inside the modal */}
        <img
          src="https://i.ytimg.com/vi/kBkIa6GxqzU/maxresdefault.jpg"
          alt="Modal Visual"
          className="absolute lg:top-5 top-0 left-0 w-full h-36 object-cover rounded-t-lg"
        />
        <div className="pt-32">
          {" "}
          {/* Padding to push form below the image */}
          <h6 className="text-2xl font-bold mb-4">Enquiry Form</h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Phone"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Message</label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-300 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#631f28] text-white rounded"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
