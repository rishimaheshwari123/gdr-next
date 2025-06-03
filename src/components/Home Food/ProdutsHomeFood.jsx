"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Categorized Product Data (You can later split this into files or APIs)
const productData = {
  "Grocery Items": [
    // Add grocery products here
    {
      name: "Grocery Items",
      category: "Rice",
      image:
        "https://media.istockphoto.com/id/1283712032/photo/cardboard-box-filled-with-non-perishable-foods-on-wooden-table-high-angle-view.jpg?s=612x612&w=0&k=20&c=7B2cUwQB2LeBmIh5JElkO5DoE7GRq-CRVmERsMSJoVY=",
    },
    {
      name: "",
      category: "Grocery Items",
      image:
        "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "",
      category: "Grocery Items",
      image:
        "https://images.stockcake.com/public/3/4/d/34d7b5fd-cd97-4e40-876b-df9a19d195c7_medium/assorted-food-supplies-stockcake.jpg",
    },
 
    {
      name: "",
      category: "Grocery Items",
      image:
        "https://d34vm3j4h7f97z.cloudfront.net/optimized/4X/0/e/5/0e5c671c08d908bebec156638847a2c57bf3b64b_2_690x459.jpeg",
    },
  ],
  "Khade Masala": [
    {
      name: "Curry Leaves (Kari Patta)",
      category: "Spice",
      image:
        "https://cdn.prod.website-files.com/65056ba428fdd5501ff0ef16/6622d419f8be9c555a570649_AdobeStock_109487326-_1_.webp",
    },
    {
      name: "Black Cardamom (Badi Elaichi)",
      category: "Spice",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_0S0KnJVPAp3bUpwbOnDPv4rAH5KMGCKOQ&s",
    },
    {
      name: "Coriander Powder (Dhaniya Powder)",
      category: "Spice",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73LQLQxGUt7m7EZQzhGJwQFnGgOb9Jk7iLw&s",
    },
    {
      name: "Khada Garam Masala",
      category: "Spice",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWGrc9WCGKCHD0Oe0MAJp0U4tBwHKbF6yVm1PdXgDabr9lKzDX648qAWKsE2DtH2zgmN2H_DjCiQlyiflbjH1zpfje7FTWUckyFIf6kvdB_eCsqWiQ-JbN",
    },
  ],
  "Dry Fruits": [
    {
      name: " Anjeer ",
      category: "Dry Fruits",
      image: "https://images.meesho.com/images/products/309939616/py2zk_512.webp",
    },
    {
      name: "Kaaju",
      category: "Dry Fruits",
      image: "https://m.media-amazon.com/images/I/51GG5YIpx0L.jpg",
    },
    {
      name: "Badam",
      category: "Dry Fruits",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyv-D7QMk5zG8hp2iyCiUTOF1xewp6tdPF284iwD5kkyd_xMiPBEC6renwSvN2QUc3XKlIjDDDTvFMbAc5Chi682ooQRPubvCniURBFg2f34pD2XvJippb",
    },
    {
      name: "Dry Fruits",
      category: "Dry Fruits",
      image: "https://cdn.shopify.com/s/files/1/0510/4284/4855/files/ccxcxxc_1024x1024.jpg?v=1654863639",
    },
  ],
  "Milk Foods": [
    {
      name: "Milk Powder",
      category: "Milk",
      image: "https://static.toiimg.com/photo/61673689.cms?width=500&resizemode=4&imgsize=354238",
    },
    {
      name: "Paneer",
      category: "Milk",
      image:
        "https://www.rothesadairy.org/wp-content/uploads/2019/03/panneer-2.jpg",
    },
    {
      name: "Milk Items",
      category: "Milk",
      image:
        "https://www.datocms-assets.com/20941/1665663448-what-are-dairy-foods.png?w=1000&fit=max&fm=jpg",
    },
    {
      name: "Milk Items",
      category: "Milk",
      image:
        "https://www.lohmann-minerals.com/fileadmin/_processed_/d/c/csm_lohmann-milchprodukte_69563259fa.jpg",
    },
  ],
  "Cattle Foods": [
    {
      name: "Cattle Feed",
      category: "Cattle",
      image: "https://sbblgroup.com/cdn/shop/articles/Which_animal_feed_flavours_work_best_in_the_cattle_industrya.png?v=1709894979",
    },
    {
      name: "Cattle Feed",
      category: "Cattle",
      image: "https://www.cargill.co.in/image/1432168805977/preview-silage-making-image.jpg?v=1596116660000",
    },
    {
      name: "Cattle Feed",
      category: "Cattle",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/7/MZ/OV/QW/54222852/dry-fodder.jpg",
    },
    {
      name: "Cattle Feed",
      category: "Cattle",
      image: "https://www.shutterstock.com/image-photo/agriculture-industry-farming-animal-husbandry-600nw-659176180.jpg",
    },
  
  ],
  Water: [
    {
      name: "Minralas Water",
      category: "Minrals",
      image:
        "https://www.netsolwater.com/netsol-water/assets/img/product-images/Is-mineral-water-different-from-packaged-drinking-water.jpg",
    },
    {
      name: "Ice Cube ",
      category: "Minrals",
      image:
        "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/05/ice-cube-activities.jpg",
    },
    {
      name: "Water Cans  ",
      category: "Minrals",
      image:
        "https://www.foodstoragemoms.com/wp-content/uploads/2018/04/Emergency-Water-Storage-How-to-Store-It-1.jpg",
    },
    {
      name: "Water Cans  ",
      category: "Minrals",
      image:
        "https://bottledwater.org/wp-content/uploads/2020/09/bottles-826x1024.jpg",
    },
  ],
};

const tabs = Object.keys(productData);

function ProdutsHomeFood() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-11/12 mx-auto mt-[60px]">
      {/* Heading */}
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">
          Spices & Food Items
        </h3>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#e2571a]"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-[4px] rounded-full w-[10px] flex-grow bg-[#e2571a]"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${
              activeTab === tab
                ? "bg-[#e2571a] text-white"
                : "bg-white text-[#333] border-[#e2571a]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12">
        {productData[activeTab]?.map((product, index) => (
          <ProductCard
            index={index}
            key={index}
            imageUrl={product.image}
            title={product.name}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default ProdutsHomeFood;
