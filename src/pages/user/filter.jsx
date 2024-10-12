import React, { useEffect, useState } from "react";
import { Box, Typography,List,ListItem ,FormControlLabel,Checkbox,Slider} from "@mui/material";
import CommonInput from "../../components/Common/TextField";
import CategoryFetch from "../../services/user/fetchCategory";
// import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterPage({onChange,location}) {
  const [category,setCategory]=useState([])
  console.log("category",category)

  const fetchCategory=async()=>{
         
      const response=await CategoryFetch()

        if(response){
            setCategory(response.category)
        }
  }

   useEffect(()=>{
       fetchCategory()
   },[])
  return (
    <Box
      sx={{
        width: "90%",
        height: "500px",
        bgcolor: "#EBF5F4",
        marginLeft: "20px",
        marginRight: "40px",
        marginTop: "50px",
        borderRadius:"10px" 
      }}
    >
      <Box sx={{ marginLeft: "30px", marginTop: "30px",}}>
        <Typography  fontSize="20px" fontStyle="italic">
          search by job title
        </Typography>

        <Box marginRight={"30px"}>
          {" "}
          <CommonInput onChange={(e)=>onChange(e.target.value)} background={"white"} height={"100%"} />
        </Box>

        <Box marginTop={"10px"}>
          {" "}
          <Typography  fontSize="20px" fontStyle="italic">
            Location
          </Typography>
        </Box>
        <Box marginRight={"30px"}>
          {" "}
          <CommonInput onChange={(e)=>location(e.target.value)} background={"white"} height={"100%"} />
        </Box>
        <Box marginTop={"10px"}>
          {" "}
          <Typography  fontSize="20px" fontStyle="italic">
            category
          </Typography>
        </Box>
        <List>
        {category.length > 0 ? (
          category.map((data) => (
            <ListItem key={data._id}> {/* Ensure you use a unique key */}
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={selectedCategories.includes(data.name)} // Adjust according to your data
                    // onChange={handleCheckboxChange}
                    // value={data.name} // Assuming category has a name property
                     sx={{ color: 'black', '&.Mui-checked': { color: 'white' } }} // Customize checkbox color
                  />
                }
                label={<Typography >{data.categoryName}</Typography>}
              />
            </ListItem>
          ))
        ) : (
          <Typography >No categories available.</Typography>
        )}
      </List>

         
          
      <Box marginTop={"10px"}>
          {" "}
          <Typography  fontSize="20px" fontStyle="italic">
            salary
          </Typography>
        </Box>
         
        <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box>
      </Box>
    </Box>
  );
}
