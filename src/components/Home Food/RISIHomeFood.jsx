import React, { useEffect } from "react";
import RISINavbar from "./Navbar";
import SubNavbar from "../common/SubNavbar";
import HeroSlider from "./Slider";
import AboutSection from "./About";
import ProdutsHomeFood from "./ProdutsHomeFood";
import ItemList from "./OtherItems";
import SecondSection from "./SectionSecond";
import WhyChooseRISI from "./WhyChooseUs";
import Footer from "../common/Footer";
import ContactBanner from "../../components/milk/ContactBanner";
import { Helmet } from "react-helmet";
function RISIHomeFood() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home - SRS Home Food </title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavbar />
      <RISINavbar />
      <HeroSlider />
      <AboutSection />
      <ContactBanner />
      <ProdutsHomeFood />
      <SecondSection />
      <ItemList />
      <WhyChooseRISI />
      <Footer />
    </div>
  );
}

export default RISIHomeFood;
