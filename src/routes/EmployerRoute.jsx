import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/employer/signupPage";
import LoginPage from "../pages/employer/login";
import Dashboard from "../pages/employer/Dashborad";
import EmployerLayout from "../layouts/EmployerLayout";
import PaymentPage from "../pages/employer/PaymentPage";
import JobManagementPage from "../pages/employer/jobManagementPage";

export default function EmployerRoute() {
  return (
    <div>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<EmployerLayout />}>
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="paymentMangeMent" element={<PaymentPage />} />
           <Route path="jobManageMent" element={<JobManagementPage />} />


        </Route>
      </Routes>
    </div>
  );
}
