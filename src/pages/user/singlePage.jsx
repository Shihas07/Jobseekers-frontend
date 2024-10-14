import { Box, Typography } from "@mui/material";
import React from "react";

export default function SinglePage({ data }) {
  return (
    <Box
      sx={{
        width: "90%", // Fixed width typo
        height: "100%",
        boxShadow: 3,
        bgcolor: "#f9f9f9", // Add a light background color for better readability
        marginTop: "30px",
        marginX: "auto", // Center the box horizontally
        padding: "30px", // Add padding inside the box for content spacing
        borderRadius: "8px", // Rounded corners for a modern look
      }}
    >
      {/* Job Description Section */}
      <Typography
        variant="h4"
        fontFamily="Roboto, sans-serif"
        fontWeight="bold"
        color="primary"
        marginBottom="20px"
      >
        Job Description
      </Typography>

      <Typography variant="body1" color="textSecondary" marginBottom="40px">
        {data.jobDescription}
      </Typography>

      {/* Key Responsibilities Section */}
      <Typography
        variant="h4"
        fontFamily="Roboto, sans-serif"
        fontWeight="bold"
        color="primary"
        marginBottom="20px"
      >
        Key Responsibilities
      </Typography>

      <Typography variant="body1" color="textSecondary" marginBottom="40px">
        {data.jobResponsibilities}
      </Typography>

      {/* Skills Section */}
      <Typography
        variant="h4"
        fontFamily="Roboto, sans-serif"
        fontWeight="bold"
        color="primary"
        marginBottom="20px"
      >
        Skills
      </Typography>

      <Typography variant="body1" color="textSecondary">
        {data.jobskill}
      </Typography>

      <Typography
        variant="h4"
        fontFamily="Roboto, sans-serif"
        fontWeight="bold"
        color="primary"
        marginBottom="20px"
        marginTop="20px"
      >
       qualification
      </Typography>

      <Typography variant="body1" color="textSecondary">
        {data.qualification}
      </Typography>
    </Box>
  );
}
