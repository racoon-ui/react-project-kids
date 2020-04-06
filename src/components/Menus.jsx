import React from 'react';
import MenuItem from './MenuItem';
// import axios from 'axios';
// import store from 'store';

const menus = ({ menus }) => {
  const { onRemove } = menus;

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <ul className="menuListInfo">
      {menus.map((menu) => (
        <MenuItem key={menu._id} data={menu} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default menus;
