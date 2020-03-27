/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
const Logo = props => {
  if (props.type === 'header') {
    return (
      <h1 className="big-logo">
        <Link to="/">
          <img src={require('../img/logo.png')} alt="원효로떡볶이" />
        </Link>
      </h1>
    );
  } else if (props.type === 'footer') {
    return (
      <div className="sub-logo">
        <img src={require('../img/f_logo.png')} alt="원효로떡볶이" />
      </div>
    );
  }
};

export default Logo;
