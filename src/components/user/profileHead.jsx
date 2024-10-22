import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function ProfileHead() {
  return (
    <Box
      elevation={4}
      width={{ xs: "100%", sm: "80%" }}
      height={{ xs: "150px", sm: "220px" }}
      sx={{
        marginTop: "10px",
        marginLeft: { xs: "10px", sm: "100px" },
        marginRight: { xs: "10px", sm: "30px" },
        borderRadius: "40px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",

        // justifyContent:"center"
      }}
      boxShadow={10}
      // bgcolor="#78ded2"
    >
      <Box
        width={"202px"}
        bgcolor={"white"}
        height={"200px"}
        sx={{ marginLeft: "100px", borderRadius: "50%" }}
        boxShadow={10}
      >
        <img
          src="data:image/png;base64,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" // Replace with your image URL
          alt="Profile"
          style={{
            width: "100%", // Make the image take up full width
            height: "100%", // Make the image take up full height
            objectFit: "cover", // Ensures the image covers the area evenly
            borderRadius: "50%", // Ensures the image fits within the circular shape
          }}
        />
      </Box>
      <Box width={"500px"} bgcolor={"white"} height={"200px"} boxShadow={3}>
        <Typography variant="h5" fontFamily={"_apple-"}>
          userName
        </Typography>

        <Box sx={{display:"flex"}}>
        <Box sx={{ borderRight: "1px solid" }} width={"200px"}>
          <Typography
            variant="h6"
            fontFamily={"_apple-"}
            sx={{ marginTop: "30px", marginLeft: "30px"  }}width={"200px"}
          >
            <LocationOnIcon />
            location
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"_apple-"}
            sx={{ marginTop: "30px", marginLeft: "30px" }}
          >
            <WorkIcon />
            fresher
          </Typography>
          </Box>
          <Box>
          <Typography
            variant="h6"
            fontFamily={"_apple-"}
            sx={{ marginTop: "30px", marginLeft: "30px" }}
          >
            <LocalPhoneIcon />
            phone
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"_apple-"}
            sx={{ marginTop: "30px", marginLeft: "30px" }}
          >
            <EmailIcon />
             Email
          </Typography>
          </Box>
        </Box>

        
      </Box>
    </Box>
  );
}
