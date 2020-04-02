/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';

import usePromise from './products/usePromise';
import ProductsForm from './products/ProductsForm';

const MenuListBlock = css`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
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

  return (
    <div>
      <div css={MenuListBlock}>
        {menus.map((menu, index) => (
          <MenuItem key={index} data={menu} />
        ))}
      </div>
      <button>상품등록</button>
      <ProductsForm />
    </div>
  );
};

export default MenuList;
