/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';

import axios from 'axios';

import Menus from './Menus';
import ProductsListStyle from '../styles/ProductsListStyle';
import Pagination from './products/Pagination';

// import usePromise from './products/usePromise';

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/products');
        setMenus(response.data);
      } catch (e) {
        alert(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div> ~~~ 로 딩 중 ~~~</div>;
  }

  //아직 값이 설정되지 않았을 때
  if (!menus) {
    return null;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = menus.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 전환
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductsListStyle>
      <Menus menus={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={menus.length} paginate={paginate} />
    </ProductsListStyle>
  );
};

export default MenuList;
