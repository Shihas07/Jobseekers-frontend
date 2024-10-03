import { AddBox } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Flex } from "antd";
import React from "react";

export default function JobManagementPage() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained">Add Job</Button>
      </Box>
    </div>
  );
}
