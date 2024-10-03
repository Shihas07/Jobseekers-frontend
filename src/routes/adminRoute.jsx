import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayOut from "../layouts/AdminLayOut";
import DashBord from "../pages/admin/DashBord";
import UserMangement from "../pages/admin/UserMangement";
import Category from "../pages/admin/category";
import EmployerManagement from "../pages/admin/EmployerManagement";
// import PaymentPage from "../pages/admin/paymentPage";
import PaymentPageMain from "../pages/admin/paymentPage";

export default function AdminRoute() {
  return (
    <Routes>
      {/* Admin Layout wraps the dashboard and user management routes */}
      <Route element={<AdminLayOut />}>
        <Route path="dashboard" element={<DashBord />} />
        <Route path="userManagement" element={<UserMangement />} />
        <Route path="categoreyManagement" element={<Category />} />
        <Route path="employerManagement" element={<EmployerManagement />} />
        <Route path="payment" element={<PaymentPageMain />} />
        {/* Add other admin routes here */}
      </Route>
    </Routes>
  );
}
