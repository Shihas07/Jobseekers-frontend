import axiosInstance from "../../utilities/axiosInstance";

// services/admin.js


export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/login", data, {
      withCredentials: true,
    });
    
    console.log("Response from backend:", response); // Log the response here

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};




