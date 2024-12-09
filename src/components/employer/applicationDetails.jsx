import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import FuncStatus from "../../services/employer/status";
import FuncNotSelect from "../../services/employer/handleNotSelct";

export default function ApplicationDetails({ open, handleClose, applicant }) {
  console.log("applicantfrompagedetils", applicant);

  const [select, setSelect] = useState(false);
  const handleSelect = async(id) => {
    // setSelect(true);

        const response=await FuncStatus(id)
    console.log("cliked select btn",id);
  };
  const handleNotSelect=async(id)=>{

      const response=await FuncNotSelect(id)
      
       
  }
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
                status<br></br>
                {data.status}
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
              <Box>
                {data.status==="Pending" ? 
                  <Button
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      m: 4,
                      px: 4,
                    }}
                  
                    onClick={()=>handleSelect(data._id)}
                  >
                    select
                  </Button>
                 : 
                  ""
                }{" "}
             {data.status==="Pending"?   <Button sx={{ backgroundColor: "red", color: "white" }} onClick={()=>handleNotSelect(data._id)}>
                  Not select
                </Button>:""}
              </Box>
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
