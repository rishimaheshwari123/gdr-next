import React from "react";
import {
  FaSeedling,
  FaGlobe,
  FaBalanceScale,
  FaHandsHelping,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaBalanceScale className="text-[150px] text-green-600 mr-4" />,
    title: "Premium Quality Assurance",
    description:
      "At SRS Home Food, quality is our cornerstone. We meticulously source the finest grains and spices, ensuring each product meets our rigorous quality standards to delight your palate.",
  },
  {
    icon: <FaGlobe className="text-[150px] text-blue-600 mr-4" />,
    title: "Global Sustainability Commitment",
    description:
      "Dedicated to sustainability, we practice responsible sourcing and eco-friendly packaging. Our diverse range of products not only meets high-quality standards but also supports environmental well-being.",
  },
  {
    icon: <FaSeedling className="text-[150px] text-green-600 mr-4" />,
    title: "Rich Culinary Diversity",
    description:
      "Explore a world of flavors with our extensive selection of millets, rice, frozen foods, and spices. As a top exporter in Surat, we cater to diverse culinary preferences with premium ingredients.",
  },
  {
    icon: <FaHandsHelping className="text-[150px] text-blue-600 mr-4" />,
    title: "Personalized Customer Care",
    description:
      "Experience exceptional service tailored to your needs. From prompt responses to personalized attention, we prioritize your satisfaction as your trusted grain and spice supplier.",
  },
];

const WhyChooseRISI = () => {
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
          Discover why RISI Home qFoods stands out as your premier choice for
          sourcing exceptional culinary delights.
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

export default WhyChooseRISI;
