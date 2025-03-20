import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="w-[100%]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
