
import axiosInstance from "../../utilities/axiosInstance";

const fetchTokenCount=async(id)=>{
    
     const response=await axiosInstance.get(`/employer/tokenCount/${id}`)
     console.log(response)
     return response
}

export default fetchTokenCount