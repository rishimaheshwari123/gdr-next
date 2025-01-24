import React from "react";
import { FaCheckCircle, FaShieldAlt, FaIndustry } from "react-icons/fa";

const sections = [
  {
    icon: <FaCheckCircle size={50} className="text-green-500" />,
    title: "Reasons to Choose Shree Ji Cattle Feed",
    content: (
      <ul className="list-decimal ml-5">
        <li>High-tech, state-of-the-art technology</li>
        <li>High Quality standards</li>
        <li>Professionals with experience</li>
        <li>Completely equipped R&D unit</li>
        <li>Supply guaranteed at a minimum cost</li>
        <li>Qualitative range</li>
      </ul>
    ),
    description:
      "We provide products for cattle feed that are safe and hygienic for cattle. The products we offer are made with the highest quality raw ingredients. A few other characteristics of our business that have assisted us in reaching this level of success, are:",
  },
  {
    icon: <FaShieldAlt size={50} className="text-green-500" />,
    title: "Quality Policy",
    description:
      "At Shree Ji, we believe in our commitment towards customer service and quality. Quality is not just a secondary target for us, but it is our primary strategy to ensure our survival and strength to grow in the future. We have the ISI certification and UKAS certificate. Shree Ji Cattle Feed is involved in implementing an environmentally friendly and safe process for recycling and disposal of waste as well as fostering a robust environmental policy for the community. Our employees exhibit high-quality methods throughout the process, which is crucial to the safety and commitment to quality of the business. Our entire product line is produced to meet the most stringent standards of quality and conform to the expectations of our customers. We have an internal quality control department to ensure the high quality that is required to meet the requirements for safety and durability. Our entire supply chain adheres to the highest standards of quality that are followed globally.",
  },
  {
    icon: <FaIndustry size={50} className="text-green-500" />,
    title: "Infrastructure",
    description:
      "Shree Ji Cattle Feed is one of the biggest producers of cattle feed in central India with a modern and efficient infrastructure. Our labs are well-equipped to ensure that the highest quality raw materials are used to create a final product that is of the highest grade. Our manufacturing facility is modern and includes the most advanced technological equipment and state-of-the-art production machines. The manufacturing facility has the capacity to install a large amount of equipment to meet the ever-changing market demands. Some of the most effective machines we have in our unit include:",
    content: (
      <ul className="list-disc ml-5">
        <li>Stitching machines</li>
        <li>Machines for sealing</li>
        <li>Balances for weighing</li>
        <li>Automated form filling machines</li>
        <li>Storage plant</li>
      </ul>
    ),
  },
];

const WhyUs = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg lg:rotate-12 hover:rotate-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              {section.icon}
              <h6 className="text-2xl font-bold text-gray-600">
                {section.title}
              </h6>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            {section.content && (
              <div className="text-gray-600">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
