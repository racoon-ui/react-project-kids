/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// 스타일 추가 해야함
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
    background: #898989;
    color: #fff;
    font-size: 12px;
  }
`;

const MenuItem = (menu) => {
  const [show, setShow] = useState(false);
  const [MenuInfo] = useState(menu.data);
  const { onRemove } = menu;

  // 상품상세창 버튼 클릭시 클릭한 상품의 상세정보 모달창 오픈
  const Modal = ({ children, show, setShow }) => {
    const content = show && (
      <div className="overlay">
        <div className="modal">
          <button className="modal-close" onClick={() => setShow(false)}>
            X
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
    return content;
  };

  return (
    <li css={menuList}>
      <Link to="/">
        <img src={MenuInfo.image} alt={MenuInfo.name} />
        <p>카테고리 : {MenuInfo.category}</p>
        <p>메뉴이름 : {MenuInfo.name}</p>
        <p>메뉴상세 : {MenuInfo.summary}</p>
        <p className="menuPrice">메뉴가격 : {MenuInfo.price}</p>
        <p>메뉴상세정보 : {MenuInfo.description}</p>
      </Link>
      <button className="delBtn" onClick={() => onRemove(MenuInfo._id)}>
        상품삭제
      </button>

      <button type="button" onClick={() => setShow(true)}>
        상품상세창
      </button>

      <Modal show={show} setShow={setShow}>
        <img src={MenuInfo.image} alt={MenuInfo.name} />
        <p>카테고리 : {MenuInfo.category}</p>
        <p>메뉴이름 : {MenuInfo.name}</p>
        <p>메뉴상세 : {MenuInfo.summary}</p>
        <p className="menuPrice">메뉴가격 : {MenuInfo.price}</p>
        <p>메뉴상세정보 : {MenuInfo.description}</p>
      </Modal>
    </li>
  );
};

export default MenuItem;
