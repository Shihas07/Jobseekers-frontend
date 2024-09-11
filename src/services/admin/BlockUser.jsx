import axiosInstance from "../../utilities/axiosInstance";

const BlockUser = async (userId) => {
  try {
    const response = await axiosInstance.post('/admin/BlockUser', { userId }); 
    console.log('User blocked:', response.data);
  } catch (error) {
    console.error('Error blocking user:', error);
  }
};

export default BlockUser;
