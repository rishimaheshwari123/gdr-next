"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Services from "@/components/core/Home/Services";
import MainCommon from "@/components/common/MainCommon";
import service from "@/assests/service.png";
const Service = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="w-full h-[85vh] ">
          <Image
            src={service}
            alt="Our Services"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="absolute flex flex-col items-center text-center">
          <h6 className="text-4xl md:text-6xl text-white font-bold">
            Our Services
          </h6>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>
      <Services />
      <MainCommon />
    </div>
  );
};

export default Service;
