/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import logo from '../../dist/logo.png';

const NavBar = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  height: 5vh;
  width: 100vw;
  background-color: #0C0A22;
  color: #39C5fE;
`;
const Logo = styled.div`
  flex: 1;
  padding-left: 2%;
`;

const Menu = styled.div`
  /* position: fixed; // Here */
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;
const Image = styled.img`
  width: 5vh;
  height: 4vh;
`;

const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  text-align: right;
  padding-right: 2%;
`;

function Header() {
  return (
    <BrowserRouter>
      <NavBar>
        <Logo>
          <Image src={logo} alt="Logo" />
        </Logo>
        <Menu>
          <Link to="#about" smooth style={{ textDecoration: 'none', textTransform: 'none', color: '#FFF' }}>
            About
          </Link>
          <Link to="#services" smooth style={{ textDecoration: 'none', textTransform: 'none', color: '#FFF' }}>Services</Link>
          <Link to="#projects" smooth style={{ textDecoration: 'none', textTransform: 'none', color: '#FFF' }}>Projects</Link>
          <Link to="#contact" smooth style={{ textDecoration: 'none', textTransform: 'none', color: '#FFF' }}>Contact</Link>

        </Menu>
        <Contact>
          <span style={{ textTransform: 'none', color: '#FFF' }}>Email: phillip@philltsanggroup.co</span>
          <span style={{ textTransform: 'none', color: '#FFF' }}>Phone: (408) 320-8628</span>
        </Contact>
      </NavBar>
    </BrowserRouter>
  );
}

export default Header;
