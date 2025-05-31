import BecomeSeller from "@/components/BecomeSeller";
import CompanyShowcase from "@/components/common/AllCompanyDetails";
import AboutSection from "@/components/Home Food/About";
import ItemList from "@/components/Home Food/OtherItems";
import ProdutsHomeFood from "@/components/Home Food/ProdutsHomeFood";
import SecondSection from "@/components/Home Food/SectionSecond";
import HeroSlider from "@/components/Home Food/Slider";
import WhyChooseRISI from "@/components/Home Food/WhyChooseUs";
import ContactBanner from "@/components/milk/ContactBanner";
import CompanyTagline from "@/components/Tagline";
import React from "react";

function RISIHomeFood() {
  return (
    <div>
      <HeroSlider />
                  <CompanyShowcase companyName={"Aamars"} />

      <CompanyTagline
        tagline={"Build Dreams with Us — Invest, Live, Prosper."}
      />

      {/* <AboutSection /> */}
      <BecomeSeller service={"AAMARS ALL MAKING PRODUCTS PRIVATE LIMITED"} />

      <ContactBanner />
      <ProdutsHomeFood />
      <SecondSection />
      <ItemList />
      <WhyChooseRISI />
    </div>
  );
}

export default RISIHomeFood;
