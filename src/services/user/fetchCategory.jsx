import axiosInstance from "../../utilities/axiosInstance";


 
  const CategoryFetch=async()=>{
    
        const response=await axiosInstance.get("/fetchCategory") 
        // console.log("ed",response)
         return response.data
  }

  export default CategoryFetch