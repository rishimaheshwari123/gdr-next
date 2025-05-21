"use client";

import { useEffect, useState } from "react";
import SocialMediaBar from "@/components/common/SocialMedia";
import Modal from "@/components/core/Home/Modal";
import ScrollToTop from "@/components/ScrollToTop";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "@/components/common/SubNavbar";
import Navbar from "@/components/common/NavbarMain";
import Footer from "@/components/common/Footer";
import { usePathname } from "next/navigation";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
    setInterval(() => {
      setShowModal(false);
    }, 9000);
  }, []);
  const pathname = usePathname();
  const removeNavbar =
    pathname.includes("rks-homes") ||
    pathname.includes("construction") ||
    pathname.includes("ri-si-food") ||
    pathname.includes("srs-foods");
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <Provider store={store}>
      {removeNavbar || isAdminRoute ? null : <TopHeader />}
      {removeNavbar || isAdminRoute ? null : <Navbar />}

      {showModal && <Modal />}
      {children}
      <ToastContainer />
      <SocialMediaBar />
      <ScrollToTop />
      {removeNavbar || isAdminRoute ? null : <Footer />}
    </Provider>
  );
};

export default Wrapper;
