/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import ProdcutsModal from './products/ProductsModal';
import { Link } from 'react-router-dom';

const MenuItem = (menu) => {
  const [show, setShow] = useState(false);
  const [MenuInfo] = useState(menu.data);
  const { onRemove } = menu;

  return (
    <li>
      <Link to={`/menu/${MenuInfo._id}`}>
        <div className="menuImg">
          <img src={MenuInfo.image} alt={MenuInfo.name} />
        </div>
        <div className="menuInfo">
          <p>카테고리 : {MenuInfo.category}</p>
          <p>메뉴이름 : {MenuInfo.name}</p>
          <p>메뉴상세 : {MenuInfo.summary}</p>
          <p className="menuPrice">
            메뉴가격 : {MenuInfo.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원
          </p>
          <p>메뉴상세정보 : {MenuInfo.description}</p>
        </div>
      </Link>

      <button className="openBtnModal" onClick={() => setShow(true)}>
        상품상세
      </button>
      <Link to="/menu/productModify">
        <button className="modifyBtn">상품수정</button>
      </Link>

      <button className="delBtn" onClick={() => onRemove(MenuInfo._id)}>
        상품삭제
      </button>

      <ProdcutsModal show={show} setShow={setShow}>
        <div className="menuImg">
          <img src={MenuInfo.image} alt={MenuInfo.name} />
        </div>
        <div className="menuInfo">
          <p>카테고리 : {MenuInfo.category}</p>
          <p>메뉴이름 : {MenuInfo.name}</p>
          <p>메뉴상세 : {MenuInfo.summary}</p>
          <p className="menuPrice">
            메뉴가격 : {MenuInfo.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원
          </p>
          <p>메뉴상세정보 : {MenuInfo.description}</p>
        </div>
      </ProdcutsModal>
    </li>
  );
};

export default MenuItem;
