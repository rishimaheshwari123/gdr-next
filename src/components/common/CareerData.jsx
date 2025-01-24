import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { jobPostings } from "@/data/careerData";

const JobPosting = ({ job, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border rounded-md mb-4 transition-all duration-500 ease-in-out">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{job.title}</h3>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="p-4 bg-white">
          <p className="whitespace-pre-line">{job.details}</p>
        </div>
      </div>
    </div>
  );
};

const JobList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {jobPostings.map((job, index) => (
        <JobPosting
          key={index}
          job={job}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default JobList;
