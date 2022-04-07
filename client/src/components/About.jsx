import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  height: 100vh;
  width: 100vw;
  background-image: url('/background-1.jpg');
  background-size: cover;
  padding-right: 10%;
  margin-bottom: 5vh;
`;
const Text = styled.span`
  text-shadow: 0 0 3px #39C5FE, 0 0 5px #FFF;
  /* color: #39C5FE; */
`;

function About() {
  return (
    <Background id="about">
      <Text>welcome / short description</Text>
    </Background>
  );
}

export default About;
