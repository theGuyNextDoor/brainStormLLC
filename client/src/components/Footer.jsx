import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../dist/logo.png';

function Footer() {
  return (
    <Grid id="contact" container sx={{ padding: 2 }}>

      <Grid item xs={8}>
        <Box component="img" src={logo} alt="Logo" sx={{ width: 100, height: 100 }} />
      </Grid>

      <Grid item xs={4} container direction="column">
        <Typography>Phill Tsang Group LLC</Typography>

        <Typography>Email: phillip@philltsanggroup.co</Typography>

        <Typography>Phone: (408) 320-8628</Typography>

        <Grid container>
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Footer;
