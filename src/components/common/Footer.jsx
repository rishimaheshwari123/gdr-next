"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";
import { MdEmail, MdLocationCity } from "react-icons/md";
import { useSelector } from "react-redux";
import Link from "next/link";
import ShareButtons from "../ShareButtons";

const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client-side
  }, []);

  if (!isClient) {
    return null; // Prevent SSR mismatch until the component is client-side
  }

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className=" ">
            <h6 className="text-xl font-semibold mb-4">About Us</h6>
            <hr className="my-4" />
            <p>
              GDR Group 72 is a group of companies that was established in 2005,
              with a primary focus on the real estate, agricultural
              construction, construction and manufacturing industries. Through
              the years the company has expanded it’s operations, and has made
              substantial contributions to these industries.
            </p>
            <div className="mt-4">
              <img
                src="https://jharkhanditservices.com/images/icons/Review1.png"
                alt="Ratings"
                className="h-16"
              />
            </div>
            <ShareButtons />
          </div>
          <div className="grid  grid-cols-2 gap-8 lg:gap-10 px-5">
            <div className="">
              <h6 className="text-xl font-semibold mb-4">Our Companies</h6>
              <hr className="my-4" />
              <ul className="grid gap-2">
                <Link href="/construction/home">
                  <p>New RK Construction</p>
                </Link>

                <Link href="/rks-homes/home">
                  <p>RKS Homes</p>
                </Link>
                <Link href="/srs-foods/home">
                  <p>Nirvdit All Making Products Private Limited</p>
                </Link>

                <Link href="/ri-si-food/home">
                  <p>Parthavi Home Food</p>
                </Link>
              </ul>
            </div>
            <div className="">
              <h6 className="text-xl font-semibold mb-4">Quick Links</h6>
              <hr className="my-4" />
              <ul className="grid gap-2">
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/about">
                  <p>About</p>
                </Link>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
                {token ? (
                  <Link href="/admin/dashboard">
                    <p>Admin Login</p>
                  </Link>
                ) : (
                  <Link href="/login">
                    <p>Admin Login</p>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div className="px-5">
            <h6 className="text-xl font-semibold mb-4">Contact Us</h6>
            <hr className="my-4" />
            <ul className="grid gap-3  ">
              <li className="flex gap-2">
                <MdLocationCity size={22} className="" /> Janki Nagar, Neelkant
                Mahadev Mandir, Near Mashroom Factory Ratibad Bhopal
              </li>
            </ul>
            <ul className="grid my-1">
              <li className="flex gap-2 items-center">
                {" "}
                <FaPhone size={15} />
                98937 30005
              </li>
            </ul>
            <ul className="grid my-1">
              <li className="flex gap-2 items-center">
                {" "}
                <MdEmail size={15} />
                rkshomes30@gdrgroup72.com
              </li>
              <li className="flex gap-2 items-center">
                <MdEmail size={15} /> srsmilkfood@gdrgroup72.com
              </li>
              <li className="flex gap-2 items-center">
                <MdEmail size={15} /> praharshconstruction@gdrgroup72.com
              </li>
              <li className="flex gap-2 items-center">
                <MdEmail size={15} /> ri.si.homefood@gmail.com ​​
              </li>
              <li className="flex gap-2 items-center">
                {" "}
                <MdEmail size={15} /> ruchir@gdrgroup72.com
              </li>
            </ul>
            <div className="mt-5 flex space-x-4">
              <Link href="https://www.facebook.com/RKSHOME.CO.IN" passHref>
                <FaFacebook className="h-6 w-6" />
              </Link>

              <Link href="https://www.instagram.com/rks.homes/" passHref>
                <FaInstagram className="h-6 w-6" />
              </Link>

              <Link href="https://www.youtube.com/@rkshomes5376" passHref>
                <FaYoutube className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
                passHref
              >
                <SiMaplibre className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <div className="flex items-center bg-green-500 rounded-full p-2 space-x-2 text-white hover:bg-green-600 transition w-fit px-5 mt-5 duration-300">
                <FaWhatsapp size={34} />
                <a
                  href="https://wa.me/+919893730005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm"
                >
                  WhatsApp
                  <span className="block text-sm font-normal">
                    Click to Chat
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-10 border-t border-blue-800 pt-4">
          <p>Made By I NEXT ETS ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
