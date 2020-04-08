/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';

import Nav from '../components/Nav';
import Logo from '../components/Logo';



const FooterBox = styled.footer`
  padding-bottom:${props => props.padBottom || '0' };
  background-color:${props => props.backColor || '#000' };
  text-align: center;
  .sub-logo {
    padding: 30px 0;
  }
  address {
    p {
      font-size: 14px;
      color: #828282;
      line-height: 1.7;
      word-break: keep-all;
    }
  }

  @media (min-width: 1024px) {
    /* pc */
  }
  @media (max-width: 1024px) {
    /* m */
  }
`

const Footer = props => {
  return (
    <FooterBox backColor="#2f2f2f" padBottom="50px">
      <Nav type="sitemaplist" />
      <Logo type="footer" />
      <address>
        <p>
          사업자번호 : 106-81-99019 &nbsp; 주소 : 서울특별시 용산구 원효로 77길 10 엠케이빌딩 2층 &nbsp; 대표자명 :
          송석현
        </p>
        <p>TEL : 02-714-8026 &nbsp; FAX : 02-706-8025 &nbsp; 이메일 : info@bizvalley.co.kr</p>
        <p className="fs12">Copyrights ⓒ 2017 All Rights Reserved. Designed By bizvalley.</p>
      </address>
    </FooterBox>
  );
};

export default Footer;
