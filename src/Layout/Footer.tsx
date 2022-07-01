import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      top: 0,
      left: 0,
      zIndex: 2,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      p: 6,
    }}
  >
    <Typography
      variant="body1"
      color="initial"
      sx={{
        fontsize: '1.5rem',
        lineHeight: '2rem',
        flex: 1,
      }}
    >
      &copy;2022 All rights reserved
    </Typography>
    <Typography
      variant="h1"
      color="textBlack"
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      NFT Mint BØØSTRAP
    </Typography>
    <Typography
      variant="body1"
      color="initial"
      sx={{
        fontsize: '1.5rem',
        lineHeight: '2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1,
      }}
    >
      Privacy Policy
    </Typography>
  </Box>
);

export default Footer;
