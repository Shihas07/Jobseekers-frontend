import { ConstructionOutlined } from "@mui/icons-material";
import axiosInstance from "../../utilities/axiosInstance";


  
 const jobGet=async()=>{
  const response=await axiosInstance.get("/getJob")
  console.log(response)
  return response.data
 }

 export default jobGet
