import axiosInstance from "../../utilities/axiosInstance";

const AddUserDetails = async (formData) => {
  console.log('fomr data in axios',formData)
  try {
   
    const formDataToSend = new FormData();

  
    if (formData.resumeFile) {
      formDataToSend.append("Resume", formData.resumeFile); 
    }
    
    // Append other fields
    Object.keys(formData).forEach(key => {
      if (key !== "resumeFile") {
        formDataToSend.append(key, formData[key]);
      }
    });

    const response = await axiosInstance.post("/userDetails", formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
      // withCredentials:true,
    });

    return response.data;
  } catch (error) {
    console.error("Error adding user details:", error);
    throw error;
  }
};

export default AddUserDetails;
