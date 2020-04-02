import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// 스타일 추가 해야함
const MenuItemBlock = css``;

const MenuItem = menu => {
  const [MenuInfo] = useState(menu.data);
  return (
    <div css={MenuItemBlock}>
      <ul>
        <li>
          <Link to="/">
            <img src={MenuInfo.image} alt={MenuInfo.name} />
            카테고리 : {MenuInfo.category}
            메뉴이름 : {MenuInfo.name}
            메뉴상세 : {MenuInfo.summary}
            메뉴가격 : {MenuInfo.price}
            메뉴상세정보 : {MenuInfo.description}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
