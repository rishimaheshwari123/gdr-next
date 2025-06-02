"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { CSSTransition } from "react-transition-group"; // For animation

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    applicationFor: "",
    resume: null,
    gender: "", // Added gender field
  });

  const [gender, setGender] = useState("Male"); // State for selected gender
  const [animate, setAnimate] = useState(false); // State to trigger animation
  const [selectedJobDescription, setSelectedJobDescription] = useState(""); // State for job description



  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/jobs`);
        setJobs(response?.data?.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [BASE_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "applicationFor") {
      const selectedJob = jobs.find(
        (job) => job.jobtitle === value && job.gender === gender
      );
      setSelectedJobDescription(selectedJob ? selectedJob.description : "");
    }
  };

  const handleGenderSelect = (selectedGender) => {
    if (gender !== selectedGender) {
      setAnimate(true);
      setTimeout(() => {
        setGender(selectedGender);
        setFormData((prevData) => ({
          ...prevData,
          gender: selectedGender,
        }));
        setAnimate(false);

        // Update job description based on gender change
        const selectedJob = jobs.find(
          (job) =>
            job.jobtitle === formData.applicationFor &&
            job.gender === selectedGender
        );
        setSelectedJobDescription(selectedJob ? selectedJob.description : "");
      }, 300); // Duration should match the CSS transition duration
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Optional: Add file type and size validation here
      setFormData({
        ...formData,
        resume: file,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation for Gender
    if (!formData.gender) {
      Swal.fire({
        title: "Validation Error",
        text: "Please select your gender.",
        icon: "warning",
      });
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("message", formData.message);
    data.append("applicationFor", formData.applicationFor);
    data.append("gender", formData.gender); // Append gender
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

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
      const response = await axios.post(`${BASE_URL}/contact/career`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Your Application has been submitted successfully!`,
          text: `Have a nice day!`,
          icon: "success",
        });
        // Reset form data
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          applicationFor: "",
          resume: null,
          gender: "",
        });
        setGender("");
        setSelectedJobDescription(""); // Reset job description
      }
    } catch (error) {
      Swal.close();

      console.error("Error submitting the form:", error);
      Swal.fire({
        title: "Error",
        text:
          error.response?.data?.message ||
          "Something went wrong, please try again later",
        icon: "error",
      });
    }
  };

  return (
    <div className=" max-w-3xl mx-auto p-5">
      <h2 className="text-2xl font-bold my-4 text-center">Career Form</h2>

      {/* Gender Selection Tabs */}
      <div className="flex justify-center mb-6">
        <button
          type="button"
          onClick={() => handleGenderSelect("Male")}
          className={`px-4 py-2 mr-2 rounded-l-lg border ${
            gender === "Male"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          } transition-colors duration-300`}
        >
          Male
        </button>
        <button
          type="button"
          onClick={() => handleGenderSelect("Female")}
          className={`px-4 py-2 rounded-r-lg border ${
            gender === "Female"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          } transition-colors duration-300`}
        >
          Female
        </button>
      </div>

      {/* Animated Gender Indicator */}
      <CSSTransition in={animate} timeout={300} classNames="fade" unmountOnExit>
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500">Changing Gender...</p>
        </div>
      </CSSTransition>

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 lg:gap-6 gap-4"
        encType="multipart/form-data"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-xl text-gray-600 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full text-xl px-3 py-2 border border-red-600 h-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-xl text-gray-600 mb-2 " htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-xl px-3 py-2 border border-red-600 h-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter Your Email"
          />
        </div>

        {/* Contact Number Field */}
        <div className="mb-4">
          <label className="block text-xl text-gray-600 mb-2" htmlFor="contact">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full text-xl px-3 py-2 border border-red-600 h-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Enter Your Phone Number"
          />
        </div>

        {/* Position Selection */}
        <div className="mb-4 lg:col-span-2">
          <label
            className="block text-xl text-gray-600 mb-2"
            htmlFor="applicationFor"
          >
            Select Position
          </label>
          <select
            id="applicationFor"
            name="applicationFor"
            className="text-xl w-full px-3 py-2 border border-red-600 h-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.applicationFor}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Position --</option>
            {jobs
              .filter((job) => job.gender === gender)
              .map((job) => (
                <option key={job.jobtitle} value={job.jobtitle}>
                  {job.jobtitle}
                </option>
              ))}
          </select>
        </div>

        {/* Job Description */}
        {selectedJobDescription && (
          <div className="mb-4 lg:col-span-2">
            <label className="block text-xl text-gray-600 mb-2">
              Job Description
            </label>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: selectedJobDescription }}
            />
          </div>
        )}

        {/* Message Field */}
        <div className="mb-4 lg:col-span-2">
          <label className="block text-xl text-gray-600 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="text-xl w-full px-3 py-2 border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-4 lg:col-span-2">
          <label className="block text-xl text-gray-600 mb-2" htmlFor="resume">
            Resume (PDF)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            className="w-full px-3 py-2 border border-red-600 rounded-lg"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4 lg:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
