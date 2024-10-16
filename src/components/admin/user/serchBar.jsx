import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Container,
  InputAdornment,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CategoryFetch from '../../../services/user/fetchCategory';

const SearchBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  flex: 2,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
}));

const SearchSelect = styled(Select)(({ theme }) => ({
  flex: 1,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));


   
const CombinedJobSearchBar = ({onChange}) => {
  const [fetch,setFetch] =useState([])
  const [title,setTitile] =useState("")
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

    console.log("fetchcartemf",fetch)
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

       onChange({title,location,category})
    // Handle form submission here
    console.log('Form submitted');
  };

   const getCategory=async()=>{
      const response=await CategoryFetch()
        
        if(response){
          setFetch(response.category)
        }

   }
   useEffect(()=>{
     getCategory()
   },[])
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" color='white' fontFamily={"-apple"}>
          Find Your Dream Job Today!
        </Typography>
        <Typography variant="h6" gutterBottom align="center" color='white'>
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </Typography>
        <form onSubmit={handleSubmit}>
          <SearchBar>
            <SearchField
              fullWidth
              placeholder="Job Title or Company"
              variant="outlined"
              value={title} // Bind the input to state
              onChange={(e)=>setTitile(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* <SearchSelect
              value={location}
              onChange={handleLocationChange}
              displayEmpty
              renderValue={(selected) => selected ? selected : "Select Location"}
              startAdornment={<LocationOnIcon sx={{ mr: 1 }} />}
            >
              <MenuItem value="">
                <em>Select Location</em>
              </MenuItem>
              <MenuItem value="new-york">New York</MenuItem>
              <MenuItem value="london">London</MenuItem>
              <MenuItem value="tokyo">Tokyo</MenuItem>
            </SearchSelect> */}
             <SearchField
              fullWidth
              placeholder="location"
              variant="outlined"
              value={location} // Bind the input to state
              onChange={(e)=>setLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="center">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <SearchSelect
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              renderValue={(selected) => selected ? selected : "Select Category"}
              startAdornment={<WorkIcon sx={{ mr: 1 }} />}
            >
            <MenuItem value="">
                <em>Select Category</em>
              </MenuItem>
              {/* Map over fetch to render each category */}
              {fetch.map((cat) => (
                <MenuItem key={cat._id} value={cat.categoryName}>
                  {cat.categoryName}
                </MenuItem>
              ))}
            </SearchSelect>
            <SearchButton
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
            >
              Search Job
            </SearchButton>
          </SearchBar>
        </form>
      </Box>
    </Container>
  );
};

export default CombinedJobSearchBar;