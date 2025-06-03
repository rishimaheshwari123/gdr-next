import BecomeSeller from "@/components/BecomeSeller";
import CompanyShowcase from "@/components/common/AllCompanyDetails";
import Swipper2 from "@/components/core/Home/Swipper2";
import ProdutsHomeFood from "@/components/Home Food/ProdutsHomeFood";
import Company from "@/components/milk/Company";
import ContactBanner from "@/components/milk/ContactBanner";
import MilkProduct from "@/components/milk/MilkProduct";
import Services from "@/components/milk/Services";
import WhyUs from "@/components/milk/WhyUs";
import CompanyTagline from "@/components/Tagline";

const MilkHome = () => {
  return (
    <div>
      <Swipper2 />
                  <CompanyShowcase companyName={"Nirvdit All Making Products"} />
      {/* <Services /> */}
      <ProdutsHomeFood />
      <MilkProduct />
      
            <CompanyTagline tagline={"Pure Dairy Goodness, Delivered Fresh — Parthvi"}/>
          <BecomeSeller service={"NIRVDIT ALL MAKING PRODUCTS PRIVATE LIMITED "} />
    
      {/* <ContactBanner /> */}

      {/* <Company /> */}
      <WhyUs />
    </div>
  );
};

export default MilkHome;
