

  import axiosInstance from "../../utilities/axiosInstance";


    const getEmployer=async()=>{
         
        const response=await axiosInstance.get("/admin/getEmployer")
          console.log("response",response)
         return response.data.data
    }

    export default getEmployer