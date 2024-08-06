// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Main.avif';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${heroImage})`,
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
        <Typography variant="h2">Cybertruck</Typography>
      
        
            <Box textAlign="center"
            sx={{
              width:'70%',
              borderTop: '4px solid #8e8e8e',
              paddingTop: '1px',
              borderRadius: '1px', // Optional: Add border radius for rounded corners
              textAlign: 'center',
              textAlign: 'center',
            }}
          >
           <Button
  variant='contained'
  sx={{
    background: '#121212', // Transparent background
    textAlign: 'center',
    flexDirection: 'row', // Arrange children in a row (not necessary for Button but kept for context)
    alignItems: 'center', // Center items vertically
    width: '100%', // Make the button full width
    color:'#8e8e8e',
    padding: '5px 20px', // Adjust padding as needed
    borderRadius: '1px', // Optional: Add border radius for rounded corners
    '&:hover': {
      backgroundColor: '#12121280', // Darker background on hover
    },
  }}
>
  Order Now
</Button>

        </Box>
    </Box>
    </Box>
      
  );
};

export default HeroSection;
