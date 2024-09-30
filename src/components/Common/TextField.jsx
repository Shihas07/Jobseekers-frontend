import React from 'react';
import TextField from '@mui/material/TextField';

const CommonInput = ({ label, type = 'text', value, onChange, width, height, background, ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      sx={{
        height: height || '40px',        
        backgroundColor: background || '#fff', 
        width: width || '100%',          
      }}
      {...props} 
    />
  );
};

export default CommonInput;
