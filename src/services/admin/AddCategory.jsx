

  import axiosInstance from "../../utilities/axiosInstance";

  const AddCategory=async(data)=>{

       const response= axiosInstance.post("/admin/addCategory",data)

       console.log(response)

  }

  export default AddCategory