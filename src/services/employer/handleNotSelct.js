
 import axiosInstance from "../../utilities/axiosInstance";

 const FuncNotSelect=async(id)=>{
    
   const response=await axiosInstance.post(`/employer/notSelect/${id}`)

     
 }

 export default FuncNotSelect