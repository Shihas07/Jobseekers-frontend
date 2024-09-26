

import axiosInstance from "../../utilities/axiosInstance";


const deleteToken=async(id)=>{
   
  const response=await axiosInstance.delete(`/admin/deleteToken/${id}`)

 
}
export default deleteToken