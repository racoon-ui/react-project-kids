/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import styled from '@emotion/styled';
// import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from 'store';

const ProductsAddForm = css`
  padding: 50px 0;
  margin: 0 auto;
  width: 400px;
  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .form-group {
    margin-top: 20px;
  }
  .control-label {
    display: block;
    font-size: 15px;
    line-height: 30px;
  }
  .form-control {
    width: 100%;
    height: 40px;
    line-height: 20px;
    font-size: 15px;
  }
`;
const Button = styled.button`
  float: left;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  background: ${props => (props.goBack ? '#000' : '#fff')};
  color: ${props => (props.goBack ? '#fff' : '#000')};
`;

function ProductsForm() {
  const [form, setForm] = useState({
    category: '',
    name: '',
    image: '',
    summary: '',
    price: '',
    description: '',
  });

  const { category, name, image, summary, price, description } = form;

  // const { register, errors, handleSubmit } = useForm({
  //   mode: 'onBlur',
  // });

  const onChange = e => {
    const productForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(productForm);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('https://shrouded-escarpment-56668.herokuapp.com/api/products', form, {
        headers: { 'Content-Type': 'application/json', Authorization: store.get('token') },
      })
      .then(function(response) {
        console.log(response);
        alert('성공적으로 상품이 생성되었습니다');
      })
      .catch(function(error) {
        console.log(error);
        alert('실패했습니다.');
      });
  };

  return (
    <div css={ProductsAddForm}>
      <h3>상품등록</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="category" className="control-label">
            카테고리
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={category}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="control-label">
            메뉴이름
          </label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="control-label">
            메뉴이미지
          </label>
          <input type="text" className="form-control" id="image" name="image" value={image} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="summary" className="control-label">
            메뉴상세
          </label>
          <input type="text" className="form-control" id="summary" name="summary" value={summary} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="control-label">
            메뉴가격
          </label>
          <input type="text" className="form-control" id="price" name="price" value={price} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="control-label">
            메뉴상세정보
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <Button type="submit" className="btn btn-submit">
            상품생성
          </Button>
          <Link to="/menu">
            <Button goBack>뒤로가기</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ProductsForm;
