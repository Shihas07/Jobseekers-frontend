import axiosInstance from "../../utilities/axiosInstance";

const AddUserDetails = async (formData) => {
  console.log('fomr data in axios',formData)
  try {
    // Create a new FormData object if formData isn't already FormData
    const formDataToSend = new FormData();

    // Add file separately if the file key is `resumeFile`
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
