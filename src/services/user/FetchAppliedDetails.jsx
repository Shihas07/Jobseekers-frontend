import axiosInstance from "../../utilities/axiosInstance";


  

   const  FetchApplied=async(id)=>{
        
     const response=await    axiosInstance.get(`/appliedDetais/${id}`)
     return response.data

    //  console.log("e",response)
           
         
   }


   export default FetchApplied