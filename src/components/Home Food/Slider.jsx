"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";

function HeroSlider() {
  // Hardcoded slider data
  const slider = [
    {
      _id: "6682639df9a5891201ae43dd",
      title: "All Kinds of Dry Fruits",
      desc: " Explore our premium selection of dry fruits, including almonds, cashews, walnuts, raisins, and more. Our dry fruits are sourced from the best regions, ensuring you receive only the freshest and highest quality products for your daily snacking and culinary needs.",
      image:
        "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719821220/INEXT/jmtdvvc7ofy36i9ipstl.jpg",
    },
    {
      _id: "668263caf9a5891201ae43df",
      title: "Minral Water",
      desc: "Discover the purity of Minral Water, sourced from the finest natural springs. Our water is carefully filtered and packaged to maintain its refreshing taste and essential minerals, making it the perfect choice for hydration and overall well-being.",
      image:
        "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719821265/INEXT/wrjwsqb1tfuotdpcgpqd.png",
    },
    {
      _id: "6682641cf9a5891201ae43e5",
      title: "All Types of Vinegar",
      desc: " Elevate your culinary creations with our premium Vinegar, available in a variety of flavors, including apple cider, balsamic, and white vinegar. Perfect for cooking, marinating, and dressing, our vinegar adds a tangy zest to your dishes, enhancing flavors and promoting a healthy lifestyle.",
      image:
        "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719821347/INEXT/fficfzyq0hv8wuxfxkaf.jpg",
    },
    {
      _id: "66a4f936d5954d17852bac98",
      title: "All Types Achhar",
      desc: "Savor the traditional flavors of India with our diverse range of Achhar (pickles).From tangy mango and spicy lime to mixed vegetable and chili pickles, our Achhar selection is made from fresh ingredients and authentic spices, adding a burst of flavor to every meal",
      image:
        "https://res.cloudinary.com/dsvotvxhq/image/upload/v1722087734/INEXT/sqeyiwkkucmue9wnpooz.jpg",
    },
  ];

  return (
    <div className="relative w-full lg:h-[80vh] md:h-[70vh] h-[50vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 w-full h-full"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={item._id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            <div className="absolute inset-0 flex items-start justify-center z-20 p-4 lg:w-[58vw] w-[100vw] flex-col">
              <div className="text-white">
                <h6 className="text-xl font-bold mb-4">
                  Welcome to{" "}
                  <span className="flip-text text-[#e2571a]">Aamaras</span>
                </h6>

                <p className="text-3xl sm:text-xl md:text-xl lg:text-6xl xl:text-7xl font-bold font-sans">
                  {item.title}
                </p>

                <p className="text-xl mt-3">{item.desc}</p>
              </div>

              <Link
                href="/ri-si-food/product"
                className="bg-[#e2571a] p-2 mt-5 px-5 font-sans font-semibold uppercase hover:bg-[#5A5A5A] hover:text-white transition duration-300 ease-in-out"
              >
                View All Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
