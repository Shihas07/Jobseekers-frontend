import axiosInstance from "../../utilities/axiosInstance";

const Login = async(data) => {
  try {
    const response = await axiosInstance.post("/employer/login", data);
    
    console.log("response", response);

  
    return response
  } catch (error) {
   
    console.error("Error during login:", error.response ? error.response.data : error.message);
    throw error; 
  }
};

export default Login;
