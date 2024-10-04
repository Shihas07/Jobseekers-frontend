import axiosInstance from "../utilities/axiosInstance";

const postData = async (data, id) => {
  try {
    const response = await axiosInstance.post(`/employer/postJob/${id}`, data);
    return response.data;
  } catch (error) {
    // If there's an error, return the response or log the error
    if (error.response) {
      // Backend returned a response with an error code
      return error.response.data; // Ensure to return the error response data
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response from the server:", error.request);
    } else {
      // Some other error occurred
      console.error("Error occurred:", error.message);
    }
    throw error; // Re-throw the error to handle it in `onSubmit`
  }
};

export default postData;
