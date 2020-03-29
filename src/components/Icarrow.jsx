/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import PropTypes from 'prop-types';
const Ic_arrowstyle = css`
  display: inline-block;
  @media (min-width: 1024px) {
    /* pc */
    display: none;
  }
  @media (max-width: 1024px) {
    /* m */
  }
`;

const Icarrow = props => {
  return (
    <div css={Ic_arrowstyle} {...props}>
      {props.open === 'on' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
    </div>
  );
};

Icarrow.defaultProps = {
  open: 'off',
};
Icarrow.propTypes = {
  open: PropTypes.string,
};

export default Icarrow;
