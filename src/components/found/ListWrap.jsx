/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect, Fragment } from 'react';

/* common */
import axios from 'axios';
import store from 'store';
import useRestApi from '../../utils/api';
import Loading from '../common/Loading';

/* data_api */
import SearchBar from './SearchBar';
import ListView from './ListView';
import ListPagination from './ListPagination';

const FoundList = (props) => {
  const [{ loading, data: datalists, error }] = useRestApi(`/api/stores/`, { manual: false });
  const [datafound, setDatafound] = useState(null); //노출되는 데이터
  const [dataCutNum] = useState(2); //데이터 몇개 단위로 조각 내서 페이징 처리할껀지 숫자 넣는곳

  const [currentPage, setCurrentPage] = useState(1); //Pagination 컨포넌트 안에서 key 값으로 받은 숫자를 담는 변수

  useEffect(() => {
    setDatafound(datalists);
  }, [datalists]);

  /**
   * 리스트찾기[지점명 검색 버튼]
   */
  const searchBtn = async (name) => {
    if (name === '') {
      //검색input에 값이 없을경우
      setDatafound(datalists);
    } else {
      try {
        //setError(null);
        setDatafound(null);
        // loading 상태를 true 로 바꿉니다.
        //setLoading(true);
        const response = await axios.get(`https://shrouded-escarpment-56668.herokuapp.com/api/stores?name=${name}`);
        setCurrentPage(1); //페이징 인덱스가 다른걸로 바뀌면 안되기위해 준변수
        setDatafound(response.data);
      } catch (e) {
        //setError(e);
      }
      //setLoading(false);
    }
  };

  /**
   * 리스트삭제[지점삭제버튼]
   */
  const listDeletion = (id) => {
    if (window.confirm('정말 해당지점을 삭제하시겠습니까?')) {
      axios
        .delete(`https://shrouded-escarpment-56668.herokuapp.com/api/stores/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('token'),
          },
        })
        .then(function (response) {
          const FilterData = datafound.filter((name) => name._id !== id);
          setDatafound(FilterData);
          alert('삭제되었습니다.');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // 대기 중일 때
  if (loading) return <Loading />;
  // 에러
  if (error) return <div>에러가 발생했습니다</div>;
  //아직 값이 설정되지 않았을 때
  if (!datafound) return null;

  // 데이터 가공##
  // Get current posts
  const indexOfLastPost = currentPage * dataCutNum; //페이징 넘버(예)3 * 상단에 초기값으로 넣어준 나눌 갯수(예)6 = 예)18
  const indexOfFirstPost = indexOfLastPost - dataCutNum; //예) 위의 18 - 상단에 초기값으로 넣어준 나눌 갯수(예)6 = 예)12
  const currentPosts = datafound.slice(indexOfFirstPost, indexOfLastPost);

  //paginate 컴포넌트 안에 props 로 내부 태그에 이벤트 연결(##이거몰라서 삽질엄청 함##)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <SearchBar searchBtn={searchBtn}>검색</SearchBar>

      <ListView posts={currentPosts} listDeletion={listDeletion} />

      <ListPagination
        dataCutNum={dataCutNum}
        totalPosts={datafound.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Fragment>
  );
};

export default FoundList;
