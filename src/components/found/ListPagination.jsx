/** @jsx jsx */
import { jsx, css } from '@emotion/core';

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
  // console.log('dataCutNum = ' + dataCutNum + ' // 몇조각낼지 변수');
  // console.log('totalPosts = ' + totalPosts + ' // 데이터 총갯수를 세서 숫자로 저장한 변수');
  // console.log('paginate = ' + paginate + ' // 상위이벤트 내려받음');
  // console.log('currentPage = ' + currentPage + ' // 상위이벤트로 저장한 key값');

  //--------------------------------------------------------------
  //totalPosts(데이터 총갯수(예)30) / dataCutNum(몇조각낼지(예)2) = 예)15
  //페이징 버튼이 총 15개 나와야 되므로 포문돌려서 pageNumbers 안에 배열로 1,2,3...15까지 넣어준다.
  //pageNumbers[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  //--------------------------------------------------------------
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / dataCutNum); i++) {
    pageNumbers.push(i);
  }
  //console.log('pageNumbers = ');
  //console.log(pageNumbers);
  //--------------------------------------------------------------
  //--------------------------------------------------------------
  //pageNumbers.length(위에서 나온 pageNumbers의 총갯수(예)15) / 10 = 예) Math.ceil(1.5) 반올림 되어 2가됨
  //ArryPageNumbers 안에 slice이걸 이용해서 10단위로 짤라 넣기
  //ArryPageNumbers[Array(10), Array(5)]
  //--------------------------------------------------------------
  const ArryPageNumbers = [];
  let arryForNum = 0;
  for (let z = 1; z <= Math.ceil(pageNumbers.length / 10); z++) {
    ArryPageNumbers.push(pageNumbers.slice(arryForNum, arryForNum + 10));
    arryForNum += 10;
  }
  //console.log('ArryPageNumbers = ');
  //console.log(ArryPageNumbers);
  //--------------------------------------------------------------
  //--------------------------------------------------------------
  //클릭한 버튼의 인덱스값을   조건을줘서 10단위로 예) 10보다작으면 = 0 / 10보다크고 20보다작으면 = 1 이런식으로 유동적이게 조건준 코드
  //--------------------------------------------------------------
  let ArryIndex = 0;
  if (currentPage > 10) {
    ArryIndex = String(currentPage - 1).slice(0, -1);
  }
  console.log(ArryIndex);
  //--------------------------------------------------------------
  return (
    <div className="pagination" css={Paggingstyle}>
      <button onClick={() => paginate(1)}>
        <Icon type="IoIosSkipBackward" />
      </button>
      <button onClick={() => currentPage > 1 && paginate(currentPage - 1)}>
        <Icon type="IoMdArrowDropleft" />
      </button>
      {ArryPageNumbers[ArryIndex].map((number) => (
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
