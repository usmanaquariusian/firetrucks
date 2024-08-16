// src/components/SecondSection.js
import React from 'react';
import { Box } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Second-Hero-Desktop.jpg';
import Featurebox from './Featurebox'; // Updated import statement

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
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          justifyContent: 'space-between',
          width: '30%',
          maxWidth: '600px',
          mb: 2,
        }}
      >
        <Featurebox
          borderTop="1px solid white"
          borderLeft={{
            xs: 'none',
            md: '1px solid white'
          }}
          title="F 1"
          description="De 1."
          secondaryDescription="Ad 3."
        />
        <Featurebox
          borderTop="1px solid white"
          title="Feature 2"
          description="Des2."
           secondaryDescription="Ad 3."
        />
        <Featurebox
          borderTop="1px solid white"
          borderLeft={{
            xs: 'none',
            md: '1px solid white'
          }}
          title="F3"
          description="Df3."
          secondaryDescription="Ad 3."
          titleColor="#c7c7c7"
          descriptionColor="#A2A3A5"
          titleFontSize="28px"
          descriptionFontSize="18px"
        />
      </Box>
    </Box>
  );
};

export default SecondSection;
