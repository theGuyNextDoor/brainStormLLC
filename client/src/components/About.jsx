import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  width: 100vw;
  height: 100vh;
  background-image: url('https://image.shutterstock.com/image-photo/abstract-city-building-skyline-metropolitan-260nw-1622580361.jpg');
  background-size: cover;
  border-bottom: solid;
  margin-bottom: 2em;
`;

function About() {
  return (
    <Background>
      <span>welcome / short description</span>
      <span>get a quote</span>
    </Background>
  );
}

export default About;
