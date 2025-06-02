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
import Link from "next/link";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageControls = useAnimation();
  const textControls = useAnimation();
  // const router = useRouter(); // Use Next.js router

 const work = [
  {
    id: 1,
    text: "GDR Agrifeed Private Limited",
    image: "/slider2.jpeg", // Replace with actual image
    description: "GDR Group drives innovation and growth, managing diverse companies with strategic vision, operational excellence, and sustainable success.",
    path: "/",
  },
  {
    id: 2,
    text: "RKS Infrabuild & Homes Pvt. LTD.",
    image: god,
    description: "A trusted real estate name, specializing in land development, property sales, and purchases across premium residential and commercial sectors.",
    path: "/rks-homes/home",
  },
  {
    id: 3,
    text: "New R.K. Constructions",
    image: "https://i.pinimg.com/originals/94/41/f2/9441f2efd20b16f02e73b25b43181a8c.jpg",
    description: "A leader in construction, delivering quality infrastructure solutions for government and private sectors with a focus on excellence and timeliness.",
    path: "/construction/home",
  },
  {
    id: 4,
    text: "Nirvdit All Making Products Private Limited",
    brand: "Parthvi",
    image: "/slider1.jpg",
    description: "High-quality dairy products with a focus on freshness and excellence.Quality-focused manufacturer of cattle feed, food essentials, and groceries, delivering premium standards and freshness in every product we offer.",
    path: "/srs-foods/home",
  },
  {
    id: 5,
    text: "Aamars All Making Products Private Limited",
    brand: "Ruchir",
    image: "https://img.freepik.com/premium-photo/seasonings-wooden-table-background-spices-herbs_84485-752.jpg",
    description: "A trusted brand in cattle feed, food, and grocery manufacturing—delivering quality, value, and reliability to homes, farms, and businesses.",
    path: "/ri-si-food/home",
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
  <p className="text-white text-xl md:text-2xl lg:text-7xl font-bold text-left mb-2">
    {item.text}
  </p>
  
  {item.brand && (
    <p className="text-white text-lg md:text-xl lg:text-3xl italic mb-2">
      (Brand Name: {item.brand})
    </p>
  )}

  <p className="text-white text-sm md:text-lg lg:text-xl text-left mb-4 hidden lg:block">
    {item.description}
  </p>
  
  <Link
    href={item.path}
    className="block border-2 border-white text-center py-2 text-white text-sm md:text-lg lg:text-xl rounded-lg transition-transform transform hover:scale-105"
    style={{ width: "200px" }}
  >
    Visit Now
  </Link>
</motion.div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
