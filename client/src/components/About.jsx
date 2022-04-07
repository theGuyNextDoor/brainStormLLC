import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box
      component="div"
      id="about"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        paddingLeft: '10%',
      }}
    >
      <Box sx={{ width: '50%', color: '#FFF', textShadow: '0 0 20px #000, 0 0 40px #000' }}>
        <Typography>
          Hi, Im Phillip, and I am a Real Estate Investor and Property Manager in the San
          Francisco and San Mateo county area. I majored in Business Economics at UCSB,
          and am passionate about empowering people in real estate, business, and investing.
        </Typography>
        <Typography>
          When I’m not running Phill Tsang Group, you can usually find me practicing Brasilian
          Jiu Jitsu in my free time.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
