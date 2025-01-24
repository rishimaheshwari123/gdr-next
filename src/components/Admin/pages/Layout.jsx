import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="">
      <div className="md:pl-16 lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:block ">
        <Sidebar />
      </div>
      <div className="lg:ml-24 mx-5 mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
