/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import { MemberJoinValidator } from '../components/validators/MemberJoinValidator';
import { useForm } from 'react-hook-form';
import FormStyle from '../styles/FormStyle';
import { ClockLoader } from 'react-spinners';
import useRestApi from '../utils/api';

const MemberJoin = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    password_confirm: '',
    phone: '',
  });
  const { email, name, phone, password, password_confirm } = form;

  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
    validationSchema: MemberJoinValidator,
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
      url: '/api/users/register',
      method: 'POST',
      data: form,
    });
  };
  if (data) {
    window.location = '/login';
  }

  const onSubmit = () => {
    MemberJoinValidator.validate(form)
      .then((form) => {
        onRegister();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const errrorLength = Object.keys(errors).length;

  return (
    <FormStyle>
      <h2>회원가입</h2>
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
              <label htmlFor="name">이름</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="name"
                name="name"
                className={`input_control ${errors.name && 'error'}`}
                title="이름"
                placeholder="이름을 적어주세요"
                value={name}
                onChange={onChange}
                ref={register}
              />
            </span>
            {errors.name && <p className="txt_errors">{errors.name.message}</p>}
          </div>
          <div className="join_row">
            <h3>
              <label htmlFor="phone">핸드폰번호</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="phone"
                name="phone"
                className={`input_control ${errors.phone && 'error'}`}
                title="핸드폰번호"
                placeholder="핸드폰번호를 적어주세요"
                value={phone}
                onChange={onChange}
                ref={register}
              />
            </span>
            {errors.phone && <p className="txt_errors">{errors.phone.message}</p>}
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
          <div className="join_row">
            <h3>
              <label htmlFor="password_confirm">비밀번호 확인</label>
            </h3>
            <span className="input_style">
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                className={`input_control ${errors.password && 'error'}`}
                title="비밀번호 확인"
                placeholder="비밀번호를 다시 입력해주세요"
                value={password_confirm}
                onChange={onChange}
                ref={register}
              />
            </span>
            {errors.password_confirm && <p className="txt_errors">{errors.password_confirm.message}</p>}
          </div>
        </div>
        <div className="row_group">{error && <span>{error.message}</span>}</div>
        <div className="btn_box">
          <button
            type="submit"
            className="btn_submit"
            ref={register}
            name="btn_submit"
            disabled={errrorLength > 0 || loading ? true : false}
          >
            가입하기
            {loading && (
              <span className="icon_loading">
                <ClockLoader size="20px" color="#fff" />
              </span>
            )}
          </button>
        </div>
      </form>
    </FormStyle>
  );
};

export default MemberJoin;
