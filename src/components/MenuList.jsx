/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import ProductsListStyle from '../styles/ProductsListStyle';
import axios from 'axios';
import store from 'store';
import Pagination from './products/Pagination';
// import usePromise from './products/usePromise';

/*
** 전체적인 스타일 작업은 대략적인 기능 완료 후에 작업할 예정
- 기능진행해야할것들
1. 가격 천원단위 콤마삽입 => (해결!!!!)
2. 상품리스트 12개 이상이면 페이징 처리
(콘솔까지 찍었으나 화면은 그대로임...)
3. 상품상세... ?
(상세를 모달창으로 할 것인지,
  아님 모달창 따로, 링크이동 따로 할 것인지 ?)
4. 에러처리 공통
*
*/

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

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

  const onRemove = (_id) => {
    axios
      .delete(`https://shrouded-escarpment-56668.herokuapp.com/api/products/${_id}`, config)
      .then(function (response) {
        const removeList = menus.filter((menu) => menu._id !== _id);
        setMenus(removeList);
        console.log('삭제되었습니다. 남은 상품 갯수 : ' + menus.length);
        alert('선택한 상품이 삭제되었습니다...');
      });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = menus.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  // 페이지 전환
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductsListStyle>
      <ul className="menuListInfo">
        {menus.map((menu) => (
          <MenuItem key={menu._id} data={menu} onRemove={onRemove} menus={currentPosts} />
        ))}
      </ul>
      <Pagination postsPerPage={postsPerPage} totalPosts={menus.length} paginate={paginate} />
    </ProductsListStyle>
  );
};

export default MenuList;
