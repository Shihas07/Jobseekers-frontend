 
 import axiosInstance from "../../utilities/axiosInstance";


 const signup=async(data)=>{
      
  const response=await axiosInstance.post("/employer/signup",data)

     return response
      
 }

 export default signup