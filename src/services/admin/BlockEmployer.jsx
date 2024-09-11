import axiosInstance from "../../utilities/axiosInstance";


   

   const BlockEmployer=async(id)=>{

        const response= await axiosInstance.post("/admin/BlockEmployer",{id})

         
   }

   export default BlockEmployer