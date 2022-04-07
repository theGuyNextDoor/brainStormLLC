import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

const dataTop = [
  { name: 'image 1', url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { name: 'image 3', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80' },
  { name: 'image 5', url: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
];
const dataBottom = [
  { name: 'image 2', url: 'https://media.istockphoto.com/photos/business-holding-virtual-infographic-house-on-hand-real-estate-picture-id1285102341?b=1&k=20&m=1285102341&s=170667a&w=0&h=CGJMo0rj4hIozhB2ismCeNlt_pxda5t1yBA1EkwSANw=' },
  { name: 'image 4', url: 'https://www.pewresearch.org/wp-content/uploads/2021/08/FT_21.08.17_BigHousesSmallHouses_feature.jpg' },
  { name: 'image 6', url: 'https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg' },
];

function PhotoGallery() {
  const [featured, setFeatured] = useState({ url: dataTop[0].url, name: dataTop[0].name });

  function makeFeaturedImage(url, name) {
    setFeatured({ url, name });
  }

  const imagesTop = dataTop.map((item, index) => {
    const { name, url } = item;
    return (
      <Grid
        key={index}
        item
        component="img"
        src={url} alt={name}
        onClick={() => makeFeaturedImage(url, name)}
        sx={{ height: '90%', width: '25%' }}
      />
    );
  });

  const imagesBottom = dataBottom.map((item, index) => {
    const { name, url } = item;
    return (
      <Grid
        key={index}
        item
        component="img"
        src={url} alt={name}
        onClick={() => makeFeaturedImage(url, name)}
        sx={{ height: '90%', width: '25%' }}
      />
    );
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      backgroundColor="#0C0A22"
      sx={{ height: 300, padding: 2 }}
    >
      <Box
        component="img"
        src={featured.url}
        alt={featured.name}
        onClick={() => makeFeaturedImage(item)}
        sx={{ height: '100%', width: '30%' }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '100%',
        }}
      >
        <Grid container justifyContent="space-between" sx={{ height: '50%' }}>
          {imagesTop}
        </Grid>
        <Grid container justifyContent="space-between" alignItems="flex-end" sx={{ height: '50%' }}>
          {imagesBottom}
        </Grid>
      </Box>
    </Grid>
  );
}

export default PhotoGallery;
