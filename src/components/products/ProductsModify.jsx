/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductsFormValidator } from './ProductsFormValidator';
import { Link } from 'react-router-dom';
import ProductsFormStyle from './ProductsFormStyle';
import axios from 'axios';
import store from 'store';

function ProductsModify() {
  const [form, setForm] = useState({
    category: '',
    name: '',
    image: '',
    summary: '',
    price: '',
    description: '',
  });

  const { category, name, image, summary, price, description } = form;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

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

  const onSubmit = (_id) => {
    // e.preventDefault();
    axios
      .patch(`https://shrouded-escarpment-56668.herokuapp.com/api/products/${_id}`, form, config)
      .then(function (response) {
        alert('성공적으로 상품이 생성되었습니다');
        window.location = '/menu';
      })
      .catch(function (error) {
        alert('실패했습니다.');
      });
  };
  const Error = ({ message }) => <div className="error-container">{message}</div>;

  return (
    <ProductsFormStyle>
      <h3>상품등록</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="category" className="control-label">
            카테고리 <em>*</em>
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
            메뉴이름 <em>*</em>
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
            메뉴이미지 <em>*</em>
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
            메뉴상세 <em>*</em>
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
            메뉴가격 <em>*</em>
          </label>
          <input
            type="number"
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
            메뉴상세정보 <em>*</em>
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
        <span className="infoText">* 항목은 필수 입력입니다.</span>
        <div className="form-group">
          <button type="submit" className="btn btn-submit">
            상품수정
          </button>
          <Link to="/menu">
            <button className="goBack">뒤로가기</button>
          </Link>
        </div>
      </form>
    </ProductsFormStyle>
  );
}

export default ProductsModify;
