/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from '@emotion/core';
import FormStyle from '../styles/FormStyle';
import { useForm } from 'react-hook-form';
import { LoginValidator } from '../components/validators/LoginValidator';
import axios from 'axios';
import store from 'store';
import { Redirect } from 'react-router-dom';
import useRestApi from '../utils/api';

// const onRegister = () => {
//   const [{ loading, error }, test] = useRestApi('/api/users/login', {
//     method: 'post',
//     manual: true,
//     data: { ...form },
//   });
//   console.log('loading', loading);
//   console.log('error', error);
//   console.log('test', test);
// };

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

  const [{ loading, error, data }, fetchData] = useRestApi(null, { manual: true });

  const onChange = (e) => {
    const changeForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changeForm);
  };

  const onRegister = () => {
    console.log('onRegister');

    fetchData({
      url: '/api/users/login',
      method: 'POST',
      data: form,
    });
    // fetchData('/api/users/login', ...ㅏorm);
    // axios
    //   .post('https://shrouded-escarpment-56668.herokuapp.com/api/users/login', {
    //     ...form,
    //   })
    //   .then(function (response) {
    //     store.set('token', response.data.token);
    //     store.set(
    //       'email',
    //       response.config.data.slice(10, response.config.data.indexOf('@'), response.config.data.length),
    //     );
    //     alert('로그인이 완료되었습니다 :)');
    //     window.location = '/';
    //   })
    //   .catch(function (error) {
    //     console.log('로그인 정보가 잘못되었습니다');
    //   });
  };

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

  // const [{ loading, error }] = useRestApi('/api/users/login', {
  //   method: 'post',
  //   manual: false,
  //   data: { ...form },
  // });
  // console.log('loading', loading);
  // console.log('error', error);
  // console.log('form', form);

  // const [{ loading, error, data }] = useRestApi('/api/stores', { manual: false });

  // console.log('loading', loading);
  // console.log('error', error);
  // console.log('data', data);

  // if (store.get('token')) return <Redirect to="/" />;

  console.log(data);

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
