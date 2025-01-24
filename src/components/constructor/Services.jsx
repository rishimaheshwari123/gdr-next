"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import briks from "@/assests/constructor/briks.jpeg";
import cement from "@/assests/constructor/cement.jpeg";
import craser from "@/assests/constructor/craser.jpg";
import el from "@/assests/constructor/el.png";
import iron from "@/assests/constructor/iron.jpg";
import sariya from "@/assests/constructor/sariya.jpeg";
import send from "@/assests/constructor/send.jpg";
import wire from "@/assests/constructor/wire.webp";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  { ssr: false }
);

const company = [
  {
    img: craser,
    title: "Crusher Plant",
    desc: "GDR Group's Crusher Plant is a state-of-the-art facility designed to efficiently break down large rocks and stones into various sizes for construction and industrial applications.",
  },
  {
    img: cement,
    title: "Cement Plant",
    desc: "GDR Group's Cement Plant is a leading facility in the production of high-quality cement, catering to the needs of various construction and infrastructure projects.",
  },
  {
    img: briks,
    title: "Bricks Plant",
    desc: "GDR Group's Bricks Plant is a cutting-edge facility dedicated to the production of high-quality bricks for various construction needs. Utilizing advanced manufacturing techniques, the plant produces durable bricks.",
  },
  {
    img: send,
    title: "Sand Plant",
    desc: "GDR Group's Sand Plant is a modern facility designed to produce high-quality sand for a variety of construction and industrial applications. The plant utilizes advanced processing techniques to ensure that the sand is of consistent size.",
  },
  {
    img: iron,
    title: "Iron Angle",
    desc: "GDR Group's Iron Angle is a high-quality steel product designed for structural and architectural applications. Iron angles, also known as L-beams or angle iron, are essential components in construction.",
  },
  {
    img: sariya,
    title: "Sariya",
    desc: "GDR Group's Sariya, also known as reinforcement bars or rebar, is a vital product in the construction industry, providing the necessary tensile strength to concrete structures.",
  },
  {
    img: wire,
    title: "Wire",
    desc: "GDR Group's Wire is a premium quality product designed to meet the diverse needs of various industries, including construction, manufacturing, and electrical applications. Known for its strength, flexibility, and durability.",
  },
  {
    img: el,
    title: "Electrical Material",
    desc: "GDR Group's Electrical Material offers a comprehensive range of high-quality products essential for safe and efficient electrical installations. Catering to residential, commercial, and industrial sectors.",
  },
];

const Company = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Services</h3>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#e2571a]"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#e2571a" }}
          ></div>
        </div>
      </div>
      <div className="main grid lg:grid-cols-3 gap-4 p-5 max-w-7xl mx-auto">
        <Slide direction="left">
          {company.map((currElem, index) => (
            <div
              key={index}
              className="relative card rounded-lg cursor-pointer group shadow-xl shadow-pink-500 h-96"
            >
              <div className="h-full relative">
                <Image
                  src={currElem.img}
                  alt={currElem.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-50%]"
                />
                <p className="absolute text-center bottom-0 left-0 w-full text-lg font-bold text-white bg-opacity-75 bg-gray-800 p-2 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                  {currElem.title}
                </p>
              </div>
              <div className="absolute inset-0 top-48 flex bg-yellow-500 p-4 text-gray-600 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <p className="z-10 text-sm">{currElem.desc}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Company;
