import React, { useState } from 'react';
import styled from 'styled-components';
import { RowContainer, Text } from '../../dist/Styles.jsx';

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  height: 70%;

  /* border: solid; */
`;
const ImageCarousel = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 70%;
`;
const CurrentImageBox = styled.div`
  width: 80%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const projectData = ['Project name 1', 'Project name 2', 'Project name 3'];
const imgData = [
  { name: 'image 1', url: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
  { name: 'image 2', url: 'https://media.istockphoto.com/photos/business-holding-virtual-infographic-house-on-hand-real-estate-picture-id1285102341?b=1&k=20&m=1285102341&s=170667a&w=0&h=CGJMo0rj4hIozhB2ismCeNlt_pxda5t1yBA1EkwSANw=' },
  { name: 'image 3', url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
];

function Projects() {
  const [currentProjectImage, setCurrentProjectImage] = useState(0);

  const projects = projectData.map((item, index) => <Text style={{ color: currentProjectImage === index && '#39C5FE' }} key={index}>{item}</Text>);

  const images = imgData.map((item, index) => {
    const { name, url } = item;
    return (
      <CurrentImageBox>
        <Image key={index} src={url} alt={name} />
      </CurrentImageBox>
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
    <RowContainer id="projects">
      <ListBox>
        {projects}
      </ListBox>
      <ImageCarousel>
        <span onClick={prevProject}>&lt;</span>
        {images[currentProjectImage]}
        <span onClick={nextProject}>&gt;</span>
      </ImageCarousel>
    </RowContainer>
  );
}

export default Projects;
