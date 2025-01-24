import RKSHomeNavbar from "@/components/RKS Home/Navbar";
import Footer from "@/components/common/Footer";
import TopHeader from "@/components/common/SubNavbar";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <RKSHomeNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
