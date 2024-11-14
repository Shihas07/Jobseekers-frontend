import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Add a menu icon for mobile view
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Sidebar({ title, navItems }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is smaller than 'md'
  const navigate = useNavigate(); // Initialize useNavigate

  // State to control drawer open/close
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the provided path
    if (isMobile) {
      setOpen(false); // Close the drawer on mobile after navigation
    }
  };

     console.log(open)
  const drawer = (
    <Container 
      sx={{ 
        width: 240, 
        backgroundColor: 'primary.main', 
        height: '100vh', 
        padding: 2,
        display: 'flex', // Use flexbox to layout the sidebar items
        flexDirection: 'column',
        
         // Align items in column
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, color: 'white' }}>
        {title}
      </Typography>
      <List >
        {navItems.map((item, index) => (
          <ListItem  button key={index} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon sx={{ color: 'white' }}> {/* Set icon color to white */}
              {item.icon}
            </ListItemIcon>
            <ListItemText   primary={item.label} sx={{ color: 'white' }} /> {/* Optional: set text color to white */}
          </ListItem>
        ))}
      </List>
    </Container>
  );

  return (
    <>
      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Sidebar for desktop */}
      <Container 
        sx={{ 
          width: 240, 
          backgroundColor: 'primary.main', 
          height: '100vh', 
          padding: 2,
          display: { xs: 'none', sm: 'block' }, // Hide sidebar on small screens
          position: 'fixed', // Fix the sidebar to the left
          left: 0,          // Align it to the left end of the page
          top: 0,           // Start from the top of the page
          zIndex: 1000,     // Ensure it stays above other elements
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, color: 'white' }}>
          {title}
        </Typography>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
              <ListItemIcon sx={{ color: 'white' }}> {/* Set icon color to white */}
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: 'white' }} /> {/* Optional: set text color to white */}
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Menu icon for mobile view */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
