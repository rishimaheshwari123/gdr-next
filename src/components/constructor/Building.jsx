import React from "react";
import { FaBuilding, FaRoad, FaTools } from "react-icons/fa";

const Building = () => {
  const services = [
    {
      title: "Road Building ",
      description:
        "Praharsh Construction Company is a dynamic and reliable construction firm specializing in road building and infrastructure development",
      icon: <FaBuilding className="text-orange-500 w-10 h-10" />,
    },
    {
      title: "Highway Bridge",
      description:
        "A Highway Bridge is a critical infrastructure component designed to span over obstacles like rivers, valleys, or other roads, allowing the continuous flow of traffic on highways. These bridges are engineered to support heavy loads",
      icon: <FaRoad className="text-orange-500 w-10 h-10" />,
    },
    {
      title: "All Construction Work ",
      description:
        "All Construction Work encompasses a wide range of activities involved in building and infrastructure development. This includes residential, commercial, and industrial construction, as well as specialized projects like roadways, bridges, tunnels, and public facilities. It involves various stages such as planning",
      icon: <FaTools className="text-orange-500 w-10 h-10" />,
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className=" flex flex-col  w-full items-center">
        <h3 className="  text-4xl font-fjalla text-[#33536B]">
          Goverment Contract
        </h3>
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
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-6 bg-gray-900 p-2 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-white text-xl font-bold mt-12 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Building;
