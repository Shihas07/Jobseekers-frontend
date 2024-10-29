import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function CommonModal({
  isOpen,
  title,
  children,
  onClose,
  onSubmit,
  onFieldChange,
}) {
  console.log("children", children);
  // const [fileInput, setFileInput] = useState({});

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        {children.map((field, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            {field.type === "file" ? (
              <input
                type="file"
                onChange={(e) => onFieldChange(field.name, e.target.files[0])}
                accept=".pdf, .doc, .docx"
              />
            ) : (
              <TextField
                label={field.name}
                fullWidth
                margin="normal"
                value={field.value}
                onChange={(e) => onFieldChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}

        {/* <Button>

          {children[7].value}
          {console.log("ww", children.name)}
        </Button> */}
        {/* <TextField type={"file"} inputProps={{accept:"application/pdf"}}/> */}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary" variant="contained" startIcon={<SendIcon/>}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
