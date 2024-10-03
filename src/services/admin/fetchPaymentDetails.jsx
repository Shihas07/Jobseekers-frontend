
 import axiosInstance from "../../utilities/axiosInstance";


 const  PaymentDeatils=async()=>{

     const response=await axiosInstance.get("/admin/fetchPayments")
     console.log(response)

     return  response.data
 }

 export default PaymentDeatils