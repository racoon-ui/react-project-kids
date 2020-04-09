/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import Icon from '../common/Icon';
const Paggingstyle = css`
  padding: 30px 0;
  text-align: center;
  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #c5c5c5;
    border-radius: 3px;
    color: #555;
    &.on,
    &:hover {
      border: 1px solid #d1302f;
      background: #d1302f;
      color: #fff;
      font-weight: bold;
      svg {
        color: #fff;
      }
    }
  }
  @media (min-width: 768px) {
    /* pc */
  }
  @media (max-width: 767px) {
    /* m */
  }
`;

const ListPagination = ({ dataCutNum, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const currentPosts = [];
  let numnum = 0;

  for (let i = 1; i <= Math.ceil(totalPosts / dataCutNum); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers.length);

  for (let z = 1; z <= Math.ceil(pageNumbers.length / 10); z++) {
    currentPosts.push(pageNumbers.slice(numnum, numnum + 10));
    numnum += 10;
  }
  console.log(currentPosts.length);
  console.log('현재인덱스' + currentPage);

  let numnum1 = 0;

  let numnum2 = 0;
  if (currentPage <= 10) {
    numnum2 = 0;
  } else if (currentPage <= 20) {
    numnum2 = 1;
  } else if (currentPage <= 30) {
    numnum2 = 2;
  } else if (currentPage <= 40) {
    numnum2 = 3;
  }
  console.log(numnum2);
  return (
    <div className="pagination" css={Paggingstyle}>
      <button onClick={() => paginate(1)}>
        <Icon type="IoIosSkipBackward" />
      </button>
      <button onClick={() => currentPage > 1 && paginate(currentPage - 1)}>
        <Icon type="IoMdArrowDropleft" />
      </button>
      {currentPosts[numnum2].map((number) => (
        <button onClick={() => paginate(number)} key={number} className={number === currentPage ? 'on' : ''}>
          {number}
        </button>
      ))}
      <button onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}>
        <Icon type="IoMdArrowDropright" />
      </button>
      <button onClick={() => paginate(pageNumbers.length)}>
        <Icon type="IoIosSkipForward" />
      </button>
    </div>
  );
};

export default ListPagination;
