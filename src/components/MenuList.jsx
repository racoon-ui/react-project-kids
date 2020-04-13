/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import Menus from './Menus';
import ProductsListStyle from '../styles/ProductsListStyle';
import Pagination from './products/Pagination';
import Loading from './products/Loading';
import useRestApi from '../utils/api';

// 상품 리스트 부모
const MenuList = () => {
  /**
   * 소스수정
   * 상품수정
   */
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const [{ loading, data: menus, error }] = useRestApi('/api/products', { manual: false });

  // 대기 중일 때
  if (loading) return <Loading />;
  // 에러
  if (error) return <div>에러가 발생했습니다</div>;
  //아직 값이 설정되지 않았을 때
  if (!menus) return null;

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
