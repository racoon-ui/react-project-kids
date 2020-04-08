/** @jsx jsx */
import { jsx } from '@emotion/core';
import store from 'store';
import { useState, useEffect, Fragment } from 'react';
import Loding from '../common/Loding';

/* data_api */
import axios from 'axios';
import ListPagination from './ListPagination';
import ListView from './ListView';
import SearchBar from './SearchBar';




const FoundList = (props) => {

  const [datalists, setDatalists] = useState(); //axios로 불러온 데이터 담긴곳
  const [datalistsBack, setDatalistsBack] = useState(); //axios로 불러온 데이터 담긴곳(백업)
  const [loading, setLoading] = useState(false); //로딩 컴포넌트
  const [dataCutNum] = useState(6); //데이터 몇개 단위로 조각 내서 페이징 처리할껀지 숫자 넣는곳

  const [currentPage, setCurrentPage] = useState(1); //Pagination 컨포넌트 안에서 key 값으로 받은 숫자를 담는 변수

  const [error,setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 datalist 를 초기화하고
        setError(null);
        setDatalists(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        /* 에러용 URL */
        //const response = await axios.get('https://jsonplaceholder.typicode.com/users/showmeerror');
        /* 에러용 URL */
        setDatalists(response.data); //뿌려질용
        setDatalistsBack(response.data); //뿌려질용
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <Loding />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!datalists) return null;





  // 데이터 가공##
  // Get current posts
  const indexOfLastPost = currentPage * dataCutNum; //페이징 넘버(예)3 * 상단에 초기값으로 넣어준 나눌 갯수(예)6 = 예)18
  const indexOfFirstPost = indexOfLastPost - dataCutNum; //예) 위의 18 - 상단에 초기값으로 넣어준 나눌 갯수(예)6 = 예)12
  const currentPosts = datalists.slice(indexOfFirstPost, indexOfLastPost);

  //paginate 컴포넌트 안에 props 로 내부 태그에 이벤트 연결(##이거몰라서 삽질엄청 함##)
  const paginate = pageNumber => setCurrentPage(pageNumber);






  /**
   * 리스트찾기[지점명 검색 버튼]
   */
  const searchBtn = async (name) => {
    if(name === ''){
      //검색input에 값이 없을경우
      setDatalists(datalistsBack);
    }else{
      try {
        setError(null);
        setDatalists(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(`https://shrouded-escarpment-56668.herokuapp.com/api/stores?name=${name}`);
        setCurrentPage(1);//페이징 인덱스가 다른걸로 바뀌면 안되기위해 준변수
        setDatalists(response.data)

      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
  };
    



  /**
   * 리스트삭제[지점삭제버튼]
   */
  const postsremove = (id) => {
    if (window.confirm('정말 삭제할꺼야?')) {
      axios
        .delete(`https://shrouded-escarpment-56668.herokuapp.com/api/stores/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('token'),
          },
        })
        .then(function (response) {
          const FilterData = datalists.filter((name) => name._id !== id);
          setDatalists(FilterData);
          alert('삭제되었습니다.');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };



  return (
    <Fragment>

      <SearchBar searchBtn={searchBtn}>검색</SearchBar>

      <ListView 
        posts={currentPosts} 
        loading={loading} 
        postsremove={postsremove} 
          
        />
      <ListPagination
        dataCutNum={dataCutNum}
        totalPosts={datalists.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Fragment>
  );
};

export default FoundList;
