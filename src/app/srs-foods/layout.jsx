import Footer from "@/components/common/Footer";
import MilkNavbar from "@/components/common/milk/MilkNavbar";
import TopHeader from "@/components/common/SubNavbar";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <MilkNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
