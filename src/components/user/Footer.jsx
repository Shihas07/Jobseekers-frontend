import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  styled,
} from '@mui/material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e2a38',
  color: 'white',
  padding: theme.spacing(6, 0),
  
  
}));

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    
  },
});

const SubscribeButton = styled(Button)({
  backgroundColor: '#4caf50',
  color: 'white',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const Footer = () => {
  return (
    <FooterContainer sx={{marginTop:"10px" ,paddingTop:"10px",paddingBottom:"10px"}}  >
      <Container maxWidth="lg" >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Job
            </Typography>
            <Typography variant="body1" color={"white"}>
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue
              nibh vivamus aliquet nunc mauris d...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box display="flex" flexDirection="column">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">For Candidates</FooterLink>
              <FooterLink href="#">For Employers</FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Job Categories
            </Typography>
            <Box display="flex" flexDirection="column">
              <FooterLink href="#">Telecommunications</FooterLink>
              <FooterLink href="#">Hotels & Tourism</FooterLink>
              <FooterLink href="#">Construction</FooterLink>
              <FooterLink href="#">Education</FooterLink>
              <FooterLink href="#">Financial Services</FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" gutterBottom>
              Et nunc praesent vitae tellus. Non turpis elementum viverra.
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email Address"
              margin="normal"
              InputProps={{
                style: { backgroundColor: 'white' },
              }}
            />
            <SubscribeButton fullWidth variant="contained" size="large">
              Subscribe now
            </SubscribeButton>
          </Grid>
        </Grid>
        <Box mt={5} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            © Copyright Job Portal 2024. Design by Figma spAce
          </Typography>
          <Box>
            <FooterLink href="#" mr={2}>
              Privacy Policy
            </FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;