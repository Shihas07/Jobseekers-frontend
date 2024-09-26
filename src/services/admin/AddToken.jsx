

import axiosInstance from "../../utilities/axiosInstance";



  
     const postToken=async(data)=>{
          
             try {
                
              const response=await axiosInstance.post("/admin/addtoken",data)
              console.log(response)
                 return response
             } catch (error) {
              console.error("errorr",error)
             }
     }

     export default postToken


  