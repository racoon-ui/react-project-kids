/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import FormStyle from '../styles/FormStyle';
import { LoginValidator } from '../components/validators/LoginValidator';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const onChange = e => {
    const changeForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changeForm);
  };

  const onRegister = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      ...form,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://shrouded-escarpment-56668.herokuapp.com/api/users/login', requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        alert('로그인이 완료되었습니다 :)');
        window.location = '/';
      })
      .catch(error => console.log('error', error));
  };

  const onSubmit = e => {
    e.preventDefault();

    LoginValidator.validate(form)
      .then(form => {
        onRegister();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <FormStyle>
      <h2>로그인</h2>
      <form onSubmit={onSubmit}>
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
                value={email}
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
                value={password}
                onChange={onChange}
              />
            </span>
          </div>
        </div>
        <div className="btn_box">
          <button type="submit" className="btn-submit">
            로그인하기
          </button>
        </div>
      </form>
    </FormStyle>
  );
};

export default Login;
