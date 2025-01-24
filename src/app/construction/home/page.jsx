import Building from "@/components/constructor/Building";
import Partners from "@/components/constructor/Partner";
import Company from "@/components/constructor/Services";
import Slider from "@/components/constructor/Swipper";
import TalkToUs from "@/components/constructor/TalkToUs";
import ContactBanner from "@/components/milk/ContactBanner";
import React from "react";

const ConstructorHome = () => {
  return (
    <div>
      <Slider />
      <Building />
      <Company />
      <ContactBanner />
      <Partners />

      <TalkToUs />
    </div>
  );
};

export default ConstructorHome;
