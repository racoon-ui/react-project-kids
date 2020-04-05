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

const Searchstyle = css`
  margin: 0 auto;
  width: 1080px;
  border: 1px #e8e8e8 solid;
  box-sizing: border-box;
  padding: 28px 0;
  background-color: #f4f4f4;
  > div {
    margin: 0 auto;
    width: 600px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  input {
    float: left;
    width: 83%;
    border: 2px solid #c9c9c9;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
  }
  button {
    float: right;
    width: 15%;
    height: 50px;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    /* pc */
  }
  @media (max-width: 767px) {
    /* m */
  }
`;
const FoundList = (props) => {
  const [foundlists, setFoundlists] = useState(null); //지점 리스트로 쓸 데이터
  const [foundlistsBackup, setFoundlistsBackup] = useState(null); //지점 총 데이터 보관용
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSearch = (id) => {
    //검색창
    const nextNames = foundlistsBackup.filter((item) => item.name.indexOf(id) !== -1);
    setFoundlists(nextNames);
  };

  const onRemove = (id) => {
    //지점 리스트 삭제 기능
    if (window.confirm('정말 삭제할꺼야?')) {
      axios
        .delete(`https://shrouded-escarpment-56668.herokuapp.com/api/stores/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('token'),
          },
        })
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

  const onHello = (aa) => {
    setFoundlists(aa[0]);
    console.log(aa);
    //setFoundlists(tmp[0]);
  };

  const Pagging = (num) => {
    let dfff = 3;
    let len = foundlistsBackup.length;
    let cnt = Math.floor(len / dfff);
    let aa = [];
    let elements = [];

    for (var i = 0; i <= cnt; i++) {
      aa.push(foundlistsBackup.slice(dfff - 3, dfff));
      dfff += 3;
      elements.push(
        <button href="" key={i} onClick={(e) => onHello(aa)}>
          {i}
        </button>,
      );
    }

    console.log(aa);

    return <div>{elements}</div>;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setFoundlists(response.data);
        setFoundlistsBackup(response.data);
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
      <div css={Searchstyle}>
        <div>
          <input type="text" placeholder="지점명을 입력하세요" value={inputText} onChange={onChange} />
          <button onClick={(e) => onSearch(inputText)}>검색</button>
        </div>
      </div>
      <Pagging />
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
      {/* <div>
        <button onClick={(e) => onPagging(1)}>1</button>
        <br />
        <button onClick={(e) => onPagging(2)}>2</button>
        <br />
        <button onClick={(e) => onPagging(3)}>3</button>
        <br />
      </div> */}
    </Fragment>
  );
};

export default FoundList;
