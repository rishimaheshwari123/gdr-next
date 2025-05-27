import BecomeSeller from "@/components/BecomeSeller";
import ContactBanner from "@/components/milk/ContactBanner";
import AboutSection from "@/components/RKS Home/AboutSection";
import FeaturesSection from "@/components/RKS Home/FetureSection";
import MainSection from "@/components/RKS Home/MainSections";
import { Property } from "@/components/RKS Home/Property";
import TestimonialSection from "@/components/RKS Home/Testominals";
import CompanyTagline from "@/components/Tagline";
import React from "react";

function RKSHome() {
  return (
    <div>
      <MainSection />
            <CompanyTagline tagline={"IF YOU WANT TO JOIN US AND INVEST THEN YOU ARE WELCOME TO RKSHOMES. GOOD OPPRTUNITNITY"}/>
      
      <Property />
      
      <BecomeSeller service={"RKS Infrabuild & Homes Pvt. LTD"} />
      <ContactBanner />
      <FeaturesSection />
      <AboutSection />

      <TestimonialSection />
    </div>
  );
}

export default RKSHome;
