"use client";
import React, { useState } from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaPaintBrush,
  FaHammer,
} from "react-icons/fa";

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      name: "MEET & AGREE",
      icon: <FaHandshake />,
      description:
        "New RK Constructions is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
    },
    {
      name: "IDEA & CONCEPT",
      icon: <FaLightbulb />,
      description:
        "New RK Constructions is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
    },
    {
      name: "DESIGN & CREATE",
      icon: <FaPaintBrush />,
      description:
        "New RK Constructions is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
    },
    {
      name: "BUILD & INSTALL",
      icon: <FaHammer />,
      description:
        "New RK Constructions is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
    },
  ];

  return (
    <div className="mb-5">
      <div
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#18191b]"></div>
        <div className="relative z-10 container mx-auto py-16 text-center">
          <h6 className="text-4xl font-semibold mb-8">OUR PROCESS</h6>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`${
                    index === activeStep
                      ? "bg-transparent border-2 border-white text-white"
                      : "bg-yellow-500 text-gray-600"
                  } font-bold rounded-full w-40 h-40 sm:w-48 sm:h-48 p-3 flex items-center justify-center text-lg sm:text-xl hover:bg-yellow-600 hover:scale-105`}
                >
                  {step.icon}
                  <p className="mt-2">{step.name}</p>
                </div>
                {index === activeStep && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-14 bg-white"></div>
                )}
              </div>
            ))}
          </div>
          <hr className="border-white my-14" />
          <div className="mt-8 text-sm sm:text-base max-w-4xl mx-auto p-5 transition-opacity duration-300 ease-in-out">
            <p
              key={activeStep}
              className="transition-opacity duration-300 ease-in-out opacity-100"
            >
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
