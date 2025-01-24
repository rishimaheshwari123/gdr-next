"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Country, State, City } from "country-state-city";

const ProductCard = ({ imageUrl, title, category, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneCode: "93",
    companyName: "",
    product: title,
    quantity: "",
    email: "",
    contactNumber: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });
  const [countryCode, setCountryCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const countriesData = Country.getAllCountries();
    console.log(countriesData);
    setCountries(countriesData);
  }, []);

  const handleCountryChange = async (e) => {
    const countryCode = e.target.value;
    const selectedCountry = countries.find(
      (country) => country.isoCode === countryCode
    );

    if (selectedCountry) {
      const statesData = await State.getStatesOfCountry(countryCode);
      setFormData({ ...formData, country: countryCode, state: "", city: "" });

      setStates(statesData);
    }
  };

  const handleStateChange = async (e) => {
    const stateCode = e.target.value;
    const selectedState = states.find((state) => state.isoCode === stateCode);
    if (selectedState) {
      const citiesData = City.getCitiesOfState(formData.country, stateCode);
      setFormData({ ...formData, state: stateCode, city: "" });
      setCities(citiesData);
    }
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const buttonColorClass = index % 2 === 0 ? "bg-[#5A5A5A]" : "bg-[#e2571a]";

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      const response = await axios.post(
        `${BASE_URL}/contact/enquiry`,
        formData
      );
      console.log(response);
      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Inquiry sent successfully!`,
          text: `We will get back to you soon.`,
          icon: "success",
        });
        setFormData({
          name: "",
          companyName: "",
          product: title,
          quantity: "",
          email: "",
          contactNumber: "",
          country: "",
          state: "",
          city: "",
          address: "",
        });
        closeModal(); // Close modal after form submission
      }
    } catch (error) {
      console.log(error);
      Swal.close();
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your inquiry. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="relative rounded overflow-hidden shadow-lg bg-white text-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden border-2">
        <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Product"
            className="max-h-full max-w-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">{title}</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-teal-700 font-sans text-wrap">
            {title}
          </div>
          {/* <p className="text-gray-600 text-base mb-4">
          <span className="font-bold">Category:</span> {category}
        </p> */}
          <button
            onClick={openModal}
            className={`text-white w-full font-serif py-2 px-4 rounded ${buttonColorClass} hover:bg-opacity-75`}
          >
            Send Inquiry
          </button>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items- justify- min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8  sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text- sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-600">
                      Send Inquiry
                    </h3>
                    <div className="mt-2">
                      {/* Form Fields */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label
                              htmlFor="name"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="companyName"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="product"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Product
                            </label>
                            <input
                              type="text"
                              id="product"
                              name="product"
                              value={formData.product}
                              readOnly
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="quantity"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Unit KG
                            </label>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleInputChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="email"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              autoComplete="email"
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="contactNumber"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Contact Number
                            </label>
                            <div className="flex">
                              <select
                                id="phoneCode"
                                name="phoneCode"
                                value={formData.phoneCode}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-r-none max-w-[130px]"
                              >
                                {countries.map((country) => (
                                  <option
                                    key={country.phonecode}
                                    value={country.phonecode}
                                  >
                                    {country.isoCode} ({country.phonecode})
                                  </option>
                                ))}
                              </select>
                              <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                required
                                autoComplete="tel"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-l-none"
                              />
                            </div>
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="country"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Country
                            </label>
                            <select
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleCountryChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option
                                  key={country.isoCode}
                                  value={country.isoCode}
                                >
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="state"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              State
                            </label>
                            <select
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleStateChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option
                                  key={state.isoCode}
                                  value={state.isoCode}
                                >
                                  {state.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="city"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              City
                            </label>
                            <select
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="address"
                              className="block text-gray-600 text-sm font-medium mb-2"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#e2571a] text-base font-medium text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Send Inquiry
                          </button>
                          <button
                            type="button"
                            onClick={closeModal}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
