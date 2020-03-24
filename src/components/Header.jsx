import React from 'react';
import '../containers/scss/common.scss';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Telbox from '../components/Telbox';

const Header = () => {
  return (
    <header>
      <Logo type="header" />
      <Nav className="gnb-list" />
      <Telbox />
    </header>
  );
};

export default Header;
