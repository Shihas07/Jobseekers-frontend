import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/adminRoute";
import LoginPage from "./pages/admin/login";
import ProtectedRouteAdmin from "./components/admin/protectedRoute";
import EmployerRoute from "./routes/EmployerRoute";
import useOnline from "./utilities/useCheckOnline";
import animation from "./assets/file.json/Animation - 1729570884788.json"
import { Player } from "@lottiefiles/react-lottie-player"; 



function App() {

  const data=useOnline()
    if(data===false){
        return (    <div className="animation-container">
          <Player
            autoplay
            loop
            src={animation} // Lottie JSON animation data
            style={{ height: '300px', width: '300px' }} // Customize size
          />
        </div>)

    }
  return (
    <>

        
      <Router>
        <Routes>
          {/* Admin Login Route */}
          {/* User Routes */}
            
             

          <Route path="/*" element={<UserRoute />}/>

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
