import axiosInstance from "../../utilities/axiosInstance";


  

  const  editJobPost=async(data)=>{
        
     const response=  await axiosInstance.post("/employer/editJobPost",data)
      
        return response.data

  }

  export default editJobPost