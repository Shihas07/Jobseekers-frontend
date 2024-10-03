
import axiosInstance from "../../utilities/axiosInstance";


const FetchData=async()=>{
    
       const response=await axiosInstance.get("/employer/fetchTokenPrice")

       // console.log("response",response)
       return response.data
}

export default FetchData 