"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import home1 from "@/assests/home/1.webp";
import home2 from "@/assests/home/2.webp"; // import missing home2 image
import home3 from "@/assests/home/3.webp"; // import missing home3 image
import home4 from "@/assests/home/4.jpg";
import home5 from "@/assests/home/5.jpeg";
import home6 from "@/assests/home/6.jpg";
import home7 from "@/assests/home/7.jpg";
import home8 from "@/assests/home/8.jpg";
import c1 from "@/assests/constructor/c5.jpg";
import c2 from "@/assests/constructor/c6.jpg"; // import missing home2 image
import c3 from "@/assests/constructor/c7.jpg"; // import missing home3 image
import c4 from "@/assests/constructor/c8.jpg";
import dudh from "@/assests/dudh.jpg"; // import missing home3 image
import ghee from "@/assests/ghee.jpg";
import gdr from "@/assests/logos/gdrgruop.jpg";
import amars from "@/assests/logos/rfood.jpg";

// new GDR
import IMAGE1 from "@/assests/gdr/3.jpg";
import IMAGE2 from "@/assests/gdr/2.jpeg";
import IMAGE3 from "@/assests/gdr/1.jpg";
import IMAGE4 from "@/assests/gdr/7.jpg";
import IMAGE5 from "@/assests/gdr/5.png";
import IMAGE6 from "@/assests/gdr/10.jpg";
import IMAGE7 from "@/assests/gdr/4.jpg";
import IMAGE8 from "@/assests/gdr/11.jpg";

// NIRVDIT

import nir1 from "@/assests/nirvdit/4.jpg";
import nir2 from "@/assests/nirvdit/2.jpg";
import nir3 from "@/assests/nirvdit/3.jpeg";
import nir4 from "@/assests/nirvdit/10.png";
import nir5 from "@/assests/nirvdit/11.jpg";
import nir6 from "@/assests/nirvdit/8.jpg";
import nir7 from "@/assests/nirvdit/9.jpg";


// amars
import amasrs1 from "@/assests/milk/1.png";
import amasrs2 from "@/assests/milk/2.webp";
import amasrs3 from "@/assests/milk/3.jpg";
import amasrs4 from "@/assests/milk/4.jpg";
import amasrs5 from "@/assests/milk/5.webp";
import amasrs6 from "@/assests/milk/6.webp";
import amasrs7 from "@/assests/milk/7.png";

// LOGOS
import rkcons from "@/assests/logos/home.jpg"
import rkshomes from "@/assests/logos/rhome.jpg"
import nirvdit from "@/assests/nir.jpg"



