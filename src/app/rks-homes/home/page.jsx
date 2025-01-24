import ContactBanner from "@/components/milk/ContactBanner";
import AboutSection from "@/components/RKS Home/AboutSection";
import FeaturesSection from "@/components/RKS Home/FetureSection";
import MainSection from "@/components/RKS Home/MainSections";
import { Property } from "@/components/RKS Home/Property";
import TestimonialSection from "@/components/RKS Home/Testominals";
import React from "react";

function RKSHome() {
  return (
    <div>
      <MainSection />
      <Property />
      <ContactBanner />
      <FeaturesSection />
      <AboutSection />

      <TestimonialSection />
    </div>
  );
}

export default RKSHome;
