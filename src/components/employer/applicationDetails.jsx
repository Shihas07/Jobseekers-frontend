

  import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'


  
  export default function ApplicationDetails({open,handleClose}) {
    return (
      <div>
       
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { xs: "90%", sm: "400px" },
          margin: "auto",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
          boxShadow: 24,
        }}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
          
      </div>
    )
  }
  




