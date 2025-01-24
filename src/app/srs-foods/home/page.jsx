import Swipper2 from "@/components/core/Home/Swipper2";
import Company from "@/components/milk/Company";
import ContactBanner from "@/components/milk/ContactBanner";
import MilkProduct from "@/components/milk/MilkProduct";
import Services from "@/components/milk/Services";
import WhyUs from "@/components/milk/WhyUs";

const MilkHome = () => {
  return (
    <div>
      <Swipper2 />
      <Services />
      <ContactBanner />
      <MilkProduct />

      <Company />
      <WhyUs />
    </div>
  );
};

export default MilkHome;
