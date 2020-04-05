/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const overlay = css`
  z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .modal {
    z-index: 99;
    position: absolute;
    width: 500px;
    max-height: 100%;
    margin: 0 auto;
  }
  .modal-close {
    position: absolute;
    top: -35px;
    right: 0;
    padding: 5px;
    border: 0;
    -webkit-appearance: none;
    background: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
  .modal-body {
    padding: 40px;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      text-align: left;
    }
  }
`;
const ProductsModal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay" css={overlay}>
      <div className="modal">
        <button className="modal-close" onClick={() => setShow(false)}>
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
  return content;
};

export default ProductsModal;
