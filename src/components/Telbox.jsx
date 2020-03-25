/** @jsx jsx */
import { css,Global,jsx } from '@emotion/core';

const telboxstyle = css`
  display: none;
  float: right;
  width: 250px;
  border-left: 1px #d74949 solid;
  padding: 18px 20px;
  box-sizing: border-box;
  height: 84px;
  & > div {
    display: inline-block;
    vertical-align: top;
    line-height: 100%;
  }
  .tel_i {
    margin-right: 7px;
    width: 23%;
  }
  .tel_text {
    width: 71%;
    span {
      font-size: 13px;
      color: #fff;
    }
    strong {
      display: block;
      font-size: 30px;
      color: #fff;
      margin-top: 9px;
    }
  }
  @media (min-width: 1024px) {
    /* pc */
    &{
      display: block;
    }
    
  }
  @media (max-width: 1024px) {
    /* m */

  }
`;









const Telbox = (props) => {
  return (
    <div css=
      {telboxstyle}
      {...props}
    >
      <div className="tel_i">
        <img src={require('../containers/img/tel_i.png')} alt="전화아이콘" />
      </div>
      <div className="tel_text">
        <span>가맹상담전화/온라인상담</span>
        <strong>1111-1234</strong>
      </div>
    </div>
  );
};

export default Telbox;
