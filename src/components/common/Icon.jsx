/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { IoMdPin, IoIosTime } from 'react-icons/io';
import { MdPhone, MdHome } from 'react-icons/md';

const Icon = props => {
  const iconstyle = css`
    color: ${props.color || '#333'};
  `;
  //아이콘 모음집을 하고싶었는데 ㅠㅠ 뭔가 지금은 하드코딩 되버렸넹... 편히 쓸 다른방법이 있을꺼같은데(고민좀 해봐야될곳)
  if (props.type === 'IoMdPin') {
    return <IoMdPin css={iconstyle} {...props} />;
  }
  if (props.type === 'IoIosTime') {
    return <IoIosTime css={iconstyle} {...props} />;
  }
  if (props.type === 'MdPhone') {
    return <MdPhone css={iconstyle} {...props} />;
  }
  if (props.type === 'MdHome') {
    return <MdHome css={iconstyle} {...props} />;
  }
};

export default Icon;
