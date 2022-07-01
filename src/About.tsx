import { Box, Typography } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        py: 6,
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.5s ease-out 0.2s',
      }}
      id="about"
      ref={ref}
    >
      <Typography
        variant="h1"
        color="text.primary"
      >
        Describe the NFT drop
      </Typography>

    </Box>
  );
};

export default About;
