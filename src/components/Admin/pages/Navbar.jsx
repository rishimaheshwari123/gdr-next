import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { MdEmojiEvents, MdLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { setToken, setUser } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";
import {
  FcBullish,
  FcPlus,
  FcPieChart,
  FcMultipleCameras,
  FcMms,
  FcFinePrint,
  FcFilm,
} from "react-icons/fc";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
  };

  let pageTitle;
  switch (location.pathname) {
    case "/admin/dashboard":
      pageTitle = "Admin / Dashboard";
      break;

    case "/admin/addProduct":
      pageTitle = "Admin / Add Product";
      break;

    default:
      pageTitle = "Home";
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white p-4 rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Menu icon for mobile devices */}
          <div className="text-gray-600 text-xl md:hidden">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <FaTimes className="text-gray-600 text-2xl" />
              ) : (
                <FaBars className="text-gray-600 text-2xl" />
              )}
            </button>
          </div>
          {/* Home/Dashboard text for larger devices */}
          <div className="text-gray-600 text-xl hidden md:block">
            {pageTitle}
          </div>
          <div className=" w-[50px] h-[50px] lg:w-16 lg:h-16 ">
            <img
              src="https://i.ibb.co/6wtWwqk/nechro-pure-farm-oil-m-p-nagar-bhopal-offset-printers-li1sf7va5d-250.webp"
              alt=""
              className=" object-cover rounded-full"
            />
            <p className="text-gray-600 mt-5">LOGO</p>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-white opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 w-[60%] left-0 h-full bg-white text-gray-600 p-4 transition-transform  duration-700 transform z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-8 -mt-2 gap-5">
          <h6 className="text-lg font-bold">Logo</h6>
          <button onClick={closeSidebar} className="text-gray-600 md:hidden">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="text-sm flex flex-col gap-4">
          <li className="mb-2 flex gap-4 items-center">
            <FaHome size={22} />
            <Link to="/" onClick={closeSidebar} className="text-xl mt-[3px]">
              Back To Home
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <FcBullish size={22} />
            <Link
              to="/admin/dashboard"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Dashboard
            </Link>
          </li>

          <li className="mb-2 flex gap-4 items-center">
            <FcPlus size={22} />
            <Link
              to="/admin/addProduct"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Add Product
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <FcPieChart size={22} />
            <Link
              to="/admin/getProduct"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Get Product
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <FcMultipleCameras size={22} />
            <Link
              to="/admin/addBlog"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Add Blog
            </Link>
          </li>

          <li className="mb-2 flex gap-4 items-center">
            <FcMms size={22} />
            <Link
              to="/admin/getBlog"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Get Blog
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <FcFilm size={22} />
            <Link
              to="/admin/addSlider"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Add Slider
            </Link>
          </li>

          <li className="mb-2 flex gap-4 items-center">
            <FcFinePrint size={22} />
            <Link
              to="/admin/getSlider"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Get Slider
            </Link>
          </li>

          <li className="mb-2 flex gap-4 items-center" onClick={handleLogout}>
            <MdLogout size={22} /> Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