const tabs = [
  { id: 5, name: "GDR Agrifeed Pvt. LTD", link: "/" ,image:gdr},

  { id: 2, name: "RKS Infrabuild & Homes Pvt. LTD", link: "/rks-homes/home" ,image:rkshomes},
  {
    id: 1,
    name: "New RK Construction",
    link: "/construction/home",
    image:rkcons
  },
  { id: 3, name: "Nirvdit All Making Products Private Limited",image:nirvdit },
  { id: 4, name: "AAMARS ALL MAKING PRODUCTS PRIVATE LIMITED", link: "/ri-si-food/home", image:amars },
];
const projects = {
  5: [
    {
      id: 1,
      name: "AAMARS ALL MAKING PRODUCTS PRIVATE LIMITED",
      src: amars,
      link: "/",
    },
  ],
  1: [
    {
      id: 1,
      name: "Infrastructure projects",
      src: c1,
      link: "/construction/home",
    },
    {
      id: 2,
      name: "Commercial buildings",
      src: c2,
      link: "/construction/home",
    },
    {
      id: 3,
      name: "Government facilities",
      src: c3,
      link: "/construction/home",
    },
    {
      id: 4,
      name: "Industrial sites",
      src: c4,
      link: "/construction-home",
    },
    {
      id: 5,
      name: "Industrial sites",
      src: "https://img.freepik.com/free-photo/construction-works-frankfurt-downtown-germany_1268-20907.jpg",
      link: "/construction-home",
    },
    {
      id: 6,
      name: "Industrial sites",
      src: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
      link: "/construction-home",
    },
    {
      id: 7,
      name: "Industrial sites",
      src: "https://static.vecteezy.com/system/resources/previews/025/500/683/non_2x/double-exposure-of-modern-building-under-construction-with-crane-and-sky-background-building-construction-engineering-project-ai-generated-free-photo.jpg",
      link: "/construction/home",
    },
    {
      id: 18,
      name: "Industrial sites",
      src: "https://static.vecteezy.com/system/resources/thumbnails/015/640/043/original/4k-swimming-pool-construction-site-fading-vertically-to-completion-video.jpg",
      link: "/construction/home",
    },
  ],
  2: [
    { id: 4, name: "Commercial 1", src: home1 },
    { id: 5, name: "Commercial 2", src: home2 },
    { id: 6, name: "Commercial 3", src: home3 },
    { id: 7, name: "Commercial 4", src: home4 },
    { id: 48, name: "Commercial 1", src: home5 },
    { id: 51, name: "Commercial 2", src: home6 },
    { id: 63, name: "Commercial 3", src: home7 },
    { id: 7555, name: "Commercial 4", src: home8 },
   
  
  ],

  3: [
    {
      id: 8,
      src: IMAGE6,
      name: "Cream",
      subname: "Best Cream",
      description: "We Have All Brands of Fresh Cream",
      link: "/construction-home",
    },
    {
      id: 9,
      src: nir1,
      name: "Dahi",
      subname: "Best Dahi",
      description: "We Have All Brands of Fresh Dahi",
      link: "/construction-home",
    },
    {
      id: 10,
      src: nir2,
      name: "Dudh",
      subname: "Best Dudh",
      description: "We Have All Brands of Fresh Dudh",
      link: "/construction-home",
    },
    {
      id: 11,
      src: nir3,
      name: "Ghee",
      subname: "Best Ghee",
      description: "We Have All Brands of Fresh Ghee",
      link: "/construction-home",
    },
   
   {
      id: 15,
      src: nir7,
      name: "Shake",
      subname: "Best Shake",
      description: "We Have All Brands of Fresh Shake",
      link: "/construction-home",
    }, 
    {
      id: 14,
      src: nir6,
      name: "Paneer",
      subname: "Best Paneer",
      description: "We Have All Brands of Fresh Paneer",
      link: "/construction-home",
    },
   
    
      {
      id: 13,
      src: nir5,
      name: "Mattha",
      subname: "Best Mattha",
      description: "We Have All Brands of Fresh Mattha",
      link: "/construction-home",
    },
    {
      id: 12,
      src: nir4,
      name: "Lassi",
      subname: "Best Lassi",
      description: "We Have All Brands of Fresh Lassi",
      link: "/construction-home",
    },
  ],

  4: [
     {
      id: 15,
      name: "Sugar Cane Vinegar",
      src: amasrs5,
    },
     {
      id: 17,
      name: "Sugar Cane Vinegar",
      src: amasrs6,
    },
    {
      id: 16,
      name: "Sugar Cane Vinegar",
      src: amasrs7,
    },
    {
      id: 10,
      name: "Sugar Cane Vinegar",
      src: amasrs1,
    },

    {
      id: 11,
      name: "Sugar Cane Vinegar",
      src: amasrs2,
    },
  
   
    {
      id: 14,
      name: "Sugar Cane Vinegar",
      src: amasrs4,
    },
   
    
   
     {
      id: 13,
      name: "Sugar Cane Vinegar",
      src: amasrs3,
    },
    {
      id: 18,
      name: "Minralas Water",
      src: "/2.jpg",
    },
  ],
  5: [
    {
      id: 1,
      name: "Development",
      src: IMAGE1,
      link: "/",
    },
    {
      id: 2,
      name: "Development",
      src: IMAGE2,
      link: "/",
    },
    {
      id: 3,
      name: "Agriculter",
      src: IMAGE3,
      link: "/",
    },
    {
      id: 4,
      name: "Agriculter",
      src: IMAGE4,
      link: "/",
    },
    {
      id: 5,
      name: "Agriculter",
      src: IMAGE5,
      link: "/",
    },
    
    {
      id: 6,
      name: "Agriculter",
      src: IMAGE6,
      link: "/",
    },
    {
      id: 7,
      name: "Agriculter",
      src: IMAGE7,
      link: "/",
    },
    {
      id: 8,
      name: "Agriculter",
      src: IMAGE8,
      link: "/",
    },
  ],
};

const Project = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (id) => {
    if (activeTab !== id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(id);
        setIsTransitioning(false);
      }, 300); // Match duration with CSS transition
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-[#18191b] py-10">
        {/* Tabs */}
        <div>
          <div
            role="tablist"
            className="flex flex-wrap gap-4 border-b justify-center border-gray-700 px-4"
          >
         {tabs.map((tab) => (
  <button
    key={tab.id}
    role="tab"
    aria-selected={activeTab === tab.id}
    aria-controls={`panel-${tab.id}`}
    className={`flex flex-col items-center gap-2 py-4 px-6 rounded-t-lg transition-colors duration-200 ${
      activeTab === tab.id
        ? "bg-yellow-600 text-white"
        : "text-white hover:text-yellow-400"
    }`}
    onClick={() => handleTabClick(tab.id)}
  >
    <Image
      src={tab.image}
      alt={tab.name}
      className="w-10 h-10 object-contain rounded"
    />
    {/* <span className="text-sm font-medium">{tab.name}</span> */}
  </button>
))}

          </div>
        </div>

        <div className="py-5">
          {projects[activeTab] ? (
            <div
              role="tabpanel"
              id={`panel-${activeTab}`}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {projects[activeTab]?.map((project) => (
                <Link
                  href={activeTab.link || "/construction/home"}
                  key={project.id}
                  className="relative overflow-hidden group rounded-lg shadow-lg"
                >
                  <Image
                    src={project.src}
                    alt={project.name}
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-lg font-medium px-4 text-center">
                      {project.name}
                    </span>
                  </div> */}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              No projects found for this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
