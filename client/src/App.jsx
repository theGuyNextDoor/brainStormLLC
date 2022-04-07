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
  color: #0C0A22;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <About />
      <Services />
      <QA />
      <Projects />
      <PhotoGallery id="photos" />
      <Register id="register" />
      <Footer id="contact" />
    </Wrapper>
  );
}

export default App;
