import React from "react";
import {
  FaFlask,
  FaIndustry,
  FaHandHoldingWater,
  FaGlobe,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";

const offerings = [
  {
    title: "Liquid Products",
    description:
      "Our diverse range of liquid products caters to various industries, ensuring quality and consistency across chemical, pharmaceutical, and food sectors.",
    icon: <FaFlask className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Advanced Manufacturing",
    description:
      "With cutting-edge technology, our manufacturing processes guarantee top-tier liquid products that meet the strictest industry standards.",
    icon: <FaIndustry className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide customized liquid solutions designed to meet the unique requirements of your industry, ensuring efficiency and performance.",
    icon: <FaHandHoldingWater className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Global Distribution",
    description:
      "Our expansive global distribution network ensures that our liquid products are available to clients worldwide, delivered with reliability and speed.",
    icon: <FaGlobe className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Logistics Excellence",
    description:
      "We offer comprehensive logistics services, ensuring that our products are delivered safely and on time, every time.",
    icon: <FaTruck className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Investment Growth",
    description:
      "RRS Liquid Products provides lucrative investment opportunities in the liquid products sector, with a focus on innovation and market expansion.",
    icon: <FaChartLine className="h-8 w-8 text-teal-500" />,
  },
];

const LiquiedButtomSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-3xl font-extrabold text-gray-600">
            About RRS Liquid Products
          </h6>
          <p className="mt-4 text-lg text-gray-600">
            RRS Liquid Products is a premier provider of specialized liquid
            solutions for diverse industries. Our commitment to excellence
            drives us to offer top-quality products, reliable logistics, and
            innovative investment opportunities. With a global reach and a focus
            on customer satisfaction, RRS Liquid Products is your trusted
            partner in the liquid products industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6 flex items-start">
                <div className="mr-4">{offering.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquiedButtomSection;
