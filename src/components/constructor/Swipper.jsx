"use client";
import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

import image2 from "@/assests/constructor/c2.png";
import i1 from "@/assests/swipper/1.jpeg";
import i2 from "@/assests/swipper/2.jpg";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const work = [
    {
      id: 1,
      image: i1,
      title: "Your Vision. Our Mission.",
      headline: "We Help To Build Your Dream",
      description:
        "Our vans are fitted with high pressure jetting units which will clear blocked drain safely, easily and professionally.",
      buttonText: "CONTACT US",
      buttonLink: "#",
    },
    {
      id: 2,
      image: i2,
      title: "Innovative Solutions",
      headline: "Building a Brighter Future",
      description:
        "We offer a wide range of construction services to make your dream home a reality.",
      buttonText: "LEARN MORE",
      buttonLink: "#",
    },
    {
      id: 3,
      image: image2,
      title: "Quality & Reliability",
      headline: "Your Trust, Our Commitment",
      description:
        "We ensure that every project is completed with the highest standards.",
      buttonText: "EXPLORE",
      buttonLink: "#",
    },
  ];

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <div className="relative w-full h-[80vh] ">
              <Image
                src={item.image}
                alt="Service"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-10 transition-opacity duration-1000 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="max-w-lg text-left bg-gray-700 p-8">
                <p className="text-orange-500 text-sm font-bold mb-2">
                  {item.title}
                </p>
                <h6 className="text-white text-3xl md:text-5xl font-bold mb-4">
                  {item.headline}
                </h6>
                <p className="text-gray-200 text-lg mb-6">{item.description}</p>
                <Link href={item.buttonLink} passHref>
                  <p className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                    {item.buttonText}
                  </p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
