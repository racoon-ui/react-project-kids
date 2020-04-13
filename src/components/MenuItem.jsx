/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import ProdcutsModal from './products/ProductsModal';
import { CheckLogin } from './CheckLogin';

// 상품 리스트 자식
const MenuItem = ({ data, onModify, onRemove }) => {
  const [show, setShow] = useState(false);

  return (
    <li>
      <a href="#;" onClick={() => setShow(true)}>
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
      </a>

      <button className="openBtnModal" onClick={() => setShow(true)}>
        상품상세
      </button>

      <CheckLogin login>
        {/* <button className="modifyBtn" onClick={() => alert('준비중입니다 :)')}>
          상품수정
        </button> */}

        <button className="modifyBtn" onClick={() => onModify(data._id)}>
          상품수정
        </button>

        <button className="delBtn" onClick={() => onRemove(data._id)}>
          상품삭제
        </button>
      </CheckLogin>

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
