
 import React from "react"
 import {Routes,Route} from "react-router-dom"
 import LoginPage from "../pages/user/loginPage"
 import Home from "../pages/user/Home"
 import Signup from "../pages/user/signup"
 import ProtectedRoute from "../components/protectedRoute"


  
   
   export default function UserRoute() {
     return (
       <div>
          <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/login" element={<LoginPage/>}/>
             <Route path="/signup" element={<Signup/>}/>
          </Routes>
       </div>
     )
   }
   