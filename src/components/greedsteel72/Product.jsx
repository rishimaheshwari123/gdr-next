import React from "react";

const services = [
  {
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/02/10-STAINLESS-STEEL-REBAR.webp",
    title: "Structural Steel",
    description:
      "Steel rebar, often known as reinforcing or fortifying steel, is used as a strain device in reinforced concrete or masonry structures. It is made of carbon steel and has edges for mechanically fastening it down in a superior path in the solid. It holds the solid under pressure and is available in various grades with different yield strengths, necessary elasticity, chemical composition, and elongation percentage parameters. Rebar steel offers durability and aesthetic appeal, as well as local resistance and stiffness that extend across a large area where other types of steel aren’t often prepared. It has a large extension potential and comes in various sizes according to the country and level of development",
  },
  {
    image: "https://gdrgroup.in/wp-content/uploads/2023/02/012.webp",
    title: "Rebar Steel",
    description:
      "This type of steel is used to make structural steel shapes because it is made from a detailed cross-section while adhering to strict mechanical and chemical composition norms. Varying countries have different requirements for standard structural steel. Structural steel is ductile, sturdy, and durable, and it can be molded into almost any shape depending on the construction; it may be built almost immediately after arriving at the construction site. Structural steel is fire-resistant in and of itself, but fire protection should be supplied if it becomes overheated to the degree that it begins to lose strength. Corrosion must be avoided when employing structural steel, although towering buildings can withstand various disasters when constructed with structural steel",
  },
  {
    image: "https://gdrgroup.in/wp-content/uploads/2023/02/011.webp",
    title: "TMT Steel",
    description:
      "This type of steel is used to make structural steel shapes because it is made from a detailed cross-section while adhering to strict mechanical and chemical composition norms. Varying countries have different requirements for standard structural steel. Structural steel is ductile, sturdy, and durable, and it can be molded into almost any shape depending on the construction; it may be built almost immediately after arriving at the construction site. Structural steel is fire-resistant in and of itself, but fire protection should be supplied if it becomes overheated to the degree that it begins to lose strength. Corrosion must be avoided when employing structural steel, although towering buildings can withstand various disasters when constructed with structural steel",
  },
];

const Product = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Iron Products</h3>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#e2571a]"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#e2571a" }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={`Service ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            {/* Shaded overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            {/* Overlay for Title and Subtitle */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-full">
              <h6 className="text-xl font-bold">{service.title}</h6>
              <p className="text-sm">{service.subtitle}</p>
            </div>
            {/* Hidden content */}
            <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
