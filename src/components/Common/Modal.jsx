import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,TextField } from '@mui/material';

export default function CommonModal({ isOpen, title, children, onClose, onSubmit }) {

    
    
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
    
      <DialogContent>

      {children.map((field, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            {field.type === 'file' ? (
              <input
                type="file"
                // onChange={(e) => onFieldChange(field.name, e.target.files[0])}
                accept=".pdf, .doc, .docx" // file type restrictions if needed
              />
            ) : (
              <TextField
                label={field.name}
                fullWidth
                margin="normal"
                value={field.value}
                // onChange={(e) => onFieldChange(field.name, e.target.value)}
              />
            )}
               </div>
        ))}

        {/* <TextField type={"file"} inputProps={{accept:"application/pdf"}}/> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
