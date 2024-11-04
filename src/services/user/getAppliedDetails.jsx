import axiosInstance from "../../utilities/axiosInstance";



 
const appliedData = async (id, jobid) => {
  console.log("getAppliedJob", id, jobid);
  
  const response = await axiosInstance.get(`/applicationDetails/${id}/${jobid}`);
  return response.data;
  
};

export default appliedData;
