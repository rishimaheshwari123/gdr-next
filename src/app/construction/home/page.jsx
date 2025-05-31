import BecomeSeller from "@/components/BecomeSeller";
import CompanyShowcase from "@/components/common/AllCompanyDetails";
import Building from "@/components/constructor/Building";
import Partners from "@/components/constructor/Partner";
import Company from "@/components/constructor/Services";
import Slider from "@/components/constructor/Swipper";
import TalkToUs from "@/components/constructor/TalkToUs";
import ContactBanner from "@/components/milk/ContactBanner";
import CompanyTagline from "@/components/Tagline";
import React from "react";

const ConstructorHome = () => {
  return (
    <div>
      <Slider />

            <CompanyShowcase companyName={"New RK Construction"} />
      
      <Building />
            <CompanyTagline tagline={"Crafting Strong Foundations for a Better Tomorrow."}/>

      <Company />
                  <BecomeSeller service={"NEW R.K. CONSTRUCATIONS"} subject="On demand construction" />
      
      {/* <ContactBanner /> */}
      {/* <Partners /> */}

      <TalkToUs />
    </div>
  );
};

export default ConstructorHome;
