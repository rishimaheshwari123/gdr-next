"use client";
import { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image"; // Using next/image for optimized image loading
import axios from "axios";
import Link from "next/link"; // Using Next.js Link component for routing

const work = [
  {
    id: 1,
    image: "/assets/home/blog/h1.jpg",
    text: "Creating a Photography Website? Development Costs and Options Available",
    date: "January 5, 2023",
  },
  {
    id: 2,
    image: "/assets/home/blog/h2.jpg",
    text: "Best Website Builder for Small Businesses in 2024",
    date: "February 12, 2023",
  },
  {
    id: 3,
    image: "/assets/home/blog/h3.jpg",
    text: "Best Time to Post on Social Media Channels for Better Growth",
    date: "March 8, 2023",
  },
  {
    id: 4,
    image: "/assets/home/blog/h4.jpg",
    text: "Website Redesigning Cost India: How Much Does it Cost?",
    date: "April 15, 2023",
  },
  {
    id: 5,
    image: "/assets/home/blog/h5.jpg",
    text: "Digital Marketing Packages: How Much Does Digital Marketing Cost in India?",
    date: "May 20, 2023",
  },
  {
    id: 6,
    image: "/assets/home/blog/h6.jpg",
    text: "Website Pricing: How Much Does Website Development Cost in India?",
    date: "June 25, 2023",
  },
  {
    id: 7,
    image: "/assets/home/blog/h7.jpg",
    text: "How To Change Facebook Page Name in 2024?",
    date: "July 5, 2023",
  },
  {
    id: 8,
    image: "/assets/home/blog/h8.jpg",
    text: "Types of Websites: What Are The Different Types of Websites in 2024?",
    date: "August 10, 2023",
  },
];

const Blog = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [blog, setBlog] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blog/getAll`);

      if (response?.data?.success) {
        setBlog(response.data.blogs);
      }
      console.log(response.data.blogs);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative mt-2 max-w-7xl mx-auto px-5 ">
      <p className="text-center text-4xl font-semibold my-10">Latest Blog</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {blog.map((item) => (
          <SwiperSlide key={item._id}>
            <Link href={`/news/${item._id}`}>
              <div className="flex flex-col items-center h-[80vh] bg-white shadow-lg rounded-lg overflow-hidden ">
                <Image
                  src={item.image}
                  alt="Service"
                  width={500}
                  height={400}
                  className="w-full h-[60vh] object-cover"
                />
                <div className="p-4 flex flex-col items-start flex-grow">
                  <h3 className="text-lg font-semibold mb-2 p-5">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-500 px-5">
                    <FaCalendarAlt className="mr-2" />
                    <span>{formatDate(item.createdAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
