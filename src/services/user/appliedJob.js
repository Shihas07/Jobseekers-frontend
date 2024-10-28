import axiosInstance from "../../utilities/axiosInstance";



  const getAppliedJOb=async(id)=>{
      
      const response=await axiosInstance.get(`/getAppliedJob/${id}`)
     
       return response.data
       
      console.log("responseApplied job",response)
  }

  export default getAppliedJOb;