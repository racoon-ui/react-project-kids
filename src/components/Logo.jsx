/** @jsx jsx */
import { jsx } from '@emotion/core';

const Logo = props => {
  if (props.type === 'header') {
    return (
      <h1>
        <a href="/">
          <img src={require('../containers/img/logo.png')} alt="원효로떡볶이" />
        </a>
      </h1>
    );
  } else if (props.type === 'footer') {
    return (
      <div>
        <img src={require('../containers/img/f_logo.png')} alt="원효로떡볶이" />
      </div>
    );
  }
};

export default Logo;
