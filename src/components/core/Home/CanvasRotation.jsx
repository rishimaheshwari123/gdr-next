// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import globeimage from "@/assests/globe.png";
// import image1 from "@/assests/logos/rfood.jpg";
// import image2 from "@/assests/logos/gdrgruop.jpg";
// import image3 from "@/assests/logos/rhome.jpg";
// import image4 from "@/assests/nir.jpg";
// import "./TagCloud.css";
// const TagCloudWithDetails = () => {
//   const tags = [
//     {
//       name: "New RK Construction",
//       details:
//         "Specializing in all types of construction services including residential, commercial, and industrial projects.",
//       image: image2,
//     },
//     {
//       name: "RKS Infrabuild & Homes Pvt. LTD",
//       details:
//         "Offering comprehensive home building and renovation services with a focus on quality and customer satisfaction.",
//       image: image3,
//     },

  
//     {
//       name: "Nirvdit All Making Products Private Limited",
//       details:
//         "Providing a range of high-quality food products, including spices, grains, and ready-to-eat meals.",
//       image: image4,
//     },
//       {
//       name: "Aamars All Making Products Private Limited",
//       details:
//         "Supplying a variety of liquid products, including industrial chemicals and personal care items.",
//       image: image1,
//     },
//   ];

//   // State to manage the selected tag
//   const [selectedTag, setSelectedTag] = useState(tags[0]);

//   return (
//     <div className="containercanvas grid lg:grid-cols-2 min-h-[80vh] grid-cols-1">
//       {/* Details box */}
//       <div className="details-box font-bold lg:text-lg p-4 text-wrap text-white min-h-[400px]">
//         {selectedTag ? (
//           <div className="details-content flex justify-center flex-col items-center">
//             <Image
//               src={selectedTag.image}
//               alt="Tag Details"
//               className="details-image max-h-[200px] min-h-[200px]"
//               width={200} // Adjust the width and height as necessary
//               height={200}
//             />
//             <p>{selectedTag.details}</p>
//           </div>
//         ) : (
//           <div className="details-placeholder">
//             Hover over a tag to see details
//           </div>
//         )}
//       </div>

//       {/* Tag cloud */}
//       <div className="tags relative flex justify-center items-center min-h-[400px]">
//         <Image
//           src={globeimage}
//           alt="Globe"
//           className="absolute lg:h-[400px] h-[300px] overflow-hidden"
//           layout="intrinsic"
//           width={400} // Adjust the width and height as necessary
//           height={400}
//         />
//         <ul className="">
//           {tags.map((tag, index) => (
//             <li
//               key={index}
//               onMouseEnter={() => setSelectedTag(tag)}
//               className={`floating-tag floating-tag-${
//                 index + 1
//               } font-bold text-white text-xl`}
//             >
//               {tag.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TagCloudWithDetails;







