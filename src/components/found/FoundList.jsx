/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useState, useEffect, Fragment } from 'react';
import { CheckLogin } from '../CheckLogin';
/* data_api */
import axios from 'axios';

import Loding from '../common/Loding';
import FoundRemove from '../found/FoundRemove';

import Icon from '../common/Icon';
import { TABLE, LISTWRAP, LISTITEM } from '../common/Tag';

const FoundListstyle = css`
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

const FoundList = (props) => {
  const [foundlists, setFoundlists] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setFoundlists(response.data);
      } catch (e) {
        if (e.message === 'Request failed with status code 401') {
          alert('401에러입니다.');
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [name]);

  //로딩(컴포넌트로 뺄예정)
  if (loading) {
    return <Loding />;
  }

  //아직 foundlists 값이 설정되지 않았을 때
  if (!foundlists) {
    return null;
  }

  return (
    <Fragment>
      <div className="a">
        <input type="text" placeholder="국가명" value={name} onChange={onChangeName} />
      </div>
      {name}
      <LISTWRAP css={FoundListstyle}>
        {foundlists.map((foundlist) => (
          <LISTITEM float="left" key={foundlist._id}>
            <TABLE align="left" row_height="30px" titlesize="24px" titlecolor="#333" subsize="16px">
              <caption>{foundlist.name}</caption>
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
                  <td>{foundlist.address}</td>
                </tr>
                <tr>
                  <th>
                    <Icon type="MdPhone" color="#d13030" />
                    전화
                  </th>
                  <td>{foundlist.phone}</td>
                </tr>
                <tr>
                  <th>
                    <Icon type="IoIosTime" color="#d13030" />
                    영업시간
                  </th>
                  <td>{foundlist.hour}</td>
                </tr>
              </tbody>
            </TABLE>
            <CheckLogin login>
              <FoundRemove foundlistid={foundlist._id}>지점삭제</FoundRemove>
            </CheckLogin>
          </LISTITEM>
        ))}
      </LISTWRAP>
    </Fragment>
  );
};

export default FoundList;
