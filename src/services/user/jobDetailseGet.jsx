
  import axiosInstance from "../../utilities/axiosInstance";
  

     const JobDetailsGetPage=async(id)=>{
          
        const response=await axiosInstance.get(`/jobSinglePage/${id}`)
        
        return response.data
           
         
           
     }
     export default JobDetailsGetPage