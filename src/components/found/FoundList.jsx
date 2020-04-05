/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import store from 'store';
import { useState, useEffect, Fragment } from 'react';
import { CheckLogin } from '../CheckLogin';
/* data_api */
import axios from 'axios';

import Loding from '../common/Loding';
//import FoundRemove from '../found/FoundRemove';

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

  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

  const onRemove = (id) => {
    if (window.confirm('정말 삭제할꺼야?')) {
      axios
        .delete(`https://shrouded-escarpment-56668.herokuapp.com/api/stores/${id}`, config)
        .then(function (response) {
          const nextNames = foundlists.filter((name) => name._id !== id);
          setFoundlists(nextNames);
          alert('삭제되었습니다.');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onSearch = (id) => {
    //console.log(nextName);
    const nextNames = foundlists.filter((item) => item.name.indexOf(id) !== -1);
    // console.log(nextNames);
    setFoundlists(nextNames);
  };

  const onPagging = (num) => {
    console.log(num);
    let data = [];
    if (num === 1) {
      data = foundlists.slice(0, 3);
    } else if (num === 2) {
      data = foundlists.slice(3, 6);
    } else if (num === 3) {
      data = foundlists.slice(6, 9);
    }
    setFoundlists(data);
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setFoundlists(response.data);
        //console.log(response.data);
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
    <Fragment>
      <div className="a">
        <input type="text" placeholder="국가명" value={inputText} onChange={onChange} />
        <button onClick={(e) => onSearch(inputText)}>검색</button>
      </div>

      <LISTWRAP css={FoundListstyle}>
        {console.log(foundlists.length)}
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
              <button onClick={(e) => onRemove(foundlist._id)}>지점삭제</button>
            </CheckLogin>
          </LISTITEM>
        ))}
      </LISTWRAP>

      {/* <div>
        <button onClick={(e) => onPagging((foundlists.length / 3) * 1)}>1</button>
        <br />
        <button onClick={(e) => onPagging((foundlists.length / 3) * 2)}>2</button>
        <br />
        <button onClick={(e) => onPagging((foundlists.length / 3) * 3)}>3</button>
        <br />
      </div> */}
      <div>
        <button onClick={(e) => onPagging(1)}>1</button>
        <br />
        <button onClick={(e) => onPagging(2)}>2</button>
        <br />
        <button onClick={(e) => onPagging(3)}>3</button>
        <br />
      </div>
    </Fragment>
  );
};

export default FoundList;
