import React from "react";

import { Slide } from "react-awesome-reveal";

const company = [
  {
    img: "https://5.imimg.com/data5/JP/JU/QJ/SELLER-86216945/dairy-cattle-feed.jpg",
    title: "RKS Homes",
    desc1:
      "Shree Ji 72 Cattle food is made of high quality protein, energy and essential minerals. It provides your cattle with essential nutrients that help to build strong bones and muscles.",
    desc2:
      "Shree Ji 72 Cattle food is a great source of iodine, which helps to keep your cattle healthy and prevent them from becoming sick.",
    desc3:
      "Shree Ji 72 Cattle food is also rich in calcium, which is essential for healthy teeth and bones.",
  },
  {
    img: "https://img.freepik.com/premium-photo/feeding-food-indian-cow_1165568-7.jpg",
    desc1:
      "Shree Ji 72 Cattle food is made of high quality protein, energy and essential minerals. It provides your cattle with essential nutrients that help to build strong bones and muscles.",
    desc2:
      "Shree Ji 72 Cattle food is a great source of iodine, which helps to keep your cattle healthy and prevent them from becoming sick.",
    desc3:
      "Shree Ji 72 Cattle food is also rich in calcium, which is essential for healthy teeth and bones.",
  },
  {
    img: "https://www.jiomart.com/images/product/original/494260076/milkfood-natural-pure-cow-ghee-900-ml-product-images-o494260076-p606250198-0-202311211726.jpg?im=Resize=(1000,1000)",

    title: "SRS Foods",
    desc1:
      "Shree Ji 72 Cattle food is made of high quality protein, energy and essential minerals. It provides your cattle with essential nutrients that help to build strong bones and muscles.",
    desc2:
      "Shree Ji 72 Cattle food is a great source of iodine, which helps to keep your cattle healthy and prevent them from becoming sick.",
    desc3:
      "Shree Ji 72 Cattle food is also rich in calcium, which is essential for healthy teeth and bones.",
  },
];

const Company = () => {
  return (
    <div className="my-20 overflow-hidden">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Products</h3>
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
              className="relative card rounded-lg  cursor-pointer group shadow-xl shadow-pink-500 h-[68vh] "
            >
              <div className="relative">
                <img
                  src={currElem.img}
                  alt={currElem.title}
                  className="min-w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-50%]"
                />
              </div>
              <div className="absolute inset-0  flex flex-col top-48  bg-yellow-500 p-4 text-gray-600 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <p className="z-10 text-sm">{currElem.desc1}</p>
                <p className="z-10 text-sm">{currElem.desc2}</p>
                <p className="z-10 text-sm">{currElem.desc3}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Company;
