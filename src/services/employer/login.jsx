
  import axiosInstance from "../../utilities/axiosInstance";


  const Login=async(data)=>{
     
    const response= await axiosInstance.post("/employer/login",data)
    console.log("response",response)
    
    return response.data
  }

  export default Login 