
import axiosInstance from "../utilities/axiosInstance";


const postPaymentDetails=async(data)=>{
  try {
    
      const response=await axiosInstance.post("/employer/verify",data)
      console.log(response)
      return response
  } catch (error) {
    console.error(error)
  }
}

export default postPaymentDetails