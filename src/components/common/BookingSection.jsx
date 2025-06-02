"use client";

import Link from "next/link";
import { CalendarCheck, ArrowRight } from "lucide-react";

const BookFarmhouseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-md w-full max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      
      {/* Icon */}
      <div className="flex items-center justify-center bg-white rounded-full p-3 shadow-md">
        <CalendarCheck className="text-green-600 w-6 h-6" />
      </div>

      {/* Text */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-base font-semibold text-gray-800">
          Book your Farmhouse & Agricultural Land today / <span className="text-green-700">अपना फार्महाउस और कृषि भूमि आज ही बुक करें </span>
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Booking starting from ₹1 Lakh | <span className="font-medium">RKS Infrabuild & Homes Pvt. LTD.</span>
        </p>
      </div>

      {/* Button */}
      <Link
        href="/farmhouse"
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition shadow-sm"
      >
        Book Now <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default BookFarmhouseBanner;
