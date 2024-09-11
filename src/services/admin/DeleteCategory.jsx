import axiosInstance from "../../utilities/axiosInstance";

const DeleteCategory = async (data) => {
  try {
    // Use DELETE method and include the ID in the URL
    const response = await axiosInstance.delete("/admin/deleteCategory", {data})
    
  
    console.log(response);
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

export default DeleteCategory;
