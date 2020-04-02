/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { IoMdMenu, IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';

const Lnbbtnstyle = css`
  position: absolute;
  top: 5px;
  right: 1%;
  font-size: 3em;
  color: #fff;

  @media (min-width: 1024px) {
    /* pc */
    display: none;
  }
  @media (max-width: 1024px) {
    /* m */
  }
`;

const Lnbbtn = props => {
  return (
    <div css={Lnbbtnstyle} {...props}>
      {props.listopen === 'off' ? <IoMdMenu /> : <IoMdClose />}
    </div>
  );
};

Lnbbtn.defaultProps = {
  listopen: 'off',
};
Lnbbtn.propTypes = {
  listopen: PropTypes.string,
};

export default Lnbbtn;
