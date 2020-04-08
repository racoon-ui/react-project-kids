import React from 'react';

import MenuItem from './MenuItem';

import axios from 'axios';
import store from 'store';

const menus = ({ menus }) => {
  // header token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

  // menuList remove
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
