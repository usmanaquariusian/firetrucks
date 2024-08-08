import React from 'react';
import { Box, Button } from '@mui/material';
import footerImage from '../content/images/cybertruck_footer.avif';
import logoImage from '../content/images/naffco_logo_for_websites.png';

const Footer = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box textAlign="center">
        <img src={logoImage} alt="Cybertruck Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'blue',
            color: 'white',
            border: '2px solid black',
            '&:hover': {
              backgroundColor: 'darkblue',
            },
          }}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
