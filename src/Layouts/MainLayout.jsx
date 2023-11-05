import { Outlet } from "react-router-dom";
import ScrollToTop from "../Utilities/ScrollToTop/ScrollToTop";
import { NavBar } from "../Components/NavBar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Toaster position="top-right" reverseOrder={true} />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
