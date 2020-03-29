/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lnbbtn from './Lnbbtn';
import Icarrow from './Icarrow';

const type = {
  gnblist: css`
    @media (min-width: 1024px) {
      /* pc */
      display: inline-block;
      width: 50%;
      text-align: center;
      .list {
        > li {
          display: inline-block;
          margin: 0 2.7%;
          > a {
            font-size: 18px;
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
        }
      }
    }
    @media (max-width: 1024px) {
      /* m */
      position: absolute;
      top: 68px;
      left: 0;
      width: 100%;
      .list {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        text-align: left;
        li {
          line-height: 20px;
          border-bottom: 1px #dfdfdf solid;
          > a {
            display: block;
            padding: 16px;
            font-size: 15px;
            color: #333;
            font-weight: bold;
          }
          .sub_manu {
            display: block;
            border-top: 1px #dfdfdf solid;
            background-color: #f6f6f6;
            padding: 23px;
            a {
              display: block;
              font-size: 13px;
              line-height: 30px;
              color: #666;
              &::before {
                content: '- ';
              }
            }
          }
        }
      }
    }
  `,
  sitemaplist: css`
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
  `,
};

const Nav = props => {
  const [lnbstate, setLnbstate] = useState('off');
  const icOpen = () => {
    lnbstate === 'on' ? setLnbstate('off') : setLnbstate('on');
  };

  return (
    <div css={type[props.type]} {...props}>
      <Lnbbtn listopen={lnbstate} onClick={icOpen} />

      <ul
        className="list"
        css={css`
          @media (min-width: 1024px) {
            /* pc */
          }
          @media (max-width: 1024px) {
            /* m */
            display: ${lnbstate === 'off' ? 'none !important' : 'block !important'};
          }
        `}
        {...props}
      >
        <li>
          <Link to="/info">
            브랜드소개 <Icarrow open="on" />
          </Link>
          <div className="sub_manu">
            <Link to="/info/info01">브랜드 스토리</Link>
            <Link to="/info/info02">브랜드 경쟁력</Link>
            <Link to="/info/info03">인테리어 컨셉</Link>
            <Link to="/info/info04">본사 안내</Link>
          </div>
        </li>
        <li>
          <Link to="/menu">
            메뉴 <Icarrow open="on" />
          </Link>
          <div className="sub_manu">
            <a href="/">카테고리01</a>
            <a href="/">카테고리02</a>
            <a href="/">카테고리03</a>
            <a href="/">카테고리04</a>
          </div>
        </li>
        <li>
          <Link to="/found">
            지점소개 <Icarrow open="on" />
          </Link>
          <div className="sub_manu">
            <a href="/">전국지점소개</a>
          </div>
        </li>
        <li>
          <Link to="/branch">
            창업안내 <Icarrow open="on" />
          </Link>
          <div className="sub_manu">
            <a href="/">개설절차</a>
            <a href="/">개설비용</a>
            <a href="/">가맹FAQ</a>
            <a href="/">창업문의</a>
          </div>
        </li>
        <li>
          <Link to="/cs">
            고객지원 <Icarrow open="on" />
          </Link>
          <div className="sub_manu">
            <a href="/">공지사항</a>
            <a href="/">이벤트</a>
            <a href="/">언론보도</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
