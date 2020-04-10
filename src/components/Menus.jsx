import React from 'react';

import MenuItem from './MenuItem';

import axios from 'axios';
import store from 'store';

// 상품 리스트 중간부모 컴포넌트..? (샌드위치)
const menus = ({ menus }) => {
  // 로그인 정보
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

  // 상품삭제
  const onRemove = (_id) => {
    axios
      .delete(`https://shrouded-escarpment-56668.herokuapp.com/api/products/${_id}`, config)
      .then(function (response) {
        alert('선택한 상품이 삭제되었습니다.');
        window.location = '/menu';
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ul className="menuListInfo">
      {menus.map((menu) => (
        <MenuItem key={menu._id} data={menu} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default menus;
