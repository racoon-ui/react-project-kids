/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { ProductsFormValidator } from './ProductsFormValidator';
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
    overflow: hidden;
    a {
      display: inline-block;
      width: 48%;
      margin-left: 4%;
      button {
        width: 100%;
      }
    }
  }
  .control-label {
    display: block;
    font-size: 15px;
    line-height: 30px;
    font-weight: 600;
  }
  .form-control {
    width: 100%;
    height: 40px;
    line-height: 20px;
    font-size: 15px;
    border: 1px solid #d1302f;
    box-sizing: border-box;
    &:focus {
      background: #ffdfdf;
    }
  }
  .error-container {
    line-height: 24px;
    color: #d1302f;
  }
`;
const Button = styled.button`
  float: left;
  width: 48%;
  height: 50px;
  font-weight: 600;
  border-radius: 5px;
  font-size: 18px;
  background: ${(props) => (props.goBack ? '#000' : '#d1302f')};
  color: ${(props) => (props.goBack ? '#fff' : '#fff')};
  border: none;
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

  const { register, errors } = useForm({
    mode: 'onBlur',
    validationSchema: ProductsFormValidator,
  });

  const onChange = (e) => {
    const productForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(productForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://shrouded-escarpment-56668.herokuapp.com/api/products', form, {
        headers: { 'Content-Type': 'application/json', Authorization: store.get('token') },
      })
      .then(function (response) {
        console.log(response);
        alert('성공적으로 상품이 생성되었습니다');
        window.location = '/menu';
      })
      .catch(function (error) {
        console.log(error);
        alert('실패했습니다.');
      });
  };
  const Error = ({ message }) => <div className="error-container">{message}</div>;

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
            className={`form-control ${errors.category && 'error'}`}
            id="category"
            name="category"
            value={category}
            onChange={onChange}
            ref={register}
          />
          {errors.category && <Error message={errors.category.message} />}
        </div>
        <div className="form-group">
          <label htmlFor="name" className="control-label">
            메뉴이름
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && 'error'}`}
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            ref={register}
          />
          {errors.name && <Error message={errors.name.message} />}
        </div>
        <div className="form-group">
          <label htmlFor="image" className="control-label">
            메뉴이미지
          </label>
          <input
            type="text"
            className={`form-control ${errors.image && 'error'}`}
            id="image"
            name="image"
            value={image}
            onChange={onChange}
            ref={register}
          />
          {errors.image && <Error message={errors.image.message} />}
        </div>
        <div className="form-group">
          <label htmlFor="summary" className="control-label">
            메뉴상세
          </label>
          <input
            type="text"
            className={`form-control ${errors.summary && 'error'}`}
            id="summary"
            name="summary"
            value={summary}
            onChange={onChange}
            ref={register}
          />
          {errors.summary && <Error message={errors.summary.message} />}
        </div>
        <div className="form-group">
          <label htmlFor="price" className="control-label">
            메뉴가격
          </label>
          <input
            type="text"
            className={`form-control ${errors.price && 'error'}`}
            id="price"
            name="price"
            value={price}
            onChange={onChange}
            ref={register}
          />
          {errors.price && <Error message={errors.price.message} />}
        </div>
        <div className="form-group">
          <label htmlFor="description" className="control-label">
            메뉴상세정보
          </label>
          <input
            type="text"
            className={`form-control ${errors.description && 'error'}`}
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            ref={register}
          />
          {errors.description && <Error message={errors.description.message} />}
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
