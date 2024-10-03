import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function Card({ width, height, bgcolor, title, innerBoxHead, data }) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1, 
        margin: 1,
      }}
    >
      <Paper
        elevation={2} 
        sx={{
          width: width,
          height: height,
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            padding: 1, 
            textAlign: 'center', 
            backgroundColor: '#f5f5f5', // Light background for the header
            borderBottom: '1px solid #e0e0e0', // Bottom border for separation
            fontWeight: 'bold', // Bold title
          }}
        >
          {title}
        </Typography>
        <Box 
          bgcolor={bgcolor} 
          sx={{ 
            padding: 1, // Padding for inner box
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%', // Full height for inner content
          }}
        >
          <Typography 
            variant="subtitle2" 
            sx={{ 
              marginBottom: 0.5, 
              color: '#333', 
            }}
          >
            {innerBoxHead}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#555', 
              textAlign: 'center', 
            }}
          >
            {data}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
