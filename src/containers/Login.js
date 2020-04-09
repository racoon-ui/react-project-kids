/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from '@emotion/core';
import FormStyle from '../styles/FormStyle';
import { useForm } from 'react-hook-form';
import { LoginValidator } from '../components/validators/LoginValidator';
import store from 'store';
import { Redirect } from 'react-router-dom';
import useRestApi from '../utils/api';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
    validationSchema: LoginValidator,
  });

  const [{ loading, error, data }, fetchData] = useRestApi(null);

  const onChange = (e) => {
    const changeForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changeForm);
  };

  const onRegister = () => {
    fetchData({
      url: '/api/users/login',
      method: 'POST',
      data: form,
    });
  };
  if (data) {
    store.set('token', data.token);
    // store.set('id', data.config.data.slice(10, data.config.data.indexOf('@'), data.config.data.length));
    store.set('id', data._id);
    alert('로그인이 완료되었습니다 :)');
    window.location = '/';
  }

  const onSubmit = (e) => {
    LoginValidator.validate(form)
      .then((form) => {
        onRegister();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const errrorLength = Object.keys(errors).length;

  if (store.get('token')) return <Redirect to="/" />;

  return (
    <FormStyle>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                className={`input_control ${errors.email && 'error'}`}
                title="이메일"
                placeholder="이메일을 적어주세요"
                value={email}
                onChange={onChange}
                ref={register}
              />
            </span>
            {errors.email && <p className="txt_errors">{errors.email.message}</p>}
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
                className={`input_control ${errors.password && 'error'}`}
                title="비밀번호"
                placeholder="비밀번호를 적어주세요"
                value={password}
                onChange={onChange}
                ref={register}
              />
            </span>
            {errors.password && <p className="txt_errors">{errors.password.message}</p>}
          </div>
        </div>
        <div className="row_group">{error && <span>{error.message}</span>}</div>
        <div className="btn_box">
          <button
            type="submit"
            name="btn_submit"
            className="btn_submit"
            ref={register}
            disabled={errrorLength > 0 ? true : false}
          >
            로그인하기
            {loading && <span>로딩 중...</span>}
          </button>
        </div>
      </form>
    </FormStyle>
  );
};

export default Login;
