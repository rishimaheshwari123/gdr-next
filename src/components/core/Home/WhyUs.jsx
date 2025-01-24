import React from "react";

const WhyUs = () => {
  return (
    <div>
      <div className=" bg-black my-12 p-20 ">
        <div className="grid  lg:grid-cols-4 gap-8 text-white">
          <div className="flex flex-col  lg:flex-row items-center gap-6 ">
            <p className="text-2xl font-bold">Why Us</p>
            <div className="flex flex-col lg:flex-row items-center text-center gap-2 md:ml-10">
              <span className="text-7xl font-semibold ">500</span>
              <p className="lg:w-[10px] text-[16px] flex  justify-start text-gray-300">
                Plus Verified Reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center gap-2 md:ml-20">
            <span className="text-7xl font-semibold ">25</span>
            <p className="lg:w-[10px] text-[16px] flex  justify-start text-gray-300">
              Plus Completed and 3 Ongoing Projects
            </p>
          </div>{" "}
          <div className="flex flex-col lg:flex-row items-center text-center gap-2  md:ml-24">
            <span className="text-7xl font-semibold ">20</span>
            <p className="lg:w-[10px] text-[16px] flex  justify-start text-gray-300">
              Plus Team Members
            </p>
          </div>{" "}
          <div className="flex flex-col lg:flex-row items-center text-center gap-2 md:-ml-2">
            <span className="text-7xl font-semibold ">2005</span>
            <p className="lg:w-[10px] text-[16px] flex  justify-start text-gray-300">
              Since Trust And Reliable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
