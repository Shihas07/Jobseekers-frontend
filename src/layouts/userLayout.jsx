import React from "react";
import Banner from "../pages/user/banner";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";

export default function UserLayout() {
  return (
    <div>
      <div>
        <Banner />
      </div>

      <div>
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
