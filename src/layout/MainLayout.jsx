import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
