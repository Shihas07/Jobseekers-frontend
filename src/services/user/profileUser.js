


import axiosInstance from "../../utilities/axiosInstance";

const fetchProfile=async(email)=>{
    
  const response = await axiosInstance.get(`/profileData/${email}`);

    return response.data
}

export default fetchProfile