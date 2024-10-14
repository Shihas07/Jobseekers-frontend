import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, FormControlLabel, Checkbox, Slider, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import MUI icon for menu
import CommonInput from "../../components/Common/TextField";
import CategoryFetch from "../../services/user/fetchCategory";

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterPage({ onChange, location, categoryCheck }) {
  const [category, setCategory] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false); // State to toggle the drawer

  const fetchCategory = async () => {
    const response = await CategoryFetch();
    if (response) {
      setCategory(response.category);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  // Function to toggle the drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer content
  const filterContent = (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography fontSize="20px" fontStyle="italic">
        Search by Job Title
      </Typography>
      <CommonInput onChange={(e) => onChange(e.target.value)} background={"white"}  sx={{ height: { lg: "100%" } }}
 fullWidth />

      <Typography marginTop="20px" fontSize="20px" fontStyle="italic">
        Location
      </Typography>
      <CommonInput onChange={(e) => location(e.target.value)} background={"white"} sx={{ height: { lg: "100%" } }} fullWidth />

      <Typography marginTop="20px" fontSize="20px" fontStyle="italic">
        Category
      </Typography>
      <List>
        {category.length > 0 ? (
          category.map((data) => (
            <ListItem key={data._id}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={data.categoryName}
                    onChange={(e) => categoryCheck(e.target.value)}
                    sx={{ color: "black", "&.Mui-checked": { color: "white" } }}
                  />
                }
                label={<Typography>{data.categoryName}</Typography>}
              />
            </ListItem>
          ))
        ) : (
          <Typography>No categories available.</Typography>
        )}
      </List>

      <Typography marginTop="20px" fontSize="20px" fontStyle="italic">
        Salary
      </Typography>
      <Box sx={{ width: 200 }}>
        <Slider
          aria-label="Salary"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* Menu button visible on mobile */}
      <IconButton
        color="inherit"
        edge="start"
        sx={{ display: { xs: "block", md: "none" }, position: "absolute",  left: 20 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for mobile view */}
      <Drawer  anchor="left" open={drawerOpen}  onClose={toggleDrawer(false)}>
        {filterContent}
      </Drawer>

      {/* Main Filter Content for larger screens */}
      <Box
        sx={{
          width: "90%",
          height: "500px",
          bgcolor: "#EBF5F4",
          marginLeft: { xs: "auto", md: "20px" },
          marginRight: { xs: "auto", md: "40px" },
          marginTop: { xs: "20px", md: "50px" },
          borderRadius: "10px",
          p: 2,
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      >
        {filterContent}
      </Box>
    </Box>
  );
}
