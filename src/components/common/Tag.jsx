/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const TABLE = (props) => (
  <table
    css={css`
      text-align: ${props.align || 'left'};
      width: 100%;
      font-size: ${props.subsize || '12px'};
      caption {
        text-align: ${props.align || 'left'};
        font-size: ${props.titlesize || '12px'};
        color: ${props.titlecolor || '#333'};
      }
      th {
        height: ${props.row_height || '5px'};
        vertical-align: middle;
      }
      td {
        height: ${props.row_height || '5px'};
        vertical-align: middle;
      }
    `}
    {...props}
  >
    {props.children}
  </table>
);

const CONTAINER = (props) => (
  <div
    className="container"
    css={css`
      padding: ${props.padding || '10px'};
    `}
    {...props}
  >
    {props.children}
  </div>
);

const INNER = (props) => (
  <div
    className="inner"
    css={css`
      margin: 0 auto;
      width: ${props.width || '1080px'};
      &:after {
        content: '';
        display: block;
        clear: both;
      }
    `}
    {...props}
  >
    {props.children}
  </div>
);

const LISTWRAP = (props) => (
  <div
    className="listwrap"
    css={css`
      &:after {
        content: '';
        display: block;
        clear: both;
      }
    `}
    {...props}
  >
    {props.children}
  </div>
);

const LISTITEM = (props) => (
  <div
    className="listitem"
    css={css`
      ${props.float === 'left' ? 'float:left;' : ''}
    `}
    {...props}
  >
    {props.children}
  </div>
);

export { TABLE, CONTAINER, LISTWRAP, LISTITEM, INNER };
