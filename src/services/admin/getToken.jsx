
import axiosInstance from "../../utilities/axiosInstance";


const FetchData=async()=>{
    
       const response=await axiosInstance.get("/admin/fetchToken")

       console.log("response")
       return response.data
}

export default FetchData 
 