import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

export default function ApplicationDetails({ open, handleClose, applicant }) {
  console.log("applicantfrompagedetils", applicant);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            width: { xs: "90%", sm: "400px" },
            margin: "auto",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: 24,
          }}
        >
          {applicant.map((data, ind) => (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                applicant Name <br></br>
                {data.name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                applicant email <br></br>
                {data.email}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Experience <br></br>
                {data.experience}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Resume is<br></br>
                
                <a
  href={`http://localhost:3000/employer/${data.resumePath}`} 
  target="_blank"
  rel="noopener noreferrer"
  download 
>
  <Button>Download CV</Button>
</a>



              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                coverLetter <br />{" "}
                {data.coverLetter ? data.coverLetter : "no letter"}
              </Typography>
                 <Box >
              <Button  sx={{backgroundColor:"green",color:"white",m:4,px:4}}>select</Button>
              <Button sx={{backgroundColor:"red",color:'white'}}>Not select</Button>
          </Box>
            </>
          ))}
        </Box>

       
      </Modal>
    </div>
  );
}
