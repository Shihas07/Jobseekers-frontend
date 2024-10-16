import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/user/loginPage";
import Home from "../pages/user/Home";
import Signup from "../pages/user/signup";
import ProtectedRoute from "../components/protectedRoute";
import UserLayout from "../layouts/userLayout";
import JobPage from "../pages/user/jobPage";
import JobDetails from "../pages/user/jobDetails";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      {/* Layout for protected routes */}
      <Route element={<UserLayout />}>
        {/* Wrap Home in ProtectedRoute */}
        {/* <Route path="/" element={<ProtectedRoute element={<Home />} />} /> */}
       

        {/* Job page */}
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/jobdetails/:id" element={<JobDetails/>}/>
      </Route>
    </Routes>
  );
}
