import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import rice  from "../../assests/category/rice.jpg"
import dry from "../../assests/category/dry.jpg"
import pulse from "../../assests/category/pulses.jpg"
import powder  from "../../assests/category/spice.jpg"
import vege from "../../assests/category/vegetable.jpg"
import spicekhada  from "../../assests/category/kahdespice.jpg"
import millet  from "../../assests/category/millet.jpg"
import fruits  from "../../assests/category/fruits.jpg"



const categories = [
  { name: 'Dry Fruits', image:dry , link: '/DryFruits' },
  { name: 'Millets', image: millet, link: `/Millet ` },
  { name: 'Pulses', image: pulse, link: '/Pulses' },
  { name: 'Spices', image: spicekhada, link: '/Spices' },
  { name: 'Vegetables', image: vege, link: '/Vegetable' },
  { name: 'Powders', image: powder, link: '/Powders' },
  { name: 'Rice', image: rice, link: '/Rice' },
  { name: 'Fruits', image: fruits, link: '/Fruits' },
];




const ProductSection = () => {


  return (
    <>
      <div className="container mx-auto mt-8 w-screen">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-4 lg:w-[60%] w-[90%] text-center text-[#33536B]">
            Discover Our Premium Selection
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

          <div className="text-[#5A5A5A] mt-3 lg:w-[60%] w-[90%] text-center">
            Explore a handpicked collection of premium grains, sourced and
            crafted with tradition and quality in mind.
          </div>
        </div>

        <div className="bg-gray-100 p-8">
  



        <div className="bg-gray-100 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Link to={`category${category.link}`} key={index} className="transform transition-transform hover:scale-105">
          <div
            className="relative bg-cover bg-center bg-no-repeat rounded-lg shadow-md overflow-hidden"
            style={{ backgroundImage: `url(${category.image})`, minHeight: '200px' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity opacity-100 ">
              <h3 className="text-white text-2xl font-semibold text-center">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>





    </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          className="bg-[#333333] text-white py-2 px-6 rounded-sm uppercase font-sans font-semibold hover:bg-[#e2571a] transition duration-300 ease-in-out"
          to="/product"
        >
          View All Products
        </Link>
      </div>
    </>
  );
};

export default ProductSection;
