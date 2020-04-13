import React from 'react';

import MenuItem from './MenuItem';

import useRestApi from '../utils/api';

// 상품 리스트 & 삭제
const Menus = ({ menus, _id }) => {
  const [{ data }, removeData] = useRestApi(null, { manual: true });

  const onRemove = (_id) => {
    console.log('onRemove');
    removeData({
      url: `/api/products/${_id}`,
      method: 'DELETE',
    });
    setTimeout(() => (window.location = '/menu'), 1000);
  };
  if (data) {
    return null;
  }
  return (
    <ul className="menuListInfo">
      {menus.map((menu) => (
        <MenuItem key={menu._id} data={menu} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default Menus;
