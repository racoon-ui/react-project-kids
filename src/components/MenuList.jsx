/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';
import './products/ProductsModal.css';
// import usePromise from './products/usePromise';

/*
*
** 전체적인 스타일 작업은 대략적인 기능 완료 후에 작업할 예정
- 보완
1. 모달창 연결 완료! 버튼 아닌 Link로 진행해보자.
2. ProductsForm/ProductsFormValidator error 코드정리
3. 상품삭제시 화면상에서 삭제 되나, 실 API상에선 그대로이다.
(API를 공통으로 빼서 해야할 것 같은데... 더 알아봐야함..... 대공사예정..)
4. 전체적인 코드 정리(중구난방 디테일하게 다듬자

- 기능진행해야할것들
1. 상품리스트 availavle이 false경우 비노출
2. 상품리스트 12개 이상이면 페이징 처리
3. 에러 처리 코드를 컴포넌트로 ?! 빼는 작업
*
*/

const MenuListBlock = css`
  > ul {
    overflow: hidden;
    margin-left: -1.5%;
  }
`;

const MenuList = () => {
  const [menus, setMenus] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [show, setShow] = useState(false);

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
    console.log('삭제되었습니다. ' + '남은 상품 갯수 : ' + menus.length);
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
