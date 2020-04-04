/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';
// import usePromise from './products/usePromise';

const MenuListBlock = css`
  > ul {
    overflow: hidden;
    margin-left: -1.5%;
  }
`;

const MenuList = () => {
  const [menus, setMenus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/products');
        setMenus(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div> ~~~로 딩 즁 ~~~</div>;
  }

  //아직 값이 설정되지 않았을 때
  if (!menus) {
    return null;
  }

  const onRemove = (_id) => {
    setMenus(menus.filter((menu) => menu._id !== _id));
    console.log('삭제되었습니다.');
    console.log(menus.length);
    alert('삭제되었습니다.');
  };

  return (
    <div>
      <div css={MenuListBlock}>
        <ul>
          {menus.map((menu) => (
            <MenuItem key={menu._id} data={menu} onRemove={onRemove} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
