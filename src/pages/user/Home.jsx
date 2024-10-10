import React, { useEffect } from "react";
import Nav from "../../pages/user/nav";
import Banner from "./banner";
import { home, login } from "../../services/user";
import JobListingCard from "../../components/Common/jobCard";

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
      
       <h1>hello this is home</h1>
        <div className="mt-10 mb-10">

        {/* <JobListingCard/> */}
        </div>
     

      </div>
    </div>
  );
}
