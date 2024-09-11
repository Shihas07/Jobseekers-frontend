import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayOut from "../layouts/AdminLayOut";
import DashBord from "../pages/admin/DashBord";
import UserMangement from "../pages/admin/UserMangement";
import Category from "../pages/admin/category";
import EmployerManagement from "../pages/admin/EmployerManagement";

export default function AdminRoute() {
  return (
    <Routes>
      {/* Admin Layout wraps the dashboard and user management routes */}
      <Route element={<AdminLayOut />}>
        <Route path="dashboard" element={<DashBord />} />
        <Route path="userManagement" element={<UserMangement />} />
        <Route path='categoreyManagement' element={<Category />} />
        <Route path="employerManagement" element={<EmployerManagement/>}/>
        {/* Add other admin routes here */}
      </Route>
    </Routes>
  );
}
