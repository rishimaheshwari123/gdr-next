import React from "react";

const Devision = () => {
  const items = [
    // {
    //   type: "Division",
    //   title: "Real Estate",
    //   description:
    //     "In the realm of Real Estate, we specialize in creating spaces that inspire, empower, and transform. From residential complexes to commercial properties, we leverage our industry knowledge and creative vision to deliver projects that exceed expectations and enrich lives.",
    // },
    {
      type: "Division",
      title: "Construction",
      description:
        "Our Construction division is at the forefront of building excellence. With a focus on quality craftsmanship, innovative design, and efficient project management, we bring visions to life, turning dreams into reality, one brick at a time.",
    },
    {
      type: "Division",
      title: "Home Food & Water",
      description:
        "Through our Consumer Goods division, we offer a wide range of products designed to enhance everyday living. From household essentials to lifestyle innovations, we are dedicated to providing unparalleled quality and value to our customers.",
    },
    {
      type: "Division",
      title: "Cattle Food & Milk Water",
      description:
        "Through our Consumer Goods division, we offer a wide range of products designed to enhance everyday living. From household essentials to lifestyle innovations, we are dedicated to providing unparalleled quality and value to our customers.",
    },
    // {
    //   type: "Vision",
    //   title: "Deliver Excellence",
    //   description:
    //     "We are committed to delivering excellence in every aspect of our operations, setting new standards of quality, innovation, and service.",
    // },
    // {
    //   type: "Vision",
    //   title: "Construction",
    //   description:
    //     "Our Construction division is at the forefront of building excellence. With a focus on quality craftsmanship, innovative design, and efficient project management, we bring visions to life, turning dreams into reality, one brick at a time.",
    // },
    // {
    //   type: "Vision",
    //   title: "Consumer Goods",
    //   description:
    //     "Through our Consumer Goods division, we offer a wide range of products designed to enhance everyday living. From household essentials to lifestyle innovations, we are dedicated to providing unparalleled quality and value to our customers.",
    // },
  ];

  const divisions = items.filter((item) => item.type === "Division");
  const visions = items.filter((item) => item.type === "Vision");

  return (
    <div className="py-10 bg-gray-50">
      <h6 className="text-3xl text-green-600 font-bold text-center mb-8">
        Our Divisions:
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20">
        {divisions.map((division, index) => (
          <div
            key={index}
            className="bg-green-100 p-6 rounded-lg shadow-md hover:bg-green-700 hover:text-white transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{division.title}:</h3>
            <p className="">{division.description}</p>
          </div>
        ))}
      </div>

      {/* <h6 className="text-3xl text-green-600 font-bold text-center my-8">
        Our Vision:
      </h6> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20">
        {visions.map((vision, index) => (
          <div
            key={index}
            className="bg-green-100 p-6 rounded-lg shadow-md hover:bg-green-700 hover:text-white  transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{vision.title}:</h3>
            <p className="text-gray-600">{vision.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devision;
