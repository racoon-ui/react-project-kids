/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

/* data_api */
import axios from 'axios';

import Loding from '../common/Loding';
import ListItem from './ListItem';

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
  const [foundlists, setFoundlist] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setFoundlist(response.data);
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
        <ListItem key={foundlist._id} data={foundlist} />
      ))}
    </ListWrap>
  );
};

export default FoundList;
