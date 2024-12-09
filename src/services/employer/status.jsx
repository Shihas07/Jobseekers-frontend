import axiosInstance from "../../utilities/axiosInstance";


const FuncStatus=async(id)=>{

  console.log("idfrom",id)
   
    const response=await axiosInstance.post(`/employer/statusJob/${id}`)

     
}

export default FuncStatus;