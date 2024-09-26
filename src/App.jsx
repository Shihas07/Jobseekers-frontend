import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/adminRoute";
import LoginPage from "./pages/admin/login";
import ProtectedRouteAdmin from "./components/admin/protectedRoute";
import EmployerRoute from "./routes/EmployerRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Admin Login Route */}
          {/* User Routes */}
          <Route path="/*" element={<UserRoute />} />

          <Route path="admin/login" element={<LoginPage />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRouteAdmin>
                <AdminRoute />
              </ProtectedRouteAdmin>
            }
          />

          <Route path="/employer/*" element={<EmployerRoute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
