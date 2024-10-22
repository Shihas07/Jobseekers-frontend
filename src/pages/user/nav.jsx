import React, { useState,useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Refresh } from "../../services/user";
import { Logout } from "@mui/icons-material";
import { useDispatch } from 'react-redux'; 
import { clearUser } from '../../redux/userSlice';
import Person2Icon from '@mui/icons-material/Person2';

const Navbar = () => {
 const  dispatch=useDispatch()

  const userDetails = useSelector((state) => state.user.userDetails);
 
    console.log("userDetails",userDetails)

  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const signup = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("/login");
  };



    const refresh=async()=>{
        
       await Refresh()
    }
  
    useEffect(()=>{
       refresh()   
        
    },[])

   const Logout=()=>{
      
    dispatch(clearUser()); 
   }
       
    

  const sidebarLinks = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleMenu}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/jobs" onClick={toggleMenu}>
        <ListItemText primary="Jobs" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={toggleMenu}>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleMenu}>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "2xl" }}
        // className="bg-transparent shadow-2xl"
      >
        <Toolbar className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
          {/* Left - Logo */}
          <Box className="flex items-center md:hidden lg:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon className="text-white" />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            // className="ml-2 text-white"
            color="white"
            sx={{ fontFamily: "fantasy" }}
          >
            jobseekers
          </Typography>

          {/* Center - Menu Links */}
          <Box className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-teal-500 hover:text-white text-lg font-semibold"
              // sx={{text:"text.primary"}}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className="text-teal-500 hover:text-white text-lg font-semibold"
            >
              Jobs
            </Link>
            <Link
              to="/about"
              className="text-teal-500 hover:text-white text-lg font-semibold"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-teal-500 hover:text-white text-lg font-semibold"
            >
              Contact Us
            </Link>
          </Box>

          {/* Right - Login/Register */}

          <Box className="flex space-x-4">
            {userDetails ? (
              <>
                <Typography variant="body1" color="white">
                  Welcome, {userDetails.name} 
                  <Person2Icon sx={{ color: 'primary.main', fontSize: 30 }} />
                    
                </Typography>
                <Button variant="text" onClick={Logout}  className="text-gray-300 hover:text-white">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="text" onClick={login} className="text-gray-300 hover:text-white">
                  Login
                </Button>
                <Button
                  variant="contained"
                  onClick={signup}
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
        className="bg-transparent"
      >
        <Box
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          className="w-64 p-4"
        >
          {sidebarLinks}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
