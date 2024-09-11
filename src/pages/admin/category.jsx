import React, { useState, useEffect } from 'react';
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CommonModal from '../../components/admin/Modal';
import AddCategory from '../../services/admin/AddCategory';
import getCategory from '../../services/admin/GetCategory';
import DeleteCategory from '../../services/admin/DeleteCategory';
import editCategory from '../../services/admin/EditCategory';

export default function Category() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editData,setEditData]=useState({id:"",categoryName:""})

  console.log("edit",editData)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchCategory();
     // Close the modal
  };



  const fetchCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data); // Adjust based on your response structure
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory()
  }, []);

  const handleSubmit = async (data) => {
    // console.log("formdata", data); // Log the form data
    try {
          
         if(editData.id){
          const response=await editCategory(editData.id,data)
          console.log(id,data)
          await  fetchCategory()
         }
         else{
          const response = await AddCategory(data);
         }
     
     
      // console.log(response);
         // Refresh the category list after adding
      handleClose();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

   const handleDelete=async(id)=>{
    console.log("hello",id)
    const response=  await DeleteCategory({id})
      //  console.log(response)
       fetchCategory()
      
   }

  // Example of dynamic fields configuration
  const fields = [
    { label: 'Category Name', name: 'categoryName' },
  ];

    const handleEdit=async(id,categoryName)=>{
        setEditData({id,categoryName})
      setOpen(true);

      
    }

     
  return (
    <div className="p-4">
      {/* Button above the table */}
      <Button
        sx={{
          backgroundColor: 'primary.main',
          marginBottom: 2,
        }}
        color='primary.main'
        onClick={handleClick}
      >
        Add Category
      </Button>
      
      <Container sx={{ width: '90%', margin: 'auto' }}>
        {/* MUI Table for displaying categories */}
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Category Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={category._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    {/* Actions column with placeholder buttons */}
                    <Button variant="outlined" color="primary" sx={{ mr: 1 }}
                     onClick={()=>handleEdit(category._id,category.categoryName)}
                       >
                      Edit
                    </Button>
                    <Button variant="outlined" color="error"
                     onClick={()=>handleDelete(category._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <CommonModal
        open={open}
        handleClose={handleClose}
        title="Add Category"
        buttonText="Submit"
        fields={fields} // Pass the dynamic fields array
        onSubmit={handleSubmit}
         editData={editData}
      />
    </div>
  );
}
