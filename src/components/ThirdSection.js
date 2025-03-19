// src/components/SecondSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const ThirdSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
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
          borderTop: '1px solid white',
            borderRight: '1px solid white',
            borderBottom: '1px solid white',
            borderLeft: '1px solid white',
          height: '100vh',
          
          width: '95%',
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
            
           
            padding: '20px',
            width: '95%', // Set each box to 25% width
            textAlign: 'center',
            
          }}
        >
          <Box
            
              
           
          >
             <VideoPlayer
        src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Cybertruck-Built-For-Any-Planet-Desktop.mp4"
        type="video/mp4"
        corner="bottom-right"
        size="99px"
        showButton={true}
        clip={{
          topLeft: [3, 3],
          topRight: [5, 5],
          bottomRight: [0, 0],
          bottomLeft: [0, 0],
        }}
        />
        
          </Box>
        </Box>
        
        <Box
          sx={{
           
            padding: '20px',
           
            width: '95%', // Set each box to 25% width
            textAlign: 'center',
          
          }}
        >
          <Box
            sx={{
              background: '#12121280', // Transparent background
              padding: '10px',
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


            <Typography variant="body1"sx={{ color: '#A2A3A5', fontSize: '18px' }}>Df3.</Typography>
            <Typography variant="body1"sx={{ color: '#A2A3A5', fontSize: '12px' }}>Description of feature 3.</Typography>
            </Box>  
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdSection;
