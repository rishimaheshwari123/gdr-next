"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { apiConnector } from "../../../services/apiConnector";
import Image from "next/image";

const HomeQuote = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log the form data to inspect it

    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await apiConnector(
        "POST",
        `${BASE_URL}/auth/getQoutes`,
        formData
      );
      Swal.fire({
        title: "Data Send Successful",
        text: "Have a nice day!",
        icon: "success",
      });

      // Reset form data
      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("ERROR MESSAGE - ", error);
      Swal.fire({
        title: "Request Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong, please try again later",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="bg-black mb-1">
        <div className="flex  items-center justify-center w-full">
          <div className="relative w-72 h-36">
            <Image
              src="https://i.ytimg.com/vi/kBkIa6GxqzU/maxresdefault.jpg"
              alt="Modal Visual"
              layout="fill"
              className=" object-cover rounded-t-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 p-5">
          <div className="text-center my-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.196516107796!2d77.27105677531803!3d23.16302667907558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA5JzQ2LjkiTiA3N8KwMTYnMjUuMSJF!5e0!3m2!1sen!2sin!4v1724832538455!5m2!1sen!2sin"
              className="w-full lg:h-[100vh] h-[50vh]"
              title="GDR Gruop"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form
            className="d-shadow grid grid-cols-1 w-full md:grid-cols-2 gap-6 bg-white px-5 py-5"
            onSubmit={handleSubmit}
            style={{
              backgroundImage: `url()`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:col-span-2 text-center">
              <h6 className="text-red-600 text-xl font-bold">
                Request a Call Back!
              </h6>
              <h6 className="text-3xl font-bold">General Enquiry</h6>
              <p className="text-gray-500">Not sure about your requirements?</p>
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="WhatsApp Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                placeholder="City"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              >
                <option value="">Select Service</option>
                <option value="RKS Infrabuild & Homes Pvt. LTD.">
                  RKS Infrabuild & Homes Pvt. LTD.
                </option>
                <option value="New RK Construction">New RK Construction</option>
                <option value="Parthavi  Home Food">Parthavi Home Food</option>
                <option value="Nirvdit All Making Products Private Limited">
                  Nirvdit All Making Products Private Limited
                </option>
              </select>
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Please type at least 20 characters about your Inquiry"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded h-24"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I'm not a robot</span>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-red-500 text-white px-4 py-2 rounded font-bold"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5 p-5">
        <div className="bg-yellow-500 text-center p-5 rounded">
          <h6 className="text-2xl font-bold">1,000+</h6>
          <p>Projects</p>
        </div>
        <div className="bg-green-500 text-center p-5 rounded">
          <h6 className="text-2xl font-bold">99%</h6>
          <p>Job Success Score</p>
        </div>
        <div className="bg-red-500 text-center p-5 rounded">
          <h6 className="text-2xl font-bold">4.9/5.0</h6>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default HomeQuote;
