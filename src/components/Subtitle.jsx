/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Subtitstyle = css`
  background: url(${require('../img/sub_top01.png')}) no-repeat center 0;
  text-align: center;
  height: 299px;
  h2 {
    font-size: 42px;
    color: #fff;
    padding-top: 110px;
    border-bottom: 2px #fff solid;
    display: inline-block;
    line-height: 65px;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    /* pc */
  }
  @media (max-width: 1024px) {
    /* m */
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
