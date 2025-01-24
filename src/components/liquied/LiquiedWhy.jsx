import React from "react";
import { FaFlask, FaGlobe, FaIndustry, FaHandsHelping } from "react-icons/fa";

const sections = [
  {
    icon: <FaFlask className="text-[150px] text-teal-600 mr-4" />,
    title: "Unmatched Product Quality",
    description:
      "At RRS Liquid Products, quality is our top priority. We ensure that each liquid product is meticulously crafted to meet the highest industry standards, delivering exceptional results for your business.",
  },
  {
    icon: <FaGlobe className="text-[150px] text-blue-600 mr-4" />,
    title: "Global Reach & Reliability",
    description:
      "With a strong global distribution network, RRS Liquid Products is trusted worldwide for timely and reliable delivery. Our products reach markets across the globe, ensuring your supply chain remains uninterrupted.",
  },
  {
    icon: <FaIndustry className="text-[150px] text-green-600 mr-4" />,
    title: "Innovative Manufacturing Processes",
    description:
      "Our advanced manufacturing processes incorporate the latest technologies to produce high-quality liquid products efficiently and sustainably, meeting the dynamic needs of various industries.",
  },
  {
    icon: <FaHandsHelping className="text-[150px] text-purple-600 mr-4" />,
    title: "Dedicated Customer Support",
    description:
      "RRS Liquid Products offers personalized customer service, ensuring you receive the support you need. From expert guidance to responsive assistance, we are here to help your business thrive.",
  },
];

const LiquiedWhy = () => {
  return (
    <div className="w-11/12 mx-auto py-8 px-4">
      <div className="w-full flex justify-between flex-wrap gap-3">
        <div>
          <p className="text-[#df794d] font-sans italic lg:text-2xl text-xl">
            Why Choose Us
          </p>
          <p className="lg:text-5xl text-4xl text-[#33536B] font-semibold font-sans">
            Why Choose Us
          </p>
        </div>

        <div className="lg:w-[50%] w-full">
          Discover why RRS Liquid Products stands out as your premier choice for
          sourcing high-quality liquid solutions.
        </div>
      </div>

      <div className="flex flex-wrap justify-center -mx-4 mt-[50px]">
        {sections.map((section, index) => (
          <div key={index} className="w-full sm:w-1/2 px-4 mb-8">
            <div className="flex items-center">
              {section.icon}
              <div>
                <h6 className="text-xl mb-2 text-[#33536B] font-sans">
                  {section.title}
                </h6>
                <p className="text-[#5A5A5A] text-sm lg:text-base">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiquiedWhy;
