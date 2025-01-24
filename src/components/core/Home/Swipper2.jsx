"use client";
import { useState } from "react";
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
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Use Link from next/link

const Swipper2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const work = [
    {
      id: 1,
      text: "Premium Milk & Dairy Pvt. LTD.",
      image:
        "https://www.bruker.com/en/applications/food-analysis-and-agriculture/food-quality/milk-and-dairy/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1920.jpeg/1596451146895/milk-dairy.jpeg",
      description:
        "Trusted supplier of fresh, high-quality milk and dairy products.",
      path: "/premium-dairy/home",
    },
    {
      id: 2,
      image:
        "https://shyamdairy.com/wp-content/uploads/slider/cache/a88cd27a959f7b4c0160d66730e6ff77/Shyam-Dairy-Group-of-Products.jpg",
      text: "Pure Dairy Solutions",
      description:
        "Providing fresh milk and dairy solutions with a commitment to quality.",
      path: "/pure-dairy/home",
    },
    {
      id: 3,
      image:
        "https://www.krishinutrition.com/wp-content/uploads/2021/03/Cattle-Feed.jpg",
      text: "Cattle Nutrition Co.",
      description: "High-quality cattle feed for healthy livestock growth.",
      path: "/cattle-nutrition/home",
    },
    {
      id: 4,
      image: "https://welthi.com/uploads/images/2022/01/17891583297072.jpg",
      text: "Nirvdit Dairy Products Pvt. LTD.",
      description:
        "Delivering top-notch dairy products with a focus on purity and freshness.",
      path: "/nirvdit-dairy/home",
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
        onSlideChange={({ activeIndex }) => {
          setCurrentIndex(activeIndex);
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
              <div className="w-full lg:h-[80vh] h-[45vh] relative">
                <Image
                  src={item.image}
                  alt={item.text}
                  layout="fill"
                  objectFit="cover"
                  className=""
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

export default Swipper2;
