

import axiosInstance from "../../utilities/axiosInstance";


const deleteToken=async(id)=>{
   
  const response=await axiosInstance.delete(`/admin/deleteToken/${id}`)

  console.log("shihas",response)
}
export default deleteToken