import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar'; // Make sure this path is correct
import { Home as HomeIcon, Work as JobIcon, People as UserIcon, People as EmployerIcon, Payment as PaymentIcon, Logout as LogoutIcon,Folder as FolderIcon } from "@mui/icons-material";

export default function AdminLayout() {
  const title = "Admin Dashboard";

  const navItems = [
    { label: "Home", icon: <HomeIcon />, path: "/admin/dashboard" },
    { label: "User Management", icon: <UserIcon />, path: "/admin/userManagement" },
    { label: "Category Mangent", icon: <FolderIcon />, path: "/admin/categoreyManagement" },

    { label: "Job Management", icon: <JobIcon />, path: "/admin/jobManagement" },
    { label: "Employer Management", icon: <EmployerIcon />, path: "/admin/employerManagement" },
    { label: "Payment", icon: <PaymentIcon />, path: "/admin/payment" },
    { label: "Logout", icon: <LogoutIcon />, path: "/admin/logout" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar on the left */}
      <div className="w-full lg:w-1/4 text-white">
        <Sidebar  title={title} navItems={navItems} />
      </div>

      {/* Content on the right */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
