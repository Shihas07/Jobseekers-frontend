import React, { useEffect } from "react";
import Nav from "../../pages/user/nav";
import Banner from "./banner";
import { home, login } from "../../services/user";

export default function Home() {
      
      const Fetch=async()=>{
          
           const response=await login()
           console.log("response",response)
      }

       useEffect(()=>{
          Fetch() 
       },[])
      
  return (
    <div>
      <div className="">
        {" "}
        <Banner />
      </div>
    </div>
  );
}