"use client"
import { useState } from "react"
import Image from "next/image"
import globeimage from "@/assests/globe.png";
import image1 from "@/assests/logos/rfood.jpg";
import image2 from "@/assests/logos/gdrgruop.jpg";
import image3 from "@/assests/logos/rhome.jpg";
import image5 from "@/assests/logos/home.jpg";
import image4 from "@/assests/nir.jpg";
const TagCloudWithDetails = () => {
  const tags = [
    {
      name: "GDR Agrifeed Private Limited",
      details:
        "Empowering Excellence, Driving Growth GDR Group is a dynamic business conglomerate dedicated to overseeing and managing a diverse portfolio of companies, each excelling in its domain. With a vision to lead and innovate, GDR Group provides strategic direction, operational efficiency, and sustainable growth opportunities for its subsidiaries.",
      image:image2,
    },
    {
      name: "New RK Construction",
      details:
        "A leader in government and private construction projects, offering comprehensive solutions in infrastructure development with a focus on quality and timely delivery.",
      image: image5,
    },
    {
      name: "RKS Infrabuild & Homes Pvt. LTD",
      details:
        "A trusted name in real estate - specializing in land development, property sales, and purchases across premium residential and commercial segments.",
      image: image3,
    },
    {
      name: "Nirvdit All Making Products Private Limited",
      details:
        "A quality-driven manufacturer of cattle feed, home food essentials, and grocery items, ensuring premium standards and freshness in every product.",
      image: image4,
    },
    {
      name: "Aamars All Making Products Private Limited",
      details:
        "A brand known for superior cattle feed, home food, and grocery manufacturing and marketing, delivering value and trust to homes, farms, and businesses.",
      image: image1,
    },
  ]

  const [selectedTag, setSelectedTag] = useState(tags[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto grid lg:grid-cols-2 min-h-screen grid-cols-1">
        {/* Details Section - Left Side */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:shadow-purple-500/20">
              <div className="text-center space-y-6">
                {/* Company Image */}
                <div className="relative mx-auto w-48 h-48 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300 animate-pulse"></div>
                  <Image
                    src={selectedTag.image || "/placeholder.svg"}
                    alt={selectedTag.name}
                    className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-white/30 shadow-2xl transition-all duration-300 group-hover:scale-105"
                    width={200}
                    height={200}
                  />
                </div>

                {/* Company Details */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white leading-tight">{selectedTag.name}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedTag.details}</p>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center space-x-2 pt-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tag Cloud Section - Right Side */}
        <div className="relative hidden lg:block flex justify-center items-center min-h-[600px] p-8">
          {/* Animated Background Globe */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative">
              {/* Main Globe */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 animate-pulse"></div>

              {/* Inner Rings */}
              <div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600/15 to-purple-600/15 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-700/10 to-purple-700/10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Floating Tags */}
          <div className="relative z-10 w-full h-full">
            {/* Tag 1 - Top Left */}
            <div
              className="absolute top-[15%] left-[10%] cursor-pointer transition-all duration-500 hover:scale-110"
              onMouseEnter={() => setSelectedTag(tags[2])}
            >
              <div
                className={`
                relative group px-6 py-4 rounded-full transition-all duration-300 animate-float
                ${
                  selectedTag.name === tags[2].name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 scale-110"
                    : "bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20"
                }
              `}
              >
                {selectedTag.name === tags[2].name && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
                )}
                <span
                  className={`relative font-bold text-sm lg:text-base ${
                    selectedTag.name === tags[2].name ? "text-white" : "text-gray-200"
                  }`}
                >
                  RKS Homes
                </span>
              </div>
            </div>

            {/* Tag 2 - Top Right */}
            <div
              className="absolute top-[20%] right-[15%] cursor-pointer transition-all duration-500 hover:scale-110"
              onMouseEnter={() => setSelectedTag(tags[1])}
            >
              <div
                className={`
                relative group px-6 py-4 rounded-full transition-all duration-300 animate-float
                ${
                  selectedTag.name === tags[1].name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 scale-110"
                    : "bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20"
                }
              `}
                style={{ animationDelay: "0.5s" }}
              >
                {selectedTag.name === tags[1].name && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
                )}
                <span
                  className={`relative font-bold text-sm lg:text-base ${
                    selectedTag.name === tags[1].name ? "text-white" : "text-gray-200"
                  }`}
                >
                  NEW RK Construction
                </span>
              </div>
            </div>

            {/* Tag 3 - Center */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-110"
              onMouseEnter={() => setSelectedTag(tags[0])}
            >
              <div
                className={`
                relative group px-6 py-4 rounded-full transition-all duration-300 animate-float
                ${
                  selectedTag.name === tags[0].name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 scale-110"
                    : "bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20"
                }
              `}
                style={{ animationDelay: "1s" }}
              >
                {selectedTag.name === tags[0].name && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
                )}
                <span
                  className={`relative font-bold text-sm lg:text-base ${
                    selectedTag.name === tags[0].name ? "text-white" : "text-gray-200"
                  }`}
                >
                  GDR Group 72
                </span>
              </div>
            </div>

            {/* Tag 4 - Bottom Left */}
            <div
              className="absolute bottom-[25%] left-[15%] cursor-pointer transition-all duration-500 hover:scale-110"
              onMouseEnter={() => setSelectedTag(tags[3])}
            >
              <div
                className={`
                relative group px-6 py-4 rounded-full transition-all duration-300 animate-float
                ${
                  selectedTag.name === tags[3].name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 scale-110"
                    : "bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20"
                }
              `}
                style={{ animationDelay: "1.5s" }}
              >
                {selectedTag.name === tags[3].name && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
                )}
                <span
                  className={`relative font-bold text-sm lg:text-base ${
                    selectedTag.name === tags[3].name ? "text-white" : "text-gray-200"
                  }`}
                >
                   NIRVDIT Products
                </span>
              </div>
            </div>

            {/* Tag 5 - Bottom Right */}
            <div
              className="absolute bottom-[20%] right-[10%] cursor-pointer transition-all duration-500 hover:scale-110"
              onMouseEnter={() => setSelectedTag(tags[4])}
            >
              <div
                className={`
                relative group px-6 py-4 rounded-full transition-all duration-300 animate-float
                ${
                  selectedTag.name === tags[4].name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 scale-110"
                    : "bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20"
                }
              `}
                style={{ animationDelay: "2s" }}
              >
                {selectedTag.name === tags[4].name && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
                )}
                <span
                  className={`relative font-bold text-sm lg:text-base ${
                    selectedTag.name === tags[4].name ? "text-white" : "text-gray-200"
                  }`}
                >
                  AAMARS Products
                </span>
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
{/* Mobile-Friendly Tag Layout */}
<div className="lg:hidden mt-8 px-4 flex flex-col gap-4">
  {tags.map((tag) => (
    <div
      key={tag.name}
      onClick={() => setSelectedTag(tag)}
      className={`p-4 rounded-xl text-center cursor-pointer transition-all duration-300 ${
        selectedTag.name === tag.name
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
          : "bg-white/10 text-gray-200 hover:bg-white/20"
      }`}
    >
      {tag.name}
    </div>
  ))}
</div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default TagCloudWithDetails
