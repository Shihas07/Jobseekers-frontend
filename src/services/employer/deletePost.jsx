import axiosInstance from "../../utilities/axiosInstance";

const postdelete = async (id) => {
    try {
        // Send the DELETE request to the server with the ID
        const response = await axiosInstance.delete(`/employer/delete/${id}`);

        // Return the response data (which may include a success message)
        return response.data;
    } catch (error) {
        // Handle any errors that occur during the delete request
        console.error('Error deleting:', error);
        throw error;  // Rethrow the error to handle it in the calling function
    }
};

export default postdelete;
