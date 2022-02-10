/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import { ColContainer, Title, Text } from '../../dist/Styles.jsx';

const data = [
  { name: 'service 1', image: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
  { name: 'service 2', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80' },
  { name: 'service 3', image: 'https://media.istockphoto.com/photos/business-holding-virtual-infographic-house-on-hand-real-estate-picture-id1285102341?b=1&k=20&m=1285102341&s=170667a&w=0&h=CGJMo0rj4hIozhB2ismCeNlt_pxda5t1yBA1EkwSANw=' },
  { name: 'service 4', image: 'https://www.pewresearch.org/wp-content/uploads/2021/08/FT_21.08.17_BigHousesSmallHouses_feature.jpg' },
];

const SvcContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;
const SvcBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Img = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;

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
    <ColContainer id="services">
      <Title>why choose us?</Title>
      <SvcContainer>
        {svc}
      </SvcContainer>

    </ColContainer>
  );
}

export default Services;
