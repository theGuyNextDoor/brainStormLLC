/* eslint-disable import/extensions */
import React from 'react';
import { Wrapper } from '../dist/Styles.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import QA from './components/QA.jsx';
import Projects from './components/Projects.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Register from './components/Register.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Wrapper>
      <Header />
      <About />
      <Services />
      <QA />
      <Projects />
      <PhotoGallery />
      <Register />
      <Footer />
    </Wrapper>
  );
}

export default App;
