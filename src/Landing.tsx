import { Box, Typography } from '@mui/material';
import React from 'react';
import About from './About';
import HowItWorks from './HowItWorks';

const Landing: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      pt: 20,
      pb: 11,
    }}
    id="home"
  >
    <Typography
      variant="h1"
      color="text.primary"
    >
      Describe the NFT drop
    </Typography>
    <HowItWorks />
    <About />
  </Box>
);

export default Landing;
