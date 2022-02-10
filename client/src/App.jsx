/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import QA from './components/QA.jsx';
import Projects from './components/Projects.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Register from './components/Register.jsx';
import Footer from './components/Footer.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: #39C5FE;
`;
const Container = styled.div`
  width: 80vw;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #D22FFF;
  `;

function App() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <About />
        <Services />
        <QA />
        <Projects />
        <PhotoGallery id="photos" />
        <Register id="register" />
      </Container>
      <Footer id="contact" />
    </Wrapper>
  );
}

export default App;
