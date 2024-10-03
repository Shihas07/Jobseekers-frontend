import React, { useEffect, useState } from "react";
import { Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import CommonModal from "../../components/admin/Modal";
import postToken from "../../services/admin/AddToken";
import FetchData from "../../services/admin/getToken";
import deleteToken from "../../services/admin/DeleteToken";

export default function PaymentPage() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]); 
  // console.log("data", formData);

  const label = "Add Token";
  const fields = [
    { label: "Token Count", name: "Token" },
    { label: "Price", name: "price" },
  ];

  const OpenModal = () => {
    setOpen(true);
    // console.log("clicked");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchToken = async () => {
    try {
      const response = await FetchData();
      setFormData(response.data); // Update state with fetched tokens
      // console.log("response", response);
    } catch (error) {
      console.error("Fetching token error", error);
    }
  };

  useEffect(() => {
    fetchToken(); // Fetch tokens when the component mounts
  },[]);

  const handleSubmit = async (data) => {
    try {
      const result = await postToken(data);
      console.log(result);
      
      // Close modal and refresh data after token is added
      handleClose();
      fetchToken();
    } catch (error) {
      console.error("Adding token error", error);
    }
  };

  

  const handleDelete = async(id) => {
    try {
     await  deleteToken(id); 
    //  console.log("click me")
      fetchToken()
    } catch (error) {
      console.error("Deleting token error", error);
    }
  };

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        onClick={OpenModal}
      >
        Add Token
      </Button>

      <CommonModal
        open={open}
        title={label}
        fields={fields}
        buttonText="Submit"
        onSubmit={handleSubmit}
        handleClose={handleClose}
      />

      {/* Token Table */}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token Count</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.length > 0 ? (
              formData.map((token, index) => (
                <TableRow key={index}>
                  <TableCell>{token.tokenCount}</TableCell>
                  <TableCell>{token.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(token.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No tokens added yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
