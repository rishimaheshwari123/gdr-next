import React from "react";
import Link from "next/link";
import Image from "next/image";
import n from "@/assests/nir.jpg";
import gdr from "@/assests/logos/gdrgruop.jpg";

const services = [
  {
    image: gdr,
    title: "GDR Agrifeed Private Limited",
    subtitle: "GDR Group 72",
    description:
      "Leader in premium animal feed manufacturing and supply.",
    link: "/",
  },
  {
    image:
      "https://media.istockphoto.com/id/824351914/photo/distribution-warehouse-with-trucks-of-different-capacity.jpg?s=612x612&w=0&k=20&c=-aeDD6vTkJZ9c_Sg_xFPZKpn10HNPczG8AKYPRcWvFs=",
    title: "RKS Infrabuild & Homes Pvt. LTD.",
    subtitle: "Excellent Home",
    description:
      "Real estate company focusing on the sale of agricultural lands with expert guidance.",
    link: "/rks-homes/home",
  },
  {
    image:
      "https://wallpapers.com/images/hd/real-estate-digital-art-0kmi22tcj2x60lim.jpg",
    title: "New RK Construction",
    subtitle: "Best Service Ever",
    description:
      "Leading construction company specializing in civil works for both government and private bodies.",
    link: "/construction/home",
  },


  {
    image: n,
    title: "Nirvdit All Making Products Private Limited",
    subtitle: "Best Quality Assurance",
    description:
      "Manufacturer of milk products like butter, clarified butter, and ice cream.",
    link: "/srs-foods/home",
  },
    {
    image:
      "/aamrasImage.jpeg",
    title: "Aamaras",
    subtitle: "Best Quality Assurance",
    description:
      "Specializes in selling high-quality spices and dry food items for home cooking.",
    link: "/ri-si-food/home",
  },
];

const Services = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Services</h3>
        <h2 className="hidden">Bhopal Farmhouse</h2>
        <h2 className="hidden">Buy commercial property in bhopal</h2>

        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-yellow-400"></div>
          <div className="h-1 w-1 bg-yellow-400 rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-yellow-400 rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-yellow-400 rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#e2571a" }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={service.image}
              alt={`Service ${index + 1}`}
              className="w-full h-64 object-cover"
              width={500}
              height={250}
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
              <h6 className="text-xl font-bold">{service.title}</h6>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <Link
                href={service.link}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
