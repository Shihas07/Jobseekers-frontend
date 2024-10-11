import axiosInstance from "../../utilities/axiosInstance";


     const getJobTitle=async(title)=>{
          
      const response = await axiosInstance.get(`/jobTitle?title=${title}`);

         console.log("jobtitle",response)
         return response.data
     }

     export default getJobTitle