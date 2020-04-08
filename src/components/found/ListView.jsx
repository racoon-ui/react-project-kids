/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { TABLE, LISTWRAP, LISTITEM } from '../common/Tag';

import Icon from '../common/Icon';

import { CheckLogin } from '../CheckLogin';
import { Link } from 'react-router-dom';
const FoundListstyle = css`
  margin: 0 auto;
  width: 1080px;
  border-top: 1px #dfdfdf solid;
  .listitem {
    padding: 15px;
    border-bottom: 1px #dfdfdf solid;
    box-sizing: border-box;
  }
  @media (min-width: 768px) {
    /* pc */
    & > div {
      width: 50%;
    }
    .listitem {
      &:nth-of-type(odd) table {
        border-right: 1px dashed #e0e0e0;
      }
    }
  }
  @media (max-width: 767px) {
    /* m */
    & > div {
      width: 100%;
    }
  }
`;

const ListView = ({ posts, postsremove }) => {
  return (
    <LISTWRAP css={FoundListstyle}>
      {posts.map((post) => (
        <LISTITEM float="left" key={post._id}>
          <TABLE align="left" row_height="30px" titlesize="24px" titlecolor="#333" subsize="16px">
            <caption>{post.name}</caption>
            <colgroup>
              <col width="20%" />
              <col width="70%" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <Icon type="IoMdPin" color="#d13030" />
                  주소
                </th>
                <td>{post.address}</td>
              </tr>
              <tr>
                <th>
                  <Icon type="MdPhone" color="#d13030" />
                  전화
                </th>
                <td>{post.phone}</td>
              </tr>
              <tr>
                <th>
                  <Icon type="IoIosTime" color="#d13030" />
                  영업시간
                </th>
                <td>{post.hour}</td>
              </tr>
            </tbody>
          </TABLE>
          <CheckLogin login>
            <button onClick={() => postsremove(post._id)}>지점삭제</button>
            <button onClick={() => console.log(post._id)}>상세보기</button>
            <Link to={`/found/detail/${post._id}`}>상세보기</Link>
          </CheckLogin>
        </LISTITEM>
      ))}
    </LISTWRAP>
  );
};

export default ListView;
