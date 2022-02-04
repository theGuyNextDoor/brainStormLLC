/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import { ColContainer } from '../../dist/Styles.jsx';

const data = [
  { name: 'service 1', image: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
  { name: 'service 2', image: '' },
  { name: 'service 3', image: '' },
  { name: 'service 4', image: '' },
];

const Title = styled.span` // MAYBE MAKE A GLOBAL STYLE
  flex: 1;
`;

const SvcContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;

  /* border: solid; */
`;

const SvcBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Img = styled.img`
  width: 70%;
  height: 50%;
  border-radius: 50%;
`;

function Services() {
  const svc = data.map((item, index) => {
    const { name, image } = item;
    return (
      <SvcBox key={index}>
        <Img src={image} alt="service info" />
        <span>{name}</span>
      </SvcBox>
    );
  });

  return (
    <ColContainer>
      <Title>why choose us?</Title> {/* maybe make global style */}
      <SvcContainer>
        {svc}
      </SvcContainer>

    </ColContainer>
  );
}

export default Services;
