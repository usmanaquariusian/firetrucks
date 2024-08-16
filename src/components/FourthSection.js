import React from 'react';
import { Box, Typography } from '@mui/material';
import '../App.css'; // Optional: for external CSS


const FourthSection = () => {
  return (
    <Box
    sx={{
      height: '200vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#111',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginTop: '-20%',
      width: '100vw',  
      display: 'flex',
      overflow: 'hidden', 
    }}
    >
      <Box
       className="grid-container"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, auto)',
          gap: '1rem',
          width: '100%',
          maxWidth: '1200px', // Adjust based on your design
        }}
      >
        <Box
         className="grid-item1"
          sx={{
            gridColumn: '1 / span 2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <video
          className="video clip-1"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
            preload="auto"
            poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-No-Paint-No-Chips-Desktop-STATIC.png"
            autoPlay
            playsInline
            loop
            muted
          >
            <source
              src="https://digitalassets.tesla.com/tesla-contents/video/upload/Cybertruck-No-Paint-No-Chips-Desktop-Mobile-Tablet.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box
        className="grid-item3"
          sx={{
           
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
           <Box
        className="dotted-background2"
          sx={{
            borderRadius: '8px',
          }}
        >
          <Box
        className="container"
          sx={{
            borderRadius: '8px',
          }}
        >
          <Typography  className="header left" variant="h1" sx={{ fontSize: '25px', fontWeight:'400', letterSpacing: '0.4px', lineHeight: '10px', padding: '176px 0px 0px 141px',
          margin: '0', letterSpacing: '1.1px',textTransform: 'uppercase',textAlign: 'justify',zIndex: '4'}}>
            SHATTER-RESISTANT
          </Typography>
          <Typography  className="para"  variant="h2" sx={{ fontSize: '13px', mt: '1rem',fontWeight: '400', letterSpacing: '1.1px',lineHeight: '24px',padding:'37px 12px 0px 0px',
          margin: '0',textTransform: 'uppercase', textAlign: 'justify', zIndex: '4', textAlign:'right' }}>
            Armor Glass can resist the impact of a baseball at 70 mph or class 4 hail. Acoustic glass helps
            <br />
            make the cabin as quiet as outer space.
          </Typography>
          <div id="hr">   </div>
        </Box>
        </Box>
        </Box>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Box
        className="grid-item2"
          sx={{
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Box
        className="dotted-background"
          sx={{
            padding: '2rem',
            borderRadius: '8px',
          }}
        >
          <Box
        className="container"
          sx={{
            padding: '2rem',
            borderRadius: '8px',
          }}
        >
          <Typography className="header right" variant="h1" sx={{ fontSize: '25px', fontWeight:'400', letterSpacing: '0.4px', lineHeight: '10px', margin: '-9px 0px 0px -35px !important',
          letterSpacing: '1.1px',textTransform: 'uppercase',textAlign: 'justify',zIndex: '4'}}>
            NO PAINT, NO CHIPS
          </Typography>
          <Typography    className="para para-right"  variant="h2" sx={{ fontSize: '13px', mt: '1rem',fontWeight: '400', letterSpacing: '1.1px',lineHeight: '24px', margin:'34px -13px 0px -34px !important',
            textTransform: 'uppercase', textAlign: 'justify', zIndex: '4', textAlign:'left' }}>
            An ultra-hard stainless-steel exoskeleton helps to reduce dents, damage and long-term
            <br />
            corrosion. Repairs are simple and quick.
          </Typography>
          <div id="hr2">   </div>
          </Box>
          </Box>
        </Box>

       
          <Box
        className="grid-item4" 
          sx={{
            gridColumn: '1 / span 2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <video
           className="video clip-2" 
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
            preload="auto"
            poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-No-Paint-No-Chips-Desktop-STATIC.png"
            autoPlay
            playsInline
            loop
            muted
          >
            <source
              src="https://digitalassets.tesla.com/tesla-contents/video/upload/v1700624623/Cybertruck-Shatter-Resistant-Desktop-Mobile-Tablet.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>  
      </Box>
    </Box>
  );
};

export default FourthSection;
