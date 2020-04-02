import React, { useState } from 'react';
import { ProductsFormValidator } from './ProductsFormValidator';

// 수정 중~~~~~~~~~~
function ProductsForm({ onRegister }) {
  const [form, setForm] = useState({
    name: '',
  });

  const { name } = form;

  const onChange = e => {
    const next = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(next);
  };

  const onSubmit = e => {
    // const onSubmit = async e => {
    e.preventDefault();

    ProductsFormValidator.validate(form)
      .then(form => {
        onRegister(form);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="control-label">
            이름
          </label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-submit">
            상품생성
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductsForm;
