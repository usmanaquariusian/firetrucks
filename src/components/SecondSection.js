// src/components/SecondSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Second-Hero-Desktop.jpg';

const SecondSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        color: 'white',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column', // Column layout for extra small screens (default)
            md: 'row' // Row layout for medium and larger screens
          },
          justifyContent: 'space-between',
          width: '30%', // Full width of the container
          maxWidth: '600px', // Optional: Limit the maximum width of the container
          mb: 2,
        }}
      >
        <Box
          sx={{
            borderTop: '1px solid white',
            borderRight: {
              xs: 'none', // No border-right on extra small screens
              md: '1px solid white' // Border-right on medium and larger screens
            },
            paddingTop: '10px',
            paddingRight: '10px',
            width: {
              xs: '100%', // Full width on extra small screens
              md: '25%' // Set each box to 25% width on medium and larger screens
            },
            textAlign: 'center',
            mb: {
              xs: 2, // Margin bottom on extra small screens
              md: 0 // No margin bottom on medium and larger screens
            }
          }}
        >
          <Box
            sx={{
              background: 'rgba(57, 60, 65, 0.7)', // Transparent background
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6">Feature 1</Typography>
            <Typography variant="body1">Description of feature 1.</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: '1px solid white',
            paddingTop: '10px',
            width: {
              xs: '100%', // Full width on extra small screens
              md: '25%' // Set each box to 25% width on medium and larger screens
            },
            textAlign: 'center',
            mb: {
              xs: 2, // Margin bottom on extra small screens
              md: 0 // No margin bottom on medium and larger screens
            }
          }}
        >
          <Box
            sx={{
              background: 'rgba(57, 60, 65, 0.7)', // Transparent background
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6">Feature 2</Typography>
            <Typography variant="body1">Description of feature 2.</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: '1px solid white',
            borderLeft: {
              xs: 'none', // No border-left on extra small screens
              md: '1px solid white' // Border-left on medium and larger screens
            },
            paddingTop: '10px',
            paddingLeft: '10px',
            width: {
              xs: '100%', // Full width on extra small screens
              md: '25%' // Set each box to 25% width on medium and larger screens
            },
            textAlign: 'center'
          }}
        >
          <Box
            sx={{
              background: 'rgba(57, 60, 65, 0.7)', // Transparent background
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex', // Align children horizontally
                flexDirection: 'row', // Arrange children in a row
                alignItems: 'center', // Center items vertically
                justifyContent: 'center', // Center items horizontally
                gap: '8px', // Space between the title and description
              }}
            >
              <Typography variant="h6" sx={{ color: '#c7c7c7', fontSize: '28px' }}>F3</Typography>
              <Typography variant="body1" sx={{ color: '#A2A3A5', fontSize: '18px' }}>Df3.</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#A2A3A5', fontSize: '12px' }}>Description of feature 3.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
