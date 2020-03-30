/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const memberstyle = css`
  @media (min-width: 1024px) {
    /* pc */
    background: #ececec;
    padding: 5px 15px 3px;
    text-align: right;
    a {
      display: inline-block;
      margin: 0 6px;
      color: #000;
    }
  }
  @media (max-width: 1024px) {
    /* m */
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    border-top: 1px #dfdfdf solid;
    a {
      border: 1px solid #000;
      width: 45%;
      height: 30px;
      line-height: 30px;
      margin: 0 1%;
      border-radius: 5px;
      background: #fff;
      color: #000;
      font-size: 15px;
    }
  }
`;

const MemberBox = props => {
  return (
    <div className="member_box" css={memberstyle} {...props}>
      <Link to="/login">로그인</Link>
      <Link to="/memberJoin">회원가입</Link>
    </div>
  );
};

export default MemberBox;
