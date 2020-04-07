/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon from '../common/Icon';
const Paggingstyle = css`
  padding: 30px 0;
  text-align: center;
  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #c5c5c5;
    border-radius: 3px;
    color: #555;
  }
  @media (min-width: 768px) {
    /* pc */
  }
  @media (max-width: 767px) {
    /* m */
  }
`;


const ListPagination = ({ dataCutNum, totalPosts, paginate  }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / dataCutNum); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination' css={Paggingstyle}>

        <button onClick={() => paginate(1)}   className='page-item'>
          <Icon type="IoIosSkipBackward" />
        </button>

      {pageNumbers.map(number => (
        <button onClick={() => paginate(number)}  key={number} className='page-item'>
          {number}
        </button>
      ))}
      <button onClick={() => paginate(pageNumbers.length)}   className='page-item'>
      <Icon type="IoIosSkipForward" />
        </button>

    </div>
  );
};

export default ListPagination;