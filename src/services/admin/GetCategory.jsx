import axiosInstance from "../../utilities/axiosInstance";

const getCategory = async () => {
  try {
    const response = await axiosInstance.get("/admin/getCategory");
    console.log(response.data); // Log response data for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Optionally rethrow the error to handle it upstream
  }
};

export default getCategory;
