
   
     import axiosInstance from "../../utilities/axiosInstance";


       const getAllUsers=async()=>{
             
          const response=    await axiosInstance.get("/admin/getUsers")

          console.log(response.data.users)
          return response.data.users;

       
       }

       export default getAllUsers