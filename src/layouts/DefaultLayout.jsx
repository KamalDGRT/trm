// components
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
