import React from 'react';
import MenuItem from './MenuItem';

const menus = ({ menus }) => {
  const { onRemove } = menus;
  return (
    <ul className="menuListInfo">
      {menus.map((menu) => (
        <MenuItem key={menu._id} data={menu} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default menus;
