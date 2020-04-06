/** @jsx jsx */
import { jsx } from '@emotion/core';

const ProductsModal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay">
      <div className="modal">
        <div className="modalTitle">
          상품상세
          <a href="#;" className="modal-close" onClick={() => setShow(false)}>
            X
          </a>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
  return content;
};

export default ProductsModal;
