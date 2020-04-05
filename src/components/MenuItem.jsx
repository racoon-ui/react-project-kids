/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import ProdcutsModal from './products/ProductsModal';
const menuList = css`
  display: inline-block;
  width: 23.5%;
  margin-left: 1.5%;
  margin-top: 3%;
  vertical-align: top;
  padding-top: 40px;
  border-top: 1px solid #ccc;

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
  .menuPrice {
    font-weight: 600;
    color: #d74949;
  }
  .delBtn {
    display: block;
    background: #d74949;
    color: #fff;
    font-size: 13px;
    border: none;
  }
`;

const MenuItem = (menu) => {
  const [show, setShow] = useState(false);
  const [MenuInfo] = useState(menu.data);
  const { onRemove } = menu;

  return (
    <li css={menuList}>
      <a href="#;" onClick={() => setShow(true)}>
        <img src={MenuInfo.image} alt={MenuInfo.name} />
        <p>카테고리 : {MenuInfo.category}</p>
        <p>메뉴이름 : {MenuInfo.name}</p>
        <p>메뉴상세 : {MenuInfo.summary}</p>
        <p className="menuPrice">메뉴가격 : {MenuInfo.price}</p>
        <p>메뉴상세정보 : {MenuInfo.description}</p>
      </a>

      <button className="delBtn" onClick={() => onRemove(MenuInfo._id)}>
        상품삭제
      </button>

      <ProdcutsModal show={show} setShow={setShow}>
        <img src={MenuInfo.image} alt={MenuInfo.name} />
        <p>카테고리 : {MenuInfo.category}</p>
        <p>메뉴이름 : {MenuInfo.name}</p>
        <p>메뉴상세 : {MenuInfo.summary}</p>
        <p className="menuPrice">메뉴가격 : {MenuInfo.price}</p>
        <p>메뉴상세정보 : {MenuInfo.description}</p>
      </ProdcutsModal>
    </li>
  );
};

export default MenuItem;
