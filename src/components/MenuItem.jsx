/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// 스타일 추가 해야함
const menuList = css`
  display: inline-block;
  width: 18.5%;
  margin-left: 1.5%;
  margin-top: 2%;
  vertical-align: top;
  img {
    max-width: 100%;
  }
  a {
    color: #000;
    font-size: 15px;
    line-height: 24px;
  }
  p {
    display: block;
  }
`;

const MenuItem = menu => {
  const [MenuInfo] = useState(menu.data);
  return (
    <li css={menuList}>
      <Link to="/">
        <img src={MenuInfo.image} alt={MenuInfo.name} />
        <p>카테고리 : {MenuInfo.category}</p>
        <p>메뉴이름 : {MenuInfo.name}</p>
        <p>메뉴상세 : {MenuInfo.summary}</p>
        <p>메뉴가격 : {MenuInfo.price}</p>
        <p>메뉴상세정보 : {MenuInfo.description}</p>
      </Link>
    </li>
  );
};

export default MenuItem;
