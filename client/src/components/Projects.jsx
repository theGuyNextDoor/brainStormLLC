import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const projectData = ['Project name 1', 'Project name 2', 'Project name 3'];
const imgData = [
  { name: 'image 1', url: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
  { name: 'image 2', url: 'https://media.istockphoto.com/photos/business-holding-virtual-infographic-house-on-hand-real-estate-picture-id1285102341?b=1&k=20&m=1285102341&s=170667a&w=0&h=CGJMo0rj4hIozhB2ismCeNlt_pxda5t1yBA1EkwSANw=' },
  { name: 'image 3', url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
];

function Projects() {
  const [currentProjectImage, setCurrentProjectImage] = useState(0);

  const projects = projectData.map((item, index) => (
    <Typography
      key={index}
      variant="h5"
      sx={{ color: currentProjectImage === index && '#39C5FE' }}
    >
      {item}
    </Typography>
  ));

  const images = imgData.map((item, index) => {
    const { name, url } = item;
    return (
      <Box component="img" key={index} src={url} alt={name} sx={{ width: '80%', height: '80%' }} />
    );
  });

  function nextProject() {
    if (currentProjectImage === projects.length - 1) {
      setCurrentProjectImage(0);
    } else {
      setCurrentProjectImage(currentProjectImage + 1);
    }
  }
  function prevProject() {
    if (currentProjectImage === 0) {
      setCurrentProjectImage(projects.length - 1);
    } else {
      setCurrentProjectImage(currentProjectImage - 1);
    }
  }

  return (
    <Grid id="projects" container justifyContent="center" alignItems="center" sx={{ height: 300, padding: 2 }}>

      <Grid item xs={4} container direction="column" alignItems="center">
        {projects}
      </Grid>

      <Grid item container alignItems="center" justifyContent="center" xs={4}>
        <ArrowBackIosNewIcon onClick={prevProject} />
        {images[currentProjectImage]}
        <ArrowForwardIosIcon onClick={nextProject} />
      </Grid>

    </Grid>
  );
}

export default Projects;
