"use client";
import React, { useState } from "react";

const ItemList = () => {
  const [activeTab, setActiveTab] = useState("pulses");

  const pulses = [
    { name: "Mung daal", hindi: "मूंग की दाल" },
    { name: "Hari mung daal", hindi: "हरे मूंग की दाल" },
    { name: "Chawli daal", hindi: "चवली दाल" },
    { name: "Masoor daal", hindi: "मसूर दाल" },
    { name: "Sabut masoor", hindi: "साबुत मसूर" },
    { name: "Toor daal", hindi: "अरहर की दाल" },
    { name: "Rajma", hindi: "राजमा" },
    { name: "Hari matar", hindi: "हरी मटर" },
    { name: "Safed matar", hindi: "सफेद मटर" },
    { name: "Chana daal", hindi: "चना दाल" },
    { name: "Urad daal", hindi: "उड़द की दाल" },
    { name: "Chori daal", hindi: "छोरी दाल" },
    { name: "Moth dal", hindi: "मोठ दाल" },
    { name: "Kala chana", hindi: "काला चना" },
    { name: "Safed chana", hindi: "सफेद चना" },
    { name: "Lobia", hindi: "लोबिया" },
  ];

  const dryFruits = [
    { name: "Pistachios", hindi: "पिसता" },
    { name: "Apricot", hindi: "खुबानी" },
    { name: "Dates", hindi: "खजूर" },
    { name: "Cashews", hindi: "काजू" },
    { name: "Almonds", hindi: "बादाम" },
    { name: "Walnuts", hindi: "अखरोट" },
    { name: "Raisins", hindi: "किशमिश" },
    { name: "Hazelnuts", hindi: "पहाड़ी बादाम" },
    { name: "Dry figs", hindi: "अंजीर" },
    { name: "Prunes", hindi: "आलूबुखारा" },
    { name: "Dry berries", hindi: "जामुन" },
    { name: "Fox nuts", hindi: "मखाने" },
  ];

  const otherItems = [
    "Daliya",
    "Khichadi",
    "Papad (all types)",
    "Chana",
    "Poha",
    "Soya Badi (chunks)",
    "Hing Chana",
    "Moong Daal (namkeen)",
    "Kurkure",
    "Soya Sticks",
    "Namkeen",
    "Instant Bhel",
    "Potato Chips",
    "Besan",
    "Sattu",
    "Flour (Ata)",
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("pulses")}
              className={`w-1/3 py-2 px-4 text-center ${
                activeTab === "pulses"
                  ? "bg-blue-500 text-white border-b-4 border-blue-700"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              } font-semibold transition-colors duration-200`}
            >
              Pulses
            </button>
            <button
              onClick={() => setActiveTab("dryFruits")}
              className={`w-1/3 py-2 px-4 text-center ${
                activeTab === "dryFruits"
                  ? "bg-blue-500 text-white border-b-4 border-blue-700"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              } font-semibold transition-colors duration-200`}
            >
              Dry Fruits
            </button>
            <button
              onClick={() => setActiveTab("otherItems")}
              className={`w-1/3 py-2 px-4 text-center ${
                activeTab === "otherItems"
                  ? "bg-blue-500 text-white border-b-4 border-blue-700"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              } font-semibold transition-colors duration-200`}
            >
              Other Items
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "pulses" && (
            <div>
              <h6 className="text-2xl font-semibold mb-4 text-blue-600">
                Types of Pulses
              </h6>
              <ul className="list-disc pl-5 space-y-2">
                {pulses.map((pulse, index) => (
                  <li key={index} className="text-gray-600">
                    {pulse.name}{" "}
                    <span className="text-gray-500">({pulse.hindi})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "dryFruits" && (
            <div>
              <h6 className="text-2xl font-semibold mb-4 text-blue-600">
                Types of Dry Fruits
              </h6>
              <ul className="list-disc pl-5 space-y-2">
                {dryFruits.map((fruit, index) => (
                  <li key={index} className="text-gray-600">
                    {fruit.name}{" "}
                    <span className="text-gray-500">({fruit.hindi})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "otherItems" && (
            <div>
              <h6 className="text-2xl font-semibold mb-4 text-blue-600">
                Other Items
              </h6>
              <ul className="list-disc pl-5 space-y-2">
                {otherItems.map((item, index) => (
                  <li key={index} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
