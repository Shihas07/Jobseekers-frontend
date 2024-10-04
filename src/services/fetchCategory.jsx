import { AutoFixNormalSharp } from "@mui/icons-material";
import axiosInstance from "../utilities/axiosInstance";



  const categoryGet=async()=>{

       const response=await axiosInstance.get("/employer/fetchCategory")

       console.log("category",response.data)
       return response.data
  }

   export default  categoryGet