/* eslint-disable import/extensions */
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const data = [
  { name: 'service 1', image: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
  { name: 'service 2', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80' },
  { name: 'service 3', image: 'https://media.istockphoto.com/photos/business-holding-virtual-infographic-house-on-hand-real-estate-picture-id1285102341?b=1&k=20&m=1285102341&s=170667a&w=0&h=CGJMo0rj4hIozhB2ismCeNlt_pxda5t1yBA1EkwSANw=' },
  { name: 'service 4', image: 'https://www.pewresearch.org/wp-content/uploads/2021/08/FT_21.08.17_BigHousesSmallHouses_feature.jpg' },
];

function Services() {
  const svc = data.map((item, index) => {
    const { name, image } = item;
    return (
      // <Grid key={index} item border="solid">
      <Grid key={index} item xs={3} container direction="column" alignItems="center">
        <Box component="img" src={image} alt="service info" sx={{ width: 150, height: 150, borderRadius: 50 }} />
        <Typography>{name}</Typography>
      </Grid>
    );
  });

  return (
    <Grid
      id="services"
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: 2, height: 300 }}
    >
      <Typography variant="h3">Why Choose Us?</Typography>
      <Grid container>
        {svc}
      </Grid>

    </Grid>
  );
}

export default Services;
