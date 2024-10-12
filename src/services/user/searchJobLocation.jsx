import axiosInstance from "../../utilities/axiosInstance";


     const getjobLocation=async(location)=>{
          
      const response = await axiosInstance.get(`/jobLocation?location=${location}`);

         console.log("jobLocation",response)
         
         return response.data
     }

     export default getjobLocation