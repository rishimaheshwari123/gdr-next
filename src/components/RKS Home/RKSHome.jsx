import React, { useEffect } from "react";
import RKSHomeNavbar from "./Navbar";
import Subnavbar from "../common/SubNavbar";
import Footer from "../common/Footer";
import MainSection from "./MainSections";
import { Property } from "./Property";
import FeaturesSection from "./FetureSection";
import TestimonialSection from "./Testominals";
import AboutSection from "./AboutSection";
import ContactBanner from "../milk/ContactBanner";
import { Helmet } from "react-helmet";

function RKSHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>RKS Infrabuild & Homes Pvt. LTD. - Home</title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <Subnavbar />
      <RKSHomeNavbar />
      <MainSection />
      <Property />
      <ContactBanner />
      <FeaturesSection />
      <AboutSection />
      <TestimonialSection />

      <Footer />
    </div>
  );
}

export default RKSHome;
