import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  styled,
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const StatItem = ({ number, title, description }) => (
  <Box textAlign="center">
    <Typography variant="h4" color="primary" gutterBottom>
      {number}
    </Typography>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Box>
);

const CompanyShowcase = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledCardMedia
              image="data:image/jpeg;base64,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"
              title="Office meeting"
            />
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Good Life Begins With A Good Company
          </Typography>
          <Typography variant="body1" paragraph>
            Ultrices purus dolor cursus sit amet et ipsum. Ultrices purus diam
            sapien ut lacus sed. Nec elit mattis adipiscing et diam. Eu
            sagittis consectetur diam sed sed amet. Vulputate porttitor congue faucibus
            eu suscipit feugiat elementum integer.
          </Typography>
          <StyledButton variant="contained" color="primary">
            Apply Job
          </StyledButton>
          <StyledButton variant="outlined" color="primary">
            Learn more
          </StyledButton>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <StatItem
              number="12k+"
              title="Clients worldwide"
              
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatItem
              number="20k+"
              title="Active resume"
             
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatItem
              number="18k+"
              title="Companies"
             
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyShowcase;