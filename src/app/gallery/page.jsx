"use client";
import React, { useEffect, useState } from "react";

import h1 from "@/assests/home/h1.jpg";
import h2 from "@/assests/home/h2.jpg";
import h3 from "@/assests/home/h3.jpg";
import h4 from "@/assests/home/h4.jpg";

import c3 from "@/assests/constructor/craser.jpg";
import c4 from "@/assests/constructor/c8.jpg";
import ag from "@/assests/gallery/ag.jpg";
import fh from "@/assests/gallery/fh.jpg";
import fd from "@/assests/gallery/fd.jpg";
import college from "@/assests/gallery/collage.jpeg";
import re from "@/assests/gallery/re.jpeg";
import cl from "@/assests/gallery/cl.jpg";
import dahi from "@/assests/dahi.jpg";
import dudh from "@/assests/dudh.jpg";
import ghee from "@/assests/ghee.jpg";
import matha from "@/assests/matha.jpg";
import paneer from "@/assests/paneer.png";
import shak from "@/assests/shake.jpg";
import MainCommon from "@/components/common/MainCommon";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Aggriclture Lang",
    image: h1,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 2,
    name: "Aggriclture Lang",
    image: h4,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 3,
    name: "Aggriclture Lang",
    image: ag,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 4,
    name: "Farm House",
    image: fh,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 5,
    name: "Fully Developed Farm House",
    image: fd,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 6,
    name: "Farm House",
    image: h2,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 0,
    name: "Farm House",
    image: h3,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 7,
    name: "College",
    image: college,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 8,
    name: "Resort",
    image: re,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 9,
    name: "commercial land",
    image: cl,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },

  {
    id: 10,
    name: "Road",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Road_in_Norway.jpg/640px-Road_in_Norway.jpg",
    type: "New RK Construction",
  },
  {
    id: 11,
    name: "Hightways.",
    image:
      "https://images.cnbctv18.com/wp-content/uploads/2023/11/cube-highways-trust.png",
    type: "New RK Construction",
  },
  {
    id: 12,
    name: "Bridge",
    image:
      "https://sika.scene7.com/is/image/sika/glo-second-penang-bridge-02:16-9?wid=1920&hei=1080&fit=crop%2C1",
    type: "New RK Construction",
  },
  {
    id: 13,
    name: "Dam",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2018/10/dam.jpg",
    type: "New RK Construction",
  },
  {
    id: 14,
    name: "Nahar ",
    image: "https://img.jagranjosh.com/imported/images/E/Articles/Canal.jpg",
    type: "New RK Construction",
  },
  {
    id: 15,
    name: "Goverment Buildings ",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/10/12093520/Types-of-building-materials.jpg",
    type: "New RK Construction",
  },
  {
    id: 16,
    name: "House ",
    image:
      "https://website-data-pluckwalk.s3.ap-south-1.amazonaws.com/blogs-images/38h6fE1nuT49Zt2Za3kKhw.webp",
    type: "New RK Construction",
  },
  {
    id: 17,
    name: "Farm House ",
    image:
      "https://2.imimg.com/data2/NX/IF/MY-654968/farm-house-construction.jpg",
    type: "New RK Construction",
  },
  {
    id: 18,
    name: "Collage ",
    image: college,
    type: "New RK Construction",
  },
  {
    id: 19,
    name: "Land Development",
    image: c4,
    type: "New RK Construction",
  },
  {
    id: 20,
    name: " Development",
    image: c3,
    type: "New RK Construction",
  },
  {
    id: 21,
    name: "Cow Cattle Food",
    image:
      "https://azeuspelletmill.com/wp-content/uploads/2019/03/Cow-Feed-Pellets.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 22,
    name: "Buffalo Cattle Food",
    image: "https://5.imimg.com/data5/HL/UA/MY-33307328/dsc_0203-500x500.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 23,
    name: "Dog Cattle Food",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_27/2918166/190701-dog-food-eating-bowl-ac-527p.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 24,
    name: "Hourse Cattle Food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qyqrDYSOwq6930EZJkyr8O9BhrU0twnGsQ&shttps://hindhusthaan.in/wp-content/uploads/2019/03/maxresdefault-1024x576.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 25,
    name: "Cat Cattle Food",
    image:
      "https://image.chewy.com/catalog/cms/images/2024-CF_387-ContentBlock2A_2-NaturalFood-v2-original._SY382__V1712676262_.jpeg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 26,
    name: "Goat Cattle Food",
    image:
      "https://www.treehugger.com/thmb/Va_CF5poRP9hE7EsMGsZ4FQrzXA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/feed-and-tend-goats-3016793-05-a5a77fc6799d4bbdad2e87d8d6387dda.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 27,
    name: "Fish Cattle Food",
    image:
      "https://www.hosokawa-alpine.com/fileadmin/_processed_/0/5/csm_Fischfutter_30f3db244d.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 28,
    name: "Milk",
    image: dudh,
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 29,
    name: "Ghee",
    image: ghee,
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 30,
    name: "Mattha",
    image: matha,
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 31,
    name: "Paneer",
    image: paneer,
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 32,
    name: "Shake",
    image: shak,
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 33,
    name: "Dahi",
    image: dahi,
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 34,
    name: "Creame",
    image:
      "https://img.bebeautiful.in/www-bebeautiful-in/how-to-use-milk-cream-for-your-skin-600x350-picmobhome.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },
  {
    id: 35,
    name: "Sweet Shop",
    image:
      "https://content.jdmagicbox.com/comp/def_content/sweet_shops/default-sweet-shops-4.jpg",
    type: "Nirvdit All Making Products Private Limited",
  },

  // DryFruits
  {
    id: 36,
    name: "Makhana",
    image:
      "https://t3.ftcdn.net/jpg/04/48/23/16/360_F_448231665_VjDHDTJpPRx4xKivsmSJN88QqxXVh5D8.jpg",
    type: "Parthavi  Home Food Gallery",
  },
  {
    id: 37,
    name: "Cashew",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719310369/INEXT/qqpalnu6cmnxkz89iz2n.jpg",
    type: "Parthavi  Home Food Gallery",
  },
  {
    id: 38,
    name: "Almond",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719310441/INEXT/a0zuke3evn0fw4kvw7yz.jpg",
    type: "Parthavi  Home Food Gallery",
  },
  {
    id: 39,
    name: "Smart Bazaar",
    image:
      "https://www.infinitimall.com/wp-content/uploads/2023/04/Smart-Bazaar-Malad-Infiniti-Mal-1.jpg",
    type: "Parthavi  Home Food Gallery",
  },
  {
    id: 40,
    name: "Smart Bazaar",
    image:
      "https://i.ytimg.com/vi/IsxiHLGrKzI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAasjoHI4patOyWprH2ndRENP-9aQ",
    type: "Parthavi  Home Food Gallery",
  },

  // Millet
  // {
  //   id: 36,
  //   name: "Pearl Millet",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719471977/INEXT/n8fytp8pu2azjujawj05.jpg",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 37,
  //   name: "Sorghum",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472203/INEXT/zwcdngotgxpj08igfpim.jpg",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 38,
  //   name: "Finger Millet",
  //   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/QG/PN/VM/156307736/3-500x500.jpeg",
  //   type: "Aamras Gallery",
  // },

  // Pulses
  // {
  //   id: 39,
  //   name: "Green Gram (Mng Dal)",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472481/INEXT/kzuhyjo9bnjtnldju6fd.jpg",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 40,
  //   name: "Split Green Gram (Mung Dal)",
  //   image: "https://t4.ftcdn.net/jpg/01/83/47/67/360_F_183476704_WElLlOssc5NeZFYRNlI7BtebbjSMJFrf.jpg",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 41,
  //   name: "Yellow Lentils (Toor Dal)",
  //   image: "https://cdn.ecommercedns.uk/files/8/252318/9/27680479/yellow-lentils.jpg",
  //   type: "Aamras Gallery",
  // },

  // Spices
  {
    id: 41,
    name: "Black Paper",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719475282/INEXT/ap6w3nzo4x9sss7sibyo.webp",
    type: "Parthavi  Home Food",
  },
  {
    id: 42,
    name: "Cinnamon",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719475578/INEXT/dbi0su0ofwwims7j3rg0.jpg",
    type: "Parthavi  Home Food Gallery",
  },
  {
    id: 43,
    name: "Red Chilli",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719475760/INEXT/pp92egns6eokuc6rqk9i.jpg",
    type: "Parthavi  Home Food Gallery",
  },

  // Vegetable
  // {
  //   id: 45,
  //   name: "Ginger",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719476349/INEXT/o95pdidtmxj2vsf7blcd.webp",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 46,
  //   name: "Garlic",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719476439/INEXT/lw5zodvwlfbwnorfnqkh.jpg",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 47,
  //   name: "Green Chilli",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504391/INEXT/phacoej2wcdpoqv6x1vf.webp",
  //   type: "Aamras Gallery",
  // },

  // Powders
  {
    id: 44,
    name: "Red Chilli Powders",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504546/INEXT/nhesd1yzyakg8802cvkk.jpg",
    type: "Parthavi  Home Food Gallery",
  },
  {
    id: 45,
    name: "Ginger Powders",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504584/INEXT/fek8fextyerkvzvdwgks.jpg",
    type: "Parthavi  Home Food",
  },
  {
    id: 46,
    name: "Onion Powders",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504792/INEXT/tdv8esny978wrutlicdx.webp",
    type: "Parthavi  Home Food",
  },

  // Rice
  // {
  //   id: 51,
  //   name: "Basnati Rice",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579620/INEXT/rlgavk9bh7uksfdchlgf.webp",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 52,
  //   name: "Sona Masoori Rice",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579720/INEXT/mavgxgw4ij1icwuj90zw.jpg",
  //   type: "Aamras Gallery",
  // },
  // {
  //   id: 53,
  //   name: "Brown Rice",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579826/INEXT/fvgiua4tf0v9ithwjpf3.webp",
  //   type: "Aamras Gallery",
  // },

  // Fruits
  {
    id: 47,
    name: "Mango",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579962/INEXT/cfov9rnywyccvqjkspcv.jpg",
    type: "Parthavi  Home Food",
  },
  {
    id: 48,
    name: "Watermelon",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579992/INEXT/pe5rt1vorfmsqqouduth.jpg",
    type: "Parthavi  Home Food",
  },
  {
    id: 49,
    name: "Licchi",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719580052/INEXT/arj9jitgsui4vbfjqeaj.webp",
    type: "Parthavi  Home Food",
  },

  {
    id: 50,
    name: "Khada Anaj",
    image:
      "https://simplyfresh.info/wp-content/uploads/2015/09/simply-wholegrainstips.jpg",
    type: "Parthavi  Home Food",
  },

  {
    id: 51,
    name: "Aam Achaf",
    image:
      "https://maayeka.com/wp-content/uploads/2017/05/aam-ka-sookha-achar-dry-mango-pickle-maayeka.jpg",
    type: "Parthavi  Home Food",
  },
  {
    id: 52,
    name: "All Types Achar",
    image:
      "https://www.farmdidi.com/cdn/shop/articles/Blog-post-revised_1445x.webp?v=1670659916",
    type: "Parthavi  Home Food",
  },
  {
    id: 53,
    name: "All Types Fruites Juice",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/11/360122485/VE/ZU/WB/153255301/istockphoto-158268808-612x612-jpg-500x500.jpg",
    type: "Parthavi  Home Food",
  },
  {
    id: 54,
    name: "Mineral water",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUs3NmXZYW_w86JwABXYBmRcMU_Y6HII-zaBX_VYCjBTK7lpOpjGwmOkh_j8yQORzadWQ&usqp=CAU",
    type: "Parthavi  Home Food",
  },
  {
    id: 55,
    name: "Ice CUbes",
    image:
      "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/05/ice-cube-activities.jpg",
    type: "Parthavi  Home Food",
  },
];

const Gallery = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex mt-5 flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Gallery</h3>
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

      {Object.keys(groupedData).map((type) => (
        <div key={type} className="my-10">
          <h4 className="text-2xl font-bold text-center mb-4">{type}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
            {groupedData[type].map((item) => (
              <Tile key={item.id} data={item} />
            ))}
          </div>
        </div>
      ))}

      <MainCommon />
    </div>
  );
};

const Tile = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tileStyle = isOpen
    ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
    : "relative w-full h-48 sm:h-64 lg:h-80";

  const imgStyle = isOpen
    ? "lg:w-[60vw] lg:h-[80vh] w-[80vw] h-[50vh] object-cover transition-all duration-300 ease-in-out"
    : "w-full h-full object-cover transition-all duration-300 ease-in-out";

  return (
    <div
      className={`tile ${tileStyle} cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <Image
        width={300}
        height={300}
        src={data.image}
        alt={data.name}
        className={imgStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* <img
        src={data.image}
        alt={data.name}
        className={imgStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      /> */}
      {isHovered && !isOpen && (
        <div className="absolute bottom-2 left-2 bg-yellow-600  text-white text-sm px-2 py-1 rounded">
          {data.name}
        </div>
      )}
    </div>
  );
};

export default Gallery;
