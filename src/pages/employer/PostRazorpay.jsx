import axiosInstance from "../../utilities/axiosInstance";

const payment = async (data) => {
  try {
    // Send a POST request to the payment API
    const response = await axiosInstance.post("employer/payment", data);

    // Log the response to check if you're receiving the correct data
    console.log("Payment responseeeee:", response.data);

    // Return the response data (like order ID) for further processing
    return response.data;
  } catch (error) {
    console.error("Error during payment request:", error);
    throw error;  // Rethrow error to handle it later
  }
};

export default payment;
