import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
