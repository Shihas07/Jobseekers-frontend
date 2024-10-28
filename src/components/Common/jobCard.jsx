import React ,{useState} from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  styled,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import JobDetails from "../../pages/user/jobDetails";
import { useSelector } from "react-redux";
import Snackbar from '@mui/material/Snackbar';


const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  marginTop: theme.spacing(2),
  position: "relative",
}));

const BookmarkButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const JobInfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(2),
  "& svg": {
    marginRight: theme.spacing(0.5),
    fontSize: "1rem",
  },
}));

export default function JobListingCard({ job, value,apply }) {
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const vertical = "top"; // Change if needed
  const horizontal = "center";

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userDetails);
  console.log("user", user);

  const handleClickSnack = (message) => {
    setSnackMessage(message);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    navigate(`/JobDetails/${job._id}`);

    console.log("clicked");
  };

  // const handleClickApply = (id) => {
  //   console.log("applyClicked", id);

  //   if (user === null) {
  //     handleClickSnack("Please log in");
  //   } else {
  //     // Proceed with application logic
  //   }
  // };
  

  return (
    <StyledCard>
      <BookmarkButton size="small">
        <BookmarkBorderIcon />
      </BookmarkButton>
      <CardContent>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {/* {job.} */}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {job.jobTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {job.companyName}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2, mb: 2 }}>
          <JobInfoItem>
            <WorkOutlineIcon color="action" />
            <Typography variant="body2">{job.jobType}</Typography>
          </JobInfoItem>
          <JobInfoItem>
            <AttachMoneyIcon color="action" />
            <Typography variant="body2">{job.salaryRange}</Typography>
          </JobInfoItem>
          <JobInfoItem>
            <LocationOnIcon color="action" />
            <Typography variant="body2">{job.jobLocation}</Typography>
          </JobInfoItem>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          {" "}
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={
              value === "apply" ? () => apply(job._id) : handleClick
            }
          >
            {value.length > 0 ? value : "job details"}
          </Button>

          <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        
        autoHideDuration={3000}
        onClose={handleClose}
        message={snackMessage}
        ContentProps={{
          style: { backgroundColor: 'green', color: 'white' }, // Set your desired background and text color
        }}
        action={
          <Button color="inherit" onClick={handleClose}>
            Close
          </Button>
        }
      />
        
        </Box>
      </CardContent>
    </StyledCard>
  );
}
