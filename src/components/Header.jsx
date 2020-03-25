/** @jsx jsx */
import { css,Global,jsx } from '@emotion/core';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Telbox from '../components/Telbox';


const headerstyle = css`
  background-color: #d13030;
  text-align: center;
  img {
    width: 100%;
    vertical-align: middle;
  }
  @media (min-width: 1024px) {
    /* pc */
    height: 84px;
    line-height: 84px;
    .tel_box {
      display: block;
    }
    h1 {
      float: left;
      width: 250px;
      border-right: 1px #d74949 solid;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
  @media (max-width: 1024px) {
    /* m */
    height: 68px;
    line-height: 68px;
  }
`;










const Header = (props) => {
  return (
    <header css=
      {headerstyle}
      {...props}
    >
      <Logo type="header" />
      <Nav gnb />
      <Telbox />
    </header>
  );
};

export default Header;
