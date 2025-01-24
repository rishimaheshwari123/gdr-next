import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const companies = [
  { name: "New RK Construction", path: "/construction-home" },
  { name: "RKS Homes", path: "/rks-homes" },
  { name: "SRS Foods", path: "/srs-foods" },
  { name: "Ri Si Home Food", path: "/ri-si-home-food" },
  { name: "72 GDR Steel", path: "/72-gdr-steel" },
];

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    company: companies[0].name,
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center py-12">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl p-8 bg-white shadow-xl rounded-lg">
        {/* Left Column: Company Name and Social Media Links */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h6 className="text-gray-600 text-4xl font-extrabold mb-6">
            Get in Touch
          </h6>
          <div className="text-gray-600 text-lg">
            <p className="mb-4">Follow us on:</p>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaFacebookF size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTwitter size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                >
                  <FaInstagram size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                >
                  <FaLinkedinIn size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Address and Contact Form */}
        <div className="lg:w-1/2 lg:pl-12">
          <h6 className="text-gray-600 text-4xl font-extrabold mb-6">
            Contact Us
          </h6>
          <div className="text-gray-600 text-lg mb-8">
            <p className="mb-2">123 Example Street</p>
            <p className="mb-2">Bhopal, MP, India</p>
            <p className="mb-2">Phone: +91-123-456-7890</p>
            <p>Email: example@example.com</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 text-lg font-medium mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 text-lg font-medium mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-600 text-lg font-medium mb-2"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 text-lg font-medium mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-gray-600 text-lg font-medium mb-2"
              >
                Company:
              </label>
              <select
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {companies.map((company) => (
                  <option key={company.name} value={company.name}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
