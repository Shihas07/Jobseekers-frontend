

 import axiosInstance from "../../utilities/axiosInstance";

 const  ApplicantsGet=async(id)=>{
    
    const response= await  axiosInstance.get(`/employer/getApplicants/${id}`)
      
       return response.data
    //  console.log("axiosgetApplicants",response)  
 }

 export default ApplicantsGet
   
