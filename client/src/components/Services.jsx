/* eslint-disable import/extensions */
import React from 'react';
import { Container, Title, Text, SvcContainer, SvcBox, Img } from '../../dist/styles/Services.jsx';

const data = [
  { name: 'service 1', image: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
  { name: 'service 2', image: '' },
  { name: 'service 3', image: '' },
  { name: 'service 4', image: '' },
];

function Services() {
  const svc = data.map((item, index) => {
    const { name, image } = item;
    return (
      <SvcBox key={index}>
        <Img src={image} alt="service info" />
        <Text>{name}</Text>
      </SvcBox>
    );
  });

  return (
    <Container>
      <Title>why choose us?</Title> {/* maybe make global style */}
      <SvcContainer>
        {svc}
      </SvcContainer>

    </Container>
  );
}

export default Services;
