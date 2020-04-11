/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductsFormValidator } from './ProductsFormValidator';
import { Link } from 'react-router-dom';

import ProductsFormStyle from './ProductsFormStyle';
import BtnLoading from './BtnLoading';

import useRestApi from '../../utils/api';

// 상품생성 폼
const ProductsForm = () => {
  const [form, setForm] = useState({
    category: '',
    name: '',
    image: '',
    summary: '',
    price: '',
    description: '',
  });

  const { category, name, image, summary, price, description } = form;

  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
    validationSchema: ProductsFormValidator,
  });

  const [{ loading, error, data }, fetchData] = useRestApi('/api/products', { manual: false });

  const onChange = (e) => {
    const productForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(productForm);
  };

  const onRegister = () => {
    console.log('onRegister');
    fetchData({
      url: '/api/products',
      method: 'POST',
      data: form,
    });
  };

  const onSubmit = (e) => {
    ProductsFormValidator.validate(form)
      .then((form) => {
        onRegister();
        setTimeout(() => (window.location = '/menu'), 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Error = ({ message }) => <div className="error-container">{message}</div>;

  // 에러났을때
  if (error) {
    return <div>에러가 발생했습니다..</div>;
  }
  //아직 값이 설정되지 않았을 때
  if (!data) return null;

  return (
    <ProductsFormStyle>
      <h3>상품등록</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {loading && <BtnLoading />}
            {/* <BtnLoading /> */}
            상품생성
          </button>
          <Link to="/menu">
            <button className="goBack">뒤로가기</button>
          </Link>
        </div>
      </form>
    </ProductsFormStyle>
  );
};

export default ProductsForm;
