/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';










const Searchstyle = css`
  margin: 0 auto 30px auto;
  width: 1080px;
  border: 1px #e8e8e8 solid;
  box-sizing: border-box;
  padding: 28px 0;
  background-color: #f4f4f4;
  > div {
    margin: 0 auto;
    width: 600px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  input {
    float: left;
    width: 83%;
    border: 2px solid #c9c9c9;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
  }
  button {
    float: right;
    width: 15%;
    height: 50px;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    /* pc */
  }
  @media (max-width: 767px) {
    /* m */
  }
`;




const SearchBar = ({searchBtn,children}) => {
    const [search, setSearch] = useState('');
    return (
        <div css={Searchstyle}>
            <div>
            <input type="text" placeholder="지점명을 입력하세요" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={(e) => searchBtn(search)}>{children}</button>
            </div>
        </div>
    );
};

export default SearchBar;