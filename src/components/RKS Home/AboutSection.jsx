import React from "react";
import {
  FaHome,
  FaLandmark,
  FaMoneyBill,
  FaMapSigns,
  FaWarehouse,
  FaBullhorn,
} from "react-icons/fa";

const offerings = [
  {
    title: "Properties",
    description:
      "Our properties are located throughout the region, offering a variety of options including fertile soil, convenient access to markets, and peaceful settings.",
    icon: <FaHome className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Land Types",
    description:
      "We offer small hobby farms, large commercial operations, and everything in between. Suitable for vegetable farming, commercial gardening, organic farming, and more.",
    icon: <FaLandmark className="h-8 w-8 text-green-500" />,
  },
  // {
  //   title: "Financing",
  //   description: "We offer financing options to make the process of purchasing land easier. With RKS Homes, you can trust that you are in good hands.",
  //   icon: <FaMoneyBill className="h-8 w-8 text-yellow-500" />,
  // },
  {
    title: "Land Availability",
    description:
      "More than 10,890 acres of land available for farming. Best suitable for vegetable farming, commercial gardening, organic farming, botanical gardens, and bulk farming activities.",
    icon: <FaMapSigns className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Additional Uses",
    description:
      "Lands suitable for warehouses, daily farming, cattle and livestock business, mushroom farming, Musli farming, poultry farms, and more.",
    icon: <FaWarehouse className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Investment Opportunity",
    description:
      "RKS Homes offers you a trustworthy investment opportunity in agriculture and commercial farmland with a 100% guaranteed return.",
    icon: <FaBullhorn className="h-8 w-8 text-teal-500" />,
  },
];

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-3xl font-extrabold text-gray-600">
            About RKS Infrabuild & Homes Pvt. Ltd.
          </h6>
          <p className="mt-4 text-lg text-gray-600">
            RKS Homes is a real estate company specializing in the sale of
            agricultural lands. We are committed to helping our clients find the
            perfect piece of land for their farming or ranching needs. Our team
            of real estate professionals has extensive knowledge of the local
            agricultural market and can provide valuable insights and guidance
            to help our clients make informed decisions.
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

export default AboutSection;
