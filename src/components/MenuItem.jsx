/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ProdcutsModal from './products/ProductsModal';
// 상품 리스트 자식
const MenuItem = ({ data, onRemove }) => {
  const [show, setShow] = useState(false);

  return (
    <li>
      <Link to={`menu/${data._id}`}>
        <div className="menuImg">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="menuInfo">
          <p>카테고리 : {data.category}</p>
          <p>메뉴이름 : {data.name}</p>
          <p>메뉴상세 : {data.summary}</p>
          <p className="menuPrice">
            메뉴가격 :
            {data.price.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            })}
            원
          </p>
          <p>메뉴상세정보 : {data.description}</p>
        </div>
      </Link>

      <button className="openBtnModal" onClick={() => setShow(true)}>
        상품상세
      </button>

      <Link to="/menu/productModify">
        <button className="modifyBtn">상품수정</button>
      </Link>

      <button className="delBtn" onClick={() => onRemove(data._id)}>
        상품삭제
      </button>

      <ProdcutsModal show={show} setShow={setShow}>
        <div className="menuImg">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="menuInfo">
          <p>카테고리 : {data.category}</p>
          <p>메뉴이름 : {data.name}</p>
          <p>메뉴상세 : {data.summary}</p>
          <p className="menuPrice">
            메뉴가격 :
            {data.price.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            })}
            원
          </p>
          <p>메뉴상세정보 : {data.description}</p>
        </div>
      </ProdcutsModal>
    </li>
  );
};

export default MenuItem;
