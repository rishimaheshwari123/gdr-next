"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus, FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function JobOpening() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [jobs, setJobs] = useState([]);
  const [showAddJob, setShowAddJob] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const maxWords = 3000; // Maximum allowed words

  // Fetch jobs from the API
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

  // Handle adding a new job
  const handleAddJob = async () => {
    try {
      await axios.post(`${BASE_URL}/auth/jobs`, {
        jobTitle,
        description,
        gender,
      });
      Swal.fire({
        icon: "success",
        title: "Job Added",
        text: "The job opening has been added successfully!",
      });
      setJobTitle("");
      setDescription("");
      setGender("");
      setShowAddJob(false);
      // Refresh job list
      const response = await axios.get(`${BASE_URL}/auth/jobs`);
      setJobs(response?.data?.jobs);
    } catch (error) {
      console.error("Error adding job:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error adding the job. Please try again.",
      });
    }
  };

  // Handle deleting a job
  const handleDeleteJob = async (jobId) => {
    try {
      // Confirm deletion
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(`${BASE_URL}/auth/jobs/${jobId}`);
        Swal.fire("Deleted!", "The job opening has been deleted.", "success");
        // Refresh job list
        const response = await axios.get(`${BASE_URL}/auth/jobs`);
        setJobs(response?.data?.jobs);
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error deleting the job. Please try again.",
      });
    }
  };

  const handleChange = (html) => {
    // Count words
    const text = html.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
    const wordCount = text.split(/\s+/).length;

    // Check if word count exceeds limit
    if (wordCount <= maxWords) {
      setDescription(html);
    } else {
      // Display message or handle exceeding word limit
      alert(`You cannot exceed ${maxWords} words.`);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h6 className="text-2xl font-bold">Job Openings</h6>
        <button
          onClick={() => setShowAddJob(!showAddJob)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition flex items-center"
        >
          {showAddJob ? (
            <>
              <FaTimes className="mr-2" />
              Close
            </>
          ) : (
            <>
              <MdAdd className="mr-2" />
              Add Job
            </>
          )}
        </button>
      </div>

      {showAddJob && (
        <div className="mb-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h6 className="text-xl font-bold mb-4">Add Job Opening</h6>
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          />
          <ReactQuill
            theme="snow"
            value={description}
            onChange={handleChange}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: ["small", false, "large", "huge"] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["clean"],
              ],
            }}
            className="mb-4"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            onClick={handleAddJob}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition flex items-center"
          >
            <FaPlus className="mr-2" />
            Add Job
          </button>
        </div>
      )}

      <div>
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="mb-4 p-6 border border-gray-300 rounded-lg bg-white shadow-md relative"
            >
              <h3 className="text-lg font-semibold">{job?.jobtitle}</h3>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: job?.description }}
              />
              <p className="mt-2 text-gray-600">
                Gender Preference: {job?.gender}
              </p>
              <button
                onClick={() => handleDeleteJob(job?._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg shadow hover:bg-red-600 transition flex items-center"
              >
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p>No job openings available.</p>
        )}
      </div>
    </div>
  );
}

export default JobOpening;
