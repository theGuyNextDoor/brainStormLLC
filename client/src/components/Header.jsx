/* eslint-disable import/extensions */
import React from 'react';
import {
  NavBar, Logo, Menu, Contact,
} from '../../dist/styles/Header.jsx';

function Header() {
  return (
    <NavBar>
      <Logo>logo</Logo>
      <Menu>
        <span>home</span>
        <span>about</span>
        <span>services</span>
        <span>projects</span>
        <span>contact</span>
      </Menu>
      <Contact>
        <span>email</span>
        <span>phone</span>
      </Contact>
    </NavBar>
  );
}

export default Header;
