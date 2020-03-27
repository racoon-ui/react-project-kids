/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
const type = {
  gnblist: css`
    display: inline-block;
    width: 50%;
    text-align: center;
    > li {
      display: inline-block;
      margin: 0 2.7%;
      & > a {
        font-size: 20px;
        color: #fff;
        font-weight: 700;
      }
      &:hover {
        .sub_manu {
          display: block;
        }
      }
      .sub_manu {
        display: none;
        position: absolute;
        background-color: #fff;
        height: 60px;
        top: 84px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid #d74949;
        z-index: 10;
        a {
          display: inline-block;
          height: 100%;
          line-height: 60px;
          vertical-align: top;
          margin-right: 48px;
          color: #000;
          &:hover {
            color: #d74949;
          }
        }
      }
    }`,
sitemaplist:css`
  padding: 30px 0;
  border-top: 1px #3a3a3a solid;
  border-bottom: 1px #3a3a3a solid;
  margin: 0 auto;
  li {
    display: inline-block;
    width: 19%;
    text-align: center;
    vertical-align: top;
    > a {
      color: #898989;
      font-size: 18px;
      margin-bottom: 25px;
      display: block;
    }
    .sub_manu {
      a {
        color: #bababa;
        font-size: 15px;
        display: block;
        line-height: 1.9;
      }
    }
  }

  @media (min-width: 1024px) {
    /* pc */
  }
  @media (max-width: 1024px) {
    /* m */
    display: none;
  }
  `
}

const Nav = props => {
  return (
    <ul css={type[props.type]} {...props}>
      <li>
        <Link to="/info">브랜드소개</Link>
        <div className="sub_manu">
          <Link to="/info/info01">브랜드 스토리</Link>
          <Link to="/info/info02">브랜드 경쟁력</Link>
          <Link to="/info/info03">인테리어 컨셉</Link>
          <Link to="/info/info04">본사 안내</Link>
        </div>
      </li>
      <li>
        <Link to="/menu">메뉴</Link>
        <div className="sub_manu">
          <a href="/">카테고리01</a>
          <a href="/">카테고리02</a>
          <a href="/">카테고리03</a>
          <a href="/">카테고리04</a>
        </div>
      </li>
      <li>
        <Link to="/found">지점소개</Link>
        <div className="sub_manu">
          <a href="/">전국지점소개</a>
        </div>
      </li>
      <li>
        <Link to="/branch">창업안내</Link>
        <div className="sub_manu">
          <a href="/">개설절차</a>
          <a href="/">개설비용</a>
          <a href="/">가맹FAQ</a>
          <a href="/">창업문의</a>
        </div>
      </li>
      <li>
        <Link to="/cs">고객지원</Link>
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