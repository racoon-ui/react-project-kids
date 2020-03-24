import React from 'react';

import Nav from '../components/Nav';
import Logo from '../components/Logo';
import '../containers/scss/common.scss';

const Footer = () => {
  return (
    <footer>
      <Nav className="sitemap-list" />
      <Logo type="footer" />
    </footer>
  );
};

export default Footer;
