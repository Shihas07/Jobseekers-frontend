import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

export default function CommonModal({ open, handleClose, title, buttonText, fields=[], onSubmit,editData }) {
  const [formValues, setFormValues] = useState({});
   
  //  console.log("editDatachild",formValues)
   // Store the values of multiple inputs

     useEffect(()=>{
         if(editData){
          setFormValues(editData)
         }
       
     },[editData])

  const handleChange = (e, fieldName) => {
    setFormValues({
      ...formValues,
      [fieldName]: e.target.value, 
    });
  };

  const handleSubmit = () => {
    onSubmit(formValues); // Pass all form values to the parent component
    handleClose(); // Close the modal after submission
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className="p-4"> {/* Padding with Tailwind */}
        <div className="flex flex-col space-y-4">
          {fields.map((field, index) => (
            <TextField
              key={index}
              label={field.label}
              variant="outlined"
              fullWidth
              value={formValues[field.name] || ''} // Bind the value to the corresponding field
              onChange={(e) => handleChange(e, field.name)} // Update the value of each field on change
            />
          ))}
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            className="self-end"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
