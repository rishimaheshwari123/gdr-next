"use client";
import React, { useEffect, useState } from "react";
function AboutSection() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount >= 25 ? 25 : prevCount + 1));
    }, 10);

    if (count === 25) {
      clearInterval(interval); // Clear interval when count reaches 25
    }

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [count]); // Dependency on count ensures useEffect runs on count change

  return (
    <div className="w-11/12 mx-auto mt-20 mb-40 flex justify-between  flex-wrap-reverse">
      {/* Image Section */}
      <div className="relative lg:w-[44%] md:w-[44%] w-full">
        <img
          src="https://img3.exportersindia.com/product_images/bc-full/dir_56/1658058/freight-forwarding-agents_1145413.jpg"
          alt="Background"
          className="w-full h-[40vh] lg:h-full object-cover"
        />

        <div
          className="absolute bottom-8 right-4 text-white font-bold text-lg z-10 text-center bg-white lg:p-4 p-1 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <p className="lg:text-6xl text-[#e2571a]">{count}+</p>
          <p className=" text-[#5A5A5A]">Years of Experience</p>
        </div>
      </div>

      {/* Data Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6">
        <p className="text-[#e2571a] font-sans italic text-lg">
          About RKS Infrabuild & Homes Pvt. LTD.
        </p>
        <h6 className="text-[#33536B] lg:text-4xl md:text-4xl text-2xl font-sans font-bold mt-2 uppercase">
          Premier Supplier of Grains and Spices Based in Bhopal
        </h6>
        <p className="text-[#5A5A5A] mt-2 leading-relaxed text-[12px] lg:text-[14px]">
          RKS Infrabuild & Homes Pvt. LTD. is a dynamic import-export enterprise
          committed to facilitating seamless global trade. With a strong
          dedication to quality and integrity, we connect businesses around the
          world, bridging market gaps with efficiency and reliability. We
          emphasize ethical business practices and nurture trust-based
          relationships with our clients and partners. Our expansive network and
          in-depth understanding of international trade regulations ensure
          smooth transactions and mutually beneficial partnerships. As a leading
          grain and spice supplier in Surat, we provide our clients with
          top-quality products, delivered on time. Our expertise extends to
          exporting grains and spices from Surat, where we consistently uphold
          excellence in every shipment. At RISI Home Foods, our mission is to
          exceed expectations, fostering growth and prosperity for our clients
          and stakeholders.
        </p>
        <div className="mt-4">
          <button
            to="/product"
            className="bg-[#e2571a] text-white py-2 px-6 rounded-lg uppercase font-sans font-semibold hover:bg-[#5A5A5A] transition duration-300 ease-in-out"
          >
            Discover All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
