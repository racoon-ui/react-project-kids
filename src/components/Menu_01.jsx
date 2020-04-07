/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MenuList from './MenuList';

const subConainter = css`
  padding: 50px 100px;
  position: relative;
`;
const subTitle = css`
  font-size: 38px;
  color: #333;
  text-align: center;
  font-weight: 600;
`;
const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 30px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const Menu_01 = () => {
  return (
    <div css={subConainter}>
      <h3 css={subTitle}>메뉴</h3>
      <Link to="/menu/productAdd">
        <Button>상품등록</Button>
      </Link>
      <MenuList />
    </div>
  );
};

export default Menu_01;
