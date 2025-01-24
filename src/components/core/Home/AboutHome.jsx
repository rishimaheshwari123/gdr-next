"use client";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const AboutHome = () => {
  return (
    <div className="relative bg-gradient-to-r py-16 px-6 md:px-12 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-extrabold text-gray-700 mb-6">
            Welcome to <span className="text-yellow-500">GDR Group 72</span>
          </p>
          <p className="text-lg text-gray-600 mb-4">
            GDR Group 72 is a dynamic conglomerate engaged in diverse sectors
            including Agriculture, Dairy, Farm Land, and Commercial Property.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to cultivate opportunities that foster growth and
            development in rural communities, driving innovation and excellence
            across our ventures.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With a deep commitment to sustainability and progress, we aim to
            empower the future through our strategic initiatives and dedicated
            efforts.
          </p>
          <motion.button
            className="mt-6 px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-yellow-600 flex items-center transition duration-300"
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
            {/* Video */}
            <motion.video
              src="/video.mp4"
              className="inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHome;
