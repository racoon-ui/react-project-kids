/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Icon from '../common/Icon';

const pathtitlestyle = css`
  text-align: center;
  h3 {
    font-size: 35px;
    font-weight: bold;
    color: #000;
  }
  .sub-box {
    svg {
      margin-top: -2px;
      background: #d13030;
      border-radius: 20px;
      font-size: 15px;
      padding: 4px;
      color: #fff;
      vertical-align: middle;
    }
    margin: 10px 0;
    height: 25px;
    line-height: 25px;
    color: #909090;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    /* pc */
    margin-bottom: 50px;
  }
  @media (max-width: 1024px) {
    /* m */
    margin-bottom: 25px;
  }
`;

const Pathtitle = props => {
  const array = props.pathtext.split('>');

  return (
    <div css={pathtitlestyle} {...props}>
      <h3>{array[array.length - 1]}</h3>
      <div className="sub-box">
        <Icon type="MdHome" color="#fff" /> > {props.pathtext}
      </div>
    </div>
  );
};

export default Pathtitle;
