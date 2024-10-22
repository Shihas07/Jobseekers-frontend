import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchProfile from "../services/user/profileUser";

const useUserFind = () => {
  const [email,setEmail]=useState("")
  const [profileDetails,setProfileDetails]=useState([])
  const userDetails = useSelector((state) => state.user.userDetails);
  console.log("email",email)

  

  useEffect(() => {
    if(userDetails){

      setEmail(userDetails.email)
    }

    findUser(email);
  }, [userDetails,email]);



  const findUser = async (email) => {
    const response = await fetchProfile(email);
    console.log("responsesednfm", response);
         if(response){
          setProfileDetails(response)
         }
        
    
  };

    return profileDetails
};

 export default useUserFind;
