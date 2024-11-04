import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ViewAppliedDetals({ open, setOpen, job, status }) {
  console.log("detailspassjob", status);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{ fontFamily: "-apple" }}
            >
              Application Details
            </Typography>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              You applied for the <strong>{job.jobTitle}</strong> position as a{" "}
              {job.jobDescription} at <strong>{job.companyName}</strong>.
              Location: {job.jobLocation}
            </Typography>

            {/* Mapping over status array */}
            {status.map((item, index) => (
              <Box key={index} sx={{ mt: 2 }}>
                <Typography id="transition-modal-description">
                  Status: <strong>{item.status}</strong>
                </Typography>
                <Typography id="transition-modal-description">
                  Applied Date: <strong>{item.date}</strong>
                </Typography>
              </Box>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
