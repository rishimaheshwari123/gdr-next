"use client";
import React, { useState } from "react";
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
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // Use Next.js Image component
import { Router } from "next/router"; // Use Next.js Router for navigation
import god from "@/assests/god.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageControls = useAnimation();
  const textControls = useAnimation();
  // const router = useRouter(); // Use Next.js router

  const work = [
    {
      id: 1,
      text: "RKS Infrabuild & Homes Pvt. LTD.",
      image: god,
      description:
        "Expert in agricultural land sales with seamless financing options.",
      path: "/rks-homes/home",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/originals/94/41/f2/9441f2efd20b16f02e73b25b43181a8c.jpg",
      text: "New RK Construction",
      description:
        "Top player in civil works with a focus on quality and safety.",
      path: "/construction/home",
    },
    {
      id: 3,
      image:
        "/aamrasImage.jpeg",
      text: "Aamras",
      description: "Wide range of spices and dry foods for home cooking.",
      path: "/ri-si-food/home",
    },
    {
      id: 4,
      image: "https://welthi.com/uploads/images/2022/01/17891583297072.jpg",
      text: "Nirvdit All Making Products Private Limited",
      description:
        "High-quality dairy products with a focus on freshness and excellence.",
      path: "/srs-foods/home",
    },
  ];

  const imageAnimation = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
    transition: { duration: 0.5 },
  };

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5 },
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
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        onSlideChange={({ activeIndex }) => {
          setCurrentIndex(activeIndex);
          imageControls.start("animate");
          textControls.start("animate");
        }}
      >
        {work.map((item, index) => (
          <SwiperSlide key={item.id} className="relative">
            <motion.div
              className="relative"
              initial="initial"
              animate={index === currentIndex ? "animate" : "exit"}
              exit="exit"
              variants={imageAnimation}
            >
              <div className="relative w-full lg:h-[80vh] h-[45vh]">
                <Image
                  src={item.image}
                  alt={item.text}
                  className="object-cover"
                  layout="fill"
                  style={{ filter: "brightness(0.5)" }} // Darkens the image
                />
              </div>
            </motion.div>
            <motion.div
              className="absolute left-8 top-1/3 flex justify-start flex-col transform -translate-y-1/2 p-6"
              initial="initial"
              animate={index === currentIndex ? "animate" : "exit"}
              exit="exit"
              variants={textAnimation}
            >
              <p className="text-white text-xl md:text-2xl lg:text-7xl font-bold text-left mb-4">
                {item.text}
              </p>
              <p className="text-white text-sm md:text-lg lg:text-xl text-left mb-4 hidden lg:block">
                {item.description}
              </p>
              <button
                onClick={() => Router.push(item.path)} // Use Next.js router for navigation
                className="block border-2 border-white text-center py-2 text-white text-sm md:text-lg lg:text-xl rounded-lg transition-transform transform hover:scale-105"
                style={{ width: "200px" }}
              >
                Visit Now
              </button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
