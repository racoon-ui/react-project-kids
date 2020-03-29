/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Subtitstyle = css`
  background: url(${require('../img/sub_top01.png')}) no-repeat center 0;
  text-align: center;

  h2 {
    color: #fff;
    display: inline-block;
    line-height: 65px;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    /* pc */
    height: 299px;
    h2 {
      padding-top: 110px;
      font-size: 42px;
      border-bottom: 2px #fff solid;
    }
  }
  @media (max-width: 1024px) {
    /* m */
    height: 100px;
    h2 {
      padding-top: 17px;
      font-size: 30px;
    }
  }
`;

const Subtitle = props => {
  return (
    <div css={Subtitstyle} {...props}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Subtitle;
