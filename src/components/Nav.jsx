/** @jsx jsx */
import { jsx } from '@emotion/core';

const Nav = props => {
  return (
    <ul className={props.className}>
      <li>
        <a href="/">브랜드소개</a>
        <div className="sub_manu">
          <a href="/">브랜드 스토리</a>
          <a href="/">브랜드 경쟁력</a>
          <a href="/">인테리어 컨셉</a>
          <a href="/">본사 안내</a>
        </div>
      </li>
      <li>
        <a href="/">메뉴</a>
        <div className="sub_manu">
          <a href="/">카테고리01</a>
          <a href="/">카테고리02</a>
          <a href="/">카테고리03</a>
          <a href="/">카테고리04</a>
        </div>
      </li>
      <li>
        <a href="/">지점소개</a>
        <div className="sub_manu">
          <a href="/">전국지점소개</a>
        </div>
      </li>
      <li>
        <a href="/">창업안내</a>
        <div className="sub_manu">
          <a href="/">개설절차</a>
          <a href="/">개설비용</a>
          <a href="/">가맹FAQ</a>
          <a href="/">창업문의</a>
        </div>
      </li>
      <li>
        <a href="/">고객지원</a>
        <div className="sub_manu">
          <a href="/">공지사항</a>
          <a href="/">이벤트</a>
          <a href="/">언론보도</a>
        </div>
      </li>
    </ul>
  );
};

export default Nav;
