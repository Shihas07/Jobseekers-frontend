import axiosInstance from "../../utilities/axiosInstance";


     
 const editCategory=async(id,Name)=>{

    const response=axiosInstance.post("/admin/editCategory",{id,Name})
 }

 export default editCategory