"use client";
import React, { useEffect, useState } from "react";
import Slider from "@/components/core/Home/Swipper";
import ScrollingText from "@/components/core/Home/CommanText";
import TagCloudWithDetails from "@/components/core/Home/CanvasRotation";
import AboutHome from "@/components/core/Home/AboutHome";
import { Fade } from "react-awesome-reveal";
import Services from "@/components/core/Home/Services";
import Company from "@/components/core/Home/Company";
import ContactBanner from "@/components/milk/ContactBanner";
import Project from "@/components/core/Home/Project";
import Process from "@/components/core/Home/Process";
import WhyUs from "@/components/core/Home/WhyUs";
import Blog from "@/components/core/Home/Blog";
import HomeQuote from "@/components/core/Home/HomeQuote";
import FarmhouseListing from "@/components/FormListing";
import CompanyTagline from "@/components/Tagline";
import BookFarmhouseBanner from "@/components/common/BookingSection";

function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Slider />
      {/* <ScrollingText
        text={
          "If you want to join & Invest wtih us you are welcome to GDR group"
        }
      /> */}
      <BookFarmhouseBanner />
      <CompanyTagline tagline={"IF YOU WANT TO JOIN US AND INVEST THEN YOU ARE WELCOME TO RKSHOMES. GOOD OPPRTUNITNITY"}/>
      <TagCloudWithDetails />
      {/* <Fade>
        <AboutHome />
      </Fade> */}
      <FarmhouseListing />
      {/* <Services /> */}
      <Company />
      <ContactBanner title="Enquiry Form" />
      <Project />
      {/* <Process /> */}
      <WhyUs />
      <Blog limit={3} />
      <HomeQuote />
    </div>
  );
}

export default Home;
