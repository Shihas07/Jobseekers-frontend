import axiosInstance from "../../utilities/axiosInstance";




 const apply=async(profile,id)=>{

  console.log("axiosprofile",profile,id)

   const response=  await axiosInstance.post(`/applyJob/${id}`,{profile})
    return response.data;
   console.log("res",response)



 }

 export default apply;