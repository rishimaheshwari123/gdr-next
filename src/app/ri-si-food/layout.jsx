import Footer from "@/components/common/Footer";
import TopHeader from "@/components/common/SubNavbar";
import RISINavbar from "@/components/Home Food/Navbar";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <RISINavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
