import Navbar from "@/components/common/construction/ConstructionNavbar";
import Footer from "@/components/common/Footer";
import TopHeader from "@/components/common/SubNavbar";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
