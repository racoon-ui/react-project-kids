/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import store from 'store';
import { useState, useEffect, Fragment } from 'react';
import { CheckLogin } from '../CheckLogin';
/* data_api */
import axios from 'axios';

import Loding from '../common/Loding';

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
  margin: 0 auto 30px auto;
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

const Paggingstyle = css`
  padding: 30px 0;
  text-align: center;
  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #c5c5c5;
    border-radius: 3px;
    color: #555;
  }
  @media (min-width: 768px) {
    /* pc */
  }
  @media (max-width: 767px) {
    /* m */
  }
`;

const FoundList = (props) => {
  const [datalist, setDatalist] = useState(null); //원본 데이터
  const [viewlist, setViewlist] = useState(null); //뿌려질용 데이터

  const [loading, setLoading] = useState(false); //로딩용
  const [error, setError] = useState(null); //에러용

  const [inputText, setInputText] = useState(''); //검색창에 입력시 담기는 변수

  const Pagging = (props) => {
    const resultnum = []; //쪼개진 데이터
    const num = props.slice;
    if (props.number.length > num) {
      let cntnum = Math.floor(props.number.length / num);
      let div = num;
      for (let i = 0; i <= cntnum; i++) {
        resultnum.push(props.number.slice(div - num, div));
        div += num;
      }
    }

    const Hello = (key) => {
      console.log(key);
      setViewlist(resultnum[key]);
    };

    return (
      <div css={Paggingstyle}>
        <button onClick={() => Hello(0)}>
          <Icon type="IoIosSkipBackward" />
        </button>
        {resultnum.map((results, index) => (
          <button href="" key={index} onClick={() => Hello(index)}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => Hello(resultnum.length - 1)}>
          <Icon type="IoIosSkipForward" />
        </button>
      </div>
    );
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 datalist 를 초기화하고
        setError(null);
        setDatalist(null);
        setViewlist(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        /* 에러용 URL */
        //const response = await axios.get('https://jsonplaceholder.typicode.com/users/showmeerror');
        /* 에러용 URL */
        setDatalist(response.data); //원본으로 쓸용
        setViewlist(response.data); //뿌려질용
        setTimeout(function () {
          // console.log(resultnum[0]);
        }, 5000);
        //setViewlist();
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <Loding />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!datalist) return null;

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSearch = (id) => {
    //검색창
    const nextNames = datalist.filter((item) => item.name.indexOf(id) !== -1);
    setViewlist(nextNames);
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
          const nextNames = viewlist.filter((name) => name._id !== id);
          setViewlist(nextNames);
          alert('삭제되었습니다.');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Fragment>
      <div css={Searchstyle}>
        <div>
          <input type="text" placeholder="지점명을 입력하세요" value={inputText} onChange={onChange} />
          <button onClick={(e) => onSearch(inputText)}>검색</button>
        </div>
      </div>

      <LISTWRAP css={FoundListstyle}>
        {viewlist.map((viewlists) => (
          <LISTITEM float="left" key={viewlists._id}>
            <TABLE align="left" row_height="30px" titlesize="24px" titlecolor="#333" subsize="16px">
              <caption>{viewlists.name}</caption>
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
                  <td>{viewlists.address}</td>
                </tr>
                <tr>
                  <th>
                    <Icon type="MdPhone" color="#d13030" />
                    전화
                  </th>
                  <td>{viewlists.phone}</td>
                </tr>
                <tr>
                  <th>
                    <Icon type="IoIosTime" color="#d13030" />
                    영업시간
                  </th>
                  <td>{viewlists.hour}</td>
                </tr>
              </tbody>
            </TABLE>
            <CheckLogin login>
              <button onClick={(e) => onRemove(viewlists._id)}>지점삭제</button>
            </CheckLogin>
          </LISTITEM>
        ))}
      </LISTWRAP>

      <Pagging number={datalist} slice={6} />
    </Fragment>
  );
};

export default FoundList;
