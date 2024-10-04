import { AddBox } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Flex } from "antd";
import React, { useState } from "react";
import ModalJob from "./modalJob";

export default function JobManagementPage() {
  const [Open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log("datas", data);
     handleClose()
     reset()
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleOpen}>
          Add Job
        </Button>
        <ModalJob open={Open} handleClose={handleClose} onSubmit={onSubmit} />
      </Box>
    </div>
  );
}
