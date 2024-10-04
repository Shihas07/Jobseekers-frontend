import axiosInstance from "../utilities/axiosInstance";

const fetch=async(id)=>{
 const response=  await axiosInstance.get(`/employer/fetchJob/${id}`)
//  console.log("response",response)
 return response
}
export default fetch