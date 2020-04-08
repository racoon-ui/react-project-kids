import React from 'react';
// import MenuItem from '../MenuItem';
import Menus from './../Menus';

// 상품 리스트에서 상품 한개 클릭하면 클릭한 상품이 뿌려질 화면
function ProductsDetail({ match, history }) {
  const menu = Menus.find((menu) => menu.id === match.params.id);
  return (
    <>
      <h2>menus Detail</h2>
      <dt>id</dt>
      <dd>{menu.id}</dd>
      <dt>name</dt>
      <dd>{menu.name}</dd>
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
}
export default ProductsDetail;
