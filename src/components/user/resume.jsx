import { Box, Button } from "@mui/material";

export default function Resume() {
  return (
    <Box
      sx={{
        width: "800px", // Full width
        height: "100%", // Full height
        display: "flex", // Flex container
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically (if needed)
        bgcolor: "yellowgreen" // Background color
      }}
    >
      <Box
        sx={{
          width: "100%", // Full width of parent
          maxWidth: "600px", // Optional max width for responsiveness
          bgcolor: "white", // Inner box background color
          padding: "16px", // Add padding for content
          borderRadius: "8px", // Optional rounded corners
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" // Optional shadow for depth
        }}
      >
        <Button variant="contained">Add CD</Button> {/* Button text updated to capitalized */}
      </Box>
    </Box>
  );
}
