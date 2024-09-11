import axiosInstance from "../utilities/axiosInstance";

export const signup = async (data) => {
  return await axiosInstance.post("/signup", data);
};

export const login = async (data) => {
  const responses = await axiosInstance.post("/login", data, {
    withCredentials: true,
    
  });
   
  console.log("login",responses)
  return responses
  
};

export const sendOtp = async (data) => {
  console.log("sendOtp", data);
  return await axiosInstance.post("/otpLogin", data, {
    withCredentials: true,
  });
};

export const submitOtp = async (data) => {
  console.log("sendOtp", data);
  return await axiosInstance.post("/verifyOtp", data, {
    withCredentials: true,
  });
};

export const home = async () => {
  return await axiosInstance.get("/");
};


export const Refresh = async () => {
  return await axiosInstance.post(
    "/refresh", 
    {},  // Empty object since there’s no body for this request
    {
      withCredentials: true // This should be in the config, not the request body
    }
  );
};
