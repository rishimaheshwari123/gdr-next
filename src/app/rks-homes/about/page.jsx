"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import CompanyDetails from "../../../components/CompanyDetails";
import Devision from "../../../components/common/Devision";

const RksAbout = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-4xl font-extrabold text-gray-600 mb-6">
              RKS Infrabuild & Homes Pvt. Ltd.{" "}
            </h6>
            <p className="text-lg text-gray-600 mb-4">
              RKS Infrabuild & Homes Pvt. LTD is a real estate company specializing in the sale of
              agricultural lands. We are committed to helping our clients find
              the perfect piece of land for their farming or ranching needs. Our
              team of real estate professionals has extensive knowledge of the
              local agricultural market and can provide valuable insights and
              guidance to help our clients make informed decisions.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              At RKS Infrabuild & Homes Pvt. LTD, we understand that purchasing agricultural land is a
              significant investment and we strive to make the process as smooth
              and stress-free as possible. We offer a wide range of properties
              including small hobby farms, large commercial operations, and
              everything in between.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our properties are located throughout the region, giving our
              clients a variety of options to choose from. Whether you are
              looking for fertile soil, convenient access to markets, or a
              peaceful and serene setting, we can help you find the perfect
              piece of land to meet your needs. In addition to our expert
              knowledge and wide range of properties, we also offer financing
              options to make the process of purchasing land even easier. With
              RKS Infrabuild & Homes Pvt. LTD, you can trust that you are in good hands and will be
              able to find the perfect piece of land to suit your needs.
            </p>
            <motion.button
              className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-blue-700 flex items-center transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <BsArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Image and Video Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-xl group">
              {/* Image */}
              <motion.img
                src="https://img.freepik.com/free-vector/building-house-structure-flat-design_23-2147561234.jpg?w=740&t=st=1724415492~exp=1724416092~hmac=81b1aaf43aa647ef069800026a0d4aa27bc01a873317423351151fa74ab8c3a0"
                alt="About Us"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:opacity-0"
              />
              {/* Video */}
              <motion.video
                src="/video.mp4"
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
                autoPlay
                loop
                muted
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <br />
      <CompanyDetails />
      <Devision />
    </div>
  );
};

export default RksAbout;
