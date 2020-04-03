/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

/* data_api */
import axios from 'axios';

import Loding from '../common/Loding';




import Icon from '../common/Icon';
import { TABLE,BOX } from '../common/Tag';




const ListWrap = styled.div`
  overflow: hidden;
  border-top: 1px #dfdfdf solid;
  & > div {
    border-bottom: 1px #dfdfdf solid;
    box-sizing: border-box;
    th {
      width: 30%;
    }
    td {
      width: 70%;
    }
    &:nth-of-type(odd) table {
      border-right: 1px dashed #e0e0e0;
    }
  }

  @media (min-width: 768px) {
    /* pc */
    & > div {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
    /* m */
    & > div {
      width: 100%;
    }
  }
`;

const FoundList = props => {
  const [foundlists, setFoundlists] = useState(null);
  const [loading, setLoading] = useState(false);
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
  }, []);

  //로딩(컴포넌트로 뺄예정)
  if (loading) {
    return <Loding />;
  }

  //아직 foundlists 값이 설정되지 않았을 때
  if (!foundlists) {
    return null;
  }

  return (
    <ListWrap>
      {foundlists.map(foundlist => (
        <BOX key={foundlist._id}>
          <TABLE align="left" padding="7px 5px" titlesize="24px" titlecolor="#d13030" subsize="16px">
            <caption>{foundlist.name}</caption>
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
        </BOX>
      ))}
    </ListWrap>
  );
};

export default FoundList;
