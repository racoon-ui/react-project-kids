import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import store from 'store';

const FoundAdd = props => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

  const onSubmit = data => {
    console.log(data);
    axios.post(
      'https://shrouded-escarpment-56668.herokuapp.com/api/stores',
      {
        name: data.name,
        address: data.address,
        phone: data.phone,
        hour: data.hour,
        facilities: [data.facilities1, data.facilities2, data.facilities3, data.facilities4],
        location: {
          type: 'Point',
          coordinates: [37.538669, 126.96654],
        },
      },
      config,
    );
  }

  const Error = ({ message }) => <div className="error-container">{message}</div>;

  if (!props.token) {
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          지점명
          <input
            type="text"
            id="name"
            name="name"
            ref={register({
              required: '지점명을 입력하세요',
              maxLength: {
                value: 10,
                message: '지점명은 최대 10자 이하여야 합니다',
              },
            })}
          />
          {errors.name && <Error message={errors.name.message} />}
          <br />
          <br />
          <br />
        </label>

        <label htmlFor="address">
          주소
          <input
            type="text"
            id="address"
            name="address"
            ref={register({
              required: '주소를 입력하세요',
              maxLength: {
                value: 20,
                message: '주소는 최대 20자 이하여야 합니다',
              },
            })}
          />
          {errors.address && <Error message={errors.address.message} />}
          <br />
          <br />
          <br />
        </label>

        <label htmlFor="phone">
          전화번호
          <input
            type="text"
            id="phone"
            name="phone"
            ref={register({
              required: '전화번호를 입력하세요',
              maxLength: {
                value: 10,
                message: '전화번호는 최대 10자 이하여야 합니다',
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: '숫자만 입력하세요',
              },
            })}
          />
          {errors.phone && <Error message={errors.phone.message} />}
          <br />
          <br />
          <br />
        </label>

        <label htmlFor="hour">
          영업시간
          <input
            type="text"
            id="hour"
            name="hour"
            ref={register({
              required: '영업시간을 입력하세요',
            })}
          />
          {errors.hour && <Error message={errors.hour.message} />}
          <br />
          <br />
          <br />
        </label>

        <label htmlFor="facilities">
          특징
          <br />
          주차가능
          <input name="facilities1" type="checkbox" ref={register({})} />
          놀이방
          <input name="facilities2" type="checkbox" ref={register({})} />
          단체
          <input name="facilities3" type="checkbox" ref={register({})} />
          와이파이
          <input name="facilities4" type="checkbox" ref={register({})} />
          <br />
          <br />
          <br />
        </label>

        <button type="submit">Change DANTE</button>
      </form>
    </div>
  );
};
export default FoundAdd;
