import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../dist/images/logo.png';

function Footer() {
  return (
    <Grid id="contact" container color="#FFF" backgroundColor="#0C0A22" sx={{ padding: 2 }}>

      <Grid item xs={8}>
        <Box component="img" src={logo} alt="Logo" sx={{ width: 100, height: 100 }} />
      </Grid>

      <Grid item xs={4} container direction="column">
        <Typography>Phill Tsang Group LLC</Typography>

        <Typography>Email: phillip@philltsanggroup.co</Typography>

        <Typography>Phone: (408) 320-8628</Typography>

        <Grid container>
          <Link href="https://www.linkedin.com/in/philliptsang/" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://www.facebook.com/phillip.tsang.5" target="_blank">
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com/thenotoriousphill/" target="_blank">
            <InstagramIcon />
          </Link>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Footer;
