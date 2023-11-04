import { Outlet } from "react-router-dom";
import ScrollToTop from "../Utilities/ScrollToTop/ScrollToTop";
import { NavBar } from "../Components/NavBar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Toaster position="top-right" reverseOrder={true} />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default MainLayout;
