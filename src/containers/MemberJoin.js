/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';

const joinStyle = css`
  padding: 80px 20px;
  max-width: 600px;
  margin: 0 auto;
  h2 {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #c9c9c9;
  }
  .join_row {
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    border: 1px solid #c9c9c9;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .btn_box {
    margin-top: 40px;
    button {
      display: block;
      font-weight: bold;
      width: 100%;
      height: 60px;
      line-height: 56px;
      font-size: 20px;
      color: #fff;
      background: #0062a9;
    }
  }
`;

const MemberJoin = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    password_confirm: '',
  });

  const { email, username, password, password_confirm } = form;

  const onChange = e => {
    const changeForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changeForm);
  };

  const onSubmit = () => {
    alert('쑝쑝');
  };

  return (
    <div css={joinStyle}>
      <h2>회원가입</h2>
      <div className="row_group">
        <div className="join_row">
          <h3>
            <label htmlFor="email">이메일</label>
          </h3>
          <span className="input_style">
            <input
              type="text"
              id="email"
              name="email"
              className=""
              title="이메일"
              placeholder="이메일을 적어주세요"
              maxLength="50"
              value={email}
              onChange={onChange}
            />
          </span>
        </div>
        <div className="join_row">
          <h3>
            <label htmlFor="username">이름</label>
          </h3>
          <span className="input_style">
            <input
              type="text"
              id="username"
              name="username"
              className=""
              title="이름"
              placeholder="이름을 적어주세요"
              maxLength="50"
              value={username}
              onChange={onChange}
            />
          </span>
        </div>
        <div className="join_row">
          <h3>
            <label htmlFor="password">비밀번호</label>
          </h3>
          <span className="input_style">
            <input
              type="password"
              id="password"
              name="password"
              className=""
              title="비밀번호"
              placeholder="비밀번호를 적어주세요"
              maxLength="100"
              value={password}
              onChange={onChange}
            />
          </span>
        </div>
        <div className="join_row">
          <h3>
            <label htmlFor="password_confirm">비밀번호 확인</label>
          </h3>
          <span className="input_style">
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              className=""
              title="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요"
              maxLength="100"
              value={password_confirm}
              onChange={onChange}
            />
          </span>
        </div>
      </div>
      <div className="btn_box">
        <button type="submit" className="btn-submit" onClick={onSubmit}>
          가입하기
        </button>
      </div>
    </div>
  );
};

export default MemberJoin;
