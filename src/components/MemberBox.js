/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import store from 'store';
import { CheckLogin } from './CheckLogin';

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
    .txt_hi {
    }
  }
  @media (max-width: 1024px) {
    /* m */
    background: #fff;
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px #dfdfdf solid;
    .txt_hi {
      display: inline-block;
      font-size: 15px;
      margin-right: 20px;
    }
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
      &.btn_logout {
        width: 20%;
      }
    }
  }
`;

const onLogout = () => {
  store.remove('token');
  store.remove('name');
  window.location = '/';
};

let name = store.get('name');

const MemberBox = props => {
  return (
    <div
      className="member_box"
      css={css`
        ${memberstyle}
        @media (max-width: 1024px) {
          /* m */
          display: ${props.lnbstate === 'off' ? 'none' : 'block'};
        }
      `}
      {...props}
    >
      <CheckLogin login>
        <span className="txt_hi">안녕하세요 {name} 님</span>
        <Link to="/login" onClick={onLogout} className="btn_logout">
          로그아웃
        </Link>
      </CheckLogin>

      <CheckLogin logout>
        <Link to="/login">로그인</Link>
        <Link to="/memberJoin">회원가입</Link>
      </CheckLogin>
    </div>
  );
};

export default MemberBox;
