/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import { useForm } from 'react-hook-form';
import FormStyle from '../../styles/FormStyle';
import axios from 'axios';
import store from 'store';
//import { array } from 'yup';
const MemberJoin = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    hour: '',
    facilities: [],
    location: {
      type: 'Point',
      coordinates: [],
    },
  });
  const { name, address, phone, hour } = form;

  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onChange = (e) => {
    //console.log(e.target.value);
    const changeForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    if (e.target.name === 'coordinates[0]') {
      changeForm.location.coordinates[0] = e.target.value;
    }
    if (e.target.name === 'coordinates[1]') {
      changeForm.location.coordinates[1] = e.target.value;
    }

    if (e.target.className === 'facilities') {
      //array.forEach((element) => {});
      changeForm.facilities = [];
      const t = document.getElementsByClassName('facilities');
      // console.log(t);
      Array.prototype.forEach.call(t, function (el) {
        if (el.checked) changeForm.facilities.push(el.value);
      });

      //if (e.target.checked) changeForm.facilities.push(e.target.value);
      //if (!e.target.checked) changeForm.facilities[e.target.name] = '';
    }

    //console.log(changeForm);
    setForm(changeForm);
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

  const onRegister = () => {
    axios
      .post(
        'https://shrouded-escarpment-56668.herokuapp.com/api/stores',
        {
          ...form,
        },
        config,
      )
      .then(function (response) {
        //console.log(response);
        alert('지점등록이 되었습니다.');
        //window.location = '/found';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    onRegister(data);
  };

  //const Error = ({ message }) => <div className="error-container">{message}</div>;

  const errrorLength = Object.keys(errors).length > 0 ? true : false;

  return (
    <FormStyle>
      <h2>지점등록</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row_group">
          <div className="join_row">
            <h3>
              <label htmlFor="name">지점이름</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="name"
                name="name"
                className={`input_control ${errors.name && 'error'}`}
                title="이메일"
                placeholder="지점명을 입력해주세요"
                value={name}
                onChange={onChange}
                ref={register({
                  required: '지점등록은 반드시 포함되어야 합니다.',
                  maxLength: {
                    value: 10,
                    message: '지점명은 최대 10자 이하여야 합니다',
                  },
                })}
              />
            </span>
            {errors.name && <p className="txt_errors">{errors.name.message}</p>}
          </div>
          <div className="join_row">
            <h3>
              <label htmlFor="address">주소</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="address"
                name="address"
                className={`input_control ${errors.address && 'error'}`}
                title="지점주소"
                placeholder="지점주소을 입력해주세요"
                value={address}
                onChange={onChange}
                ref={register({
                  required: '지점주소는 반드시 포함되어야 합니다.',
                  maxLength: {
                    value: 20,
                    message: '지점주소는 최대 20자 이하여야 합니다',
                  },
                })}
              />
            </span>
            {errors.address && <p className="txt_errors">{errors.address.message}</p>}
          </div>
          <div className="join_row">
            <h3>
              <label htmlFor="phone">전화번호</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="phone"
                name="phone"
                className={`input_control ${errors.phone && 'error'}`}
                title="지점 전화번호"
                placeholder="지점 전화번호 입력해주세요"
                value={phone}
                onChange={onChange}
                ref={register({
                  required: '지점 전화번호는 반드시 포함되어야 합니다.',
                  maxLength: {
                    value: 20,
                    message: '최대 20자 이하여야 합니다',
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: '전화번호는 숫자만 입력이 가능합니다.',
                  },
                })}
              />
            </span>
            {errors.phone && <p className="txt_errors">{errors.phone.message}</p>}
          </div>
          <div className="join_row">
            <h3>
              <label htmlFor="hour">영업시간</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="hour"
                name="hour"
                className={`input_control ${errors.hour && 'error'}`}
                title="지점 전화번호"
                placeholder="영업시간 입력해주세요"
                value={hour}
                onChange={onChange}
                ref={register({
                  required: '영업시간은 반드시 포함되어야 합니다.',
                  maxLength: {
                    value: 10,
                    message: '최대 10자 이하여야 합니다',
                  },
                })}
              />
            </span>
            {errors.hour && <p className="txt_errors">{errors.hour.message}</p>}
          </div>
          <div className="join_row">
            <h3>특징선택</h3>
            <span className="input_style">
              <label htmlFor="facilities1">주차</label>
              <input
                type="checkbox"
                id="facilities1"
                name="facilities1"
                className="facilities"
                title="지점 전화번호"
                value="주차"
                onChange={onChange}
                ref={register}
              />
              <label htmlFor="facilities2">놀이방</label>
              <input
                type="checkbox"
                id="facilities2"
                name="facilities2"
                className="facilities"
                title="지점 전화번호"
                value="놀이방"
                onChange={onChange}
                ref={register}
              />
              <label htmlFor="facilities3">단체</label>
              <input
                type="checkbox"
                id="facilities3"
                name="facilities3"
                title="지점 전화번호"
                className="facilities"
                value="단체"
                onChange={onChange}
                ref={register}
              />
              <label htmlFor="facilities4">와이파이</label>
              <input
                type="checkbox"
                id="facilities4"
                name="facilities4"
                title="지점 전화번호"
                className="facilities"
                value="와아파이"
                onChange={onChange}
                ref={register}
              />
            </span>
          </div>
          <div className="join_row">
            <h3>
              <label htmlFor="coordinates">지도좌표입력</label>
            </h3>
            <span className="input_style">
              <input
                type="text"
                id="coordinates"
                name={`coordinates[0]`}
                className={`input_control ${errors.coordinates && 'error'}`}
                title="지도좌표"
                placeholder="좌표를 입력해주세요"
                onChange={onChange}
                ref={register({
                  required: '좌표는 반드시 들어가야합니다.',
                  maxLength: {
                    value: 30,
                    message: '최대 30자 이하여야 합니다',
                  },
                })}
              />
              <input
                type="text"
                id="coordinates"
                name={`coordinates[1]`}
                className={`input_control ${errors.coordinates && 'error'}`}
                title="지도좌표"
                placeholder="좌표를 입력해주세요"
                onChange={onChange}
                ref={register({
                  required: '좌표는 반드시 들어가야합니다.',
                  maxLength: {
                    value: 30,
                    message: '최대 30자 이하여야 합니다',
                  },
                })}
              />
            </span>
            {errors.coordinates && <p className="txt_errors">{errors.coordinates.message}</p>}
          </div>
        </div>

        <div className="btn_box">
          <button type="submit" className="btn btn-submit" disabled={errrorLength}>
            지점추가
          </button>
        </div>
      </form>
    </FormStyle>
  );
};

export default MemberJoin;
