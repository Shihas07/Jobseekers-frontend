

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar'; // Make sure this path is correct
import { Home as HomeIcon, Work as JobIcon, People as UserIcon, People as EmployerIcon, Payment as PaymentIcon, Logout as LogoutIcon,Folder as FolderIcon } from "@mui/icons-material";

export default function EmployerLayout() {
  const title = "Employer Dashboard";

  const navItems = [
    { label: "DashBoard", icon: <HomeIcon />, path: "/employer/dashboard" },
    { label: "Job Management", icon: <UserIcon />, path: "/employer/jobManagement" },
    { label: "Application Mangent", icon: <FolderIcon />,   },

    { label: "Profile Management", icon: <JobIcon />  },
    { label: "Payment", icon: <PaymentIcon />,path:"/employer/PaymentMangeMent"},
    { label: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar on the left */}
      <div className="w-full lg:w-1/4 text-white">
        <Sidebar title={title} navItems={navItems} />
      </div>

      {/* Content on the right */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
