/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const DIV = props => (
  <div
    css={css`
      ${props.float === 'left' ? 'float:left;' : ''};
      width: ${props.width || ''};
      padding: ${props.padding || '5px'};
    `}
    {...props}
  >
    {props.children}
  </div>
);

const TABLE = props => (
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
        padding: ${props.padding || '5px'};
      }
      td {
        padding: ${props.padding || '5px'};
      }
    `}
    {...props}
  >
    {props.children}
  </table>
);

export { DIV, TABLE };
