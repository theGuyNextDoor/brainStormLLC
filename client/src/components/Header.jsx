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
  width: 99vw;
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
          <Link to="#about" smooth style={{ textDecoration: 'none', color: '#39C5FE' }}>
            about
          </Link>
          <Link to="#services" smooth style={{ textDecoration: 'none', color: '#39C5FE' }}>services</Link>
          <Link to="#projects" smooth style={{ textDecoration: 'none', color: '#39C5FE' }}>projects</Link>
          <Link to="#contact" smooth style={{ textDecoration: 'none', color: '#39C5FE' }}>contact</Link>

        </Menu>
        <Contact>
          <span>email: fakeemail@company.com</span>
          <span>phone: (415) 666-6666</span>
        </Contact>
      </NavBar>
    </BrowserRouter>
  );
}

export default Header;
