"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout, MdOutlineRealEstateAgent } from "react-icons/md";
import { FaHome, FaRegImages } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "@/redux/authSlice";
import {
  FcBullish,
  FcPlus,
  FcPieChart,
} from "react-icons/fc";


import { PiBuildingsFill } from "react-icons/pi";


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    typeof window !== "undefined" && localStorage.getItem("sidebarCollapsed") === "true"
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const sidebarRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
    router.push("/login");
  };

  const handleToggle = () => {
    const collapsed = !isCollapsed;
    setIsCollapsed(collapsed);
    localStorage.setItem("sidebarCollapsed", collapsed.toString());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only collapse if the click is outside the sidebar AND the sidebar is not already collapsed
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !isCollapsed) {
        setIsCollapsed(true);
        localStorage.setItem("sidebarCollapsed", "true");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCollapsed]); // Added isCollapsed to dependency array

  const menuItems = [
    { href: "/", icon: <FaHome />, label: "Back To Home" },
    { href: "/admin/dashboard", icon: <FcBullish />, label: "Dashboard" },
    { href: "/admin/addBlog", icon: <FcPlus />, label: "Add Blog" },
    { href: "/admin/getBlog", icon: <FcPieChart />, label: "Manage Blogs" }, // Changed label for clarity
    { href: "/admin/create-gallery", icon: <FaRegImages />, label: "Gallery" },
    { href: "/admin/jobs", icon: <PiBuildingsFill />, label: "Job Openings" },
    { href: "/admin/farmhouse", icon: <MdOutlineRealEstateAgent />, label: "Farm Houses" }, // Changed label
  ];

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-screen z-50 bg-white shadow-lg rounded-r-xl transition-all duration-300 overflow-y-auto 
        ${isCollapsed ? "w-20" : "w-64"}
      `}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!isCollapsed && (
          <div className="text-2xl font-extrabold text-gray-800 tracking-wide">
            Admin <span className="text-yellow-600">Panel</span>
          </div>
        )}
        <button
          onClick={handleToggle}
          className="text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-1"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <CiMenuFries size={24} /> : <RxCross1 size={24} />}
        </button>
      </div>

      <ul className="p-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <li key={item.href} className="relative group"> {/* Added group for tooltip */}
            <Link
              href={item.href}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 
                ${router.pathname === item.href
                  ? "bg-yellow-50 text-yellow-700 font-bold border-l-4 border-yellow-500" // Enhanced active state
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900" // Improved hover state
                }`}
              onClick={handleToggle} // Consider removing this if you want to keep sidebar open after navigation
            >
              <span className="text-2xl min-w-[24px] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              {!isCollapsed && <span className="text-base flex-grow">{item.label}</span>}
            </Link>
            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <span className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-4 left-0 w-full px-4">
        <div
          className={`flex items-center gap-3 p-3 rounded-lg bg-slate-50 mb-2 transition-transform duration-200 hover:scale-[1.02] cursor-default
            ${isCollapsed ? "justify-center" : ""}
          `}
        >
          <div className="text-gray-700 text-2xl">
            <AiOutlineUser />
          </div>
          {!isCollapsed && (
            <span className="text-gray-700 text-sm font-medium">
              {user?.name
                ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                : "Admin User"}
            </span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className={`flex items-center gap-2 justify-center w-full p-3 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-200 
            ${isCollapsed ? "justify-center" : "justify-start"}
          `}
        >
          <MdLogout size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

