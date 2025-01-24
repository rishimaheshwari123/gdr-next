import { AiOutlineGlobal } from "react-icons/ai";
import { IoAirplaneOutline } from "react-icons/io5"; // Changed icon to IoAirplaneOutline
import { GiKnifeFork } from "react-icons/gi"; // Changed icon to GiKnifeFork

const object = [
  {
    id: 1,
    title: "Global Culinary Fusion", // Modified title
    icon: <AiOutlineGlobal />, // Kept the original icon
    desc: "Indulge in a harmonious blend of international culinary traditions, expertly crafted to tantalize your taste buds and transport you around the world",
  },
  {
    id: 2,
    title: "Exotic Gourmet Delights", // Modified title
    icon: <IoAirplaneOutline />, // Changed icon
    desc: "Explore exotic flavors and gourmet delights from around the globe, curated to elevate your dining experience",
  },
  {
    id: 3,
    title: "Sustainable Dining Choices", // Modified title
    icon: <GiKnifeFork />, // Changed icon
    desc: "Delight in guilt-free indulgence with our commitment to eco-conscious practices, offering you a premium sustainable dining experience",
  },
];

function SecondSection() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {object.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <div className="text-5xl text-[#df794d] mb-4 mt-4">{item.icon}</div>
            <h6 className="text-xl  mb-2 text-[#33536B] font-sans">
              {item.title}
            </h6>
            <p className=" text-[#5A5A5A] text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
