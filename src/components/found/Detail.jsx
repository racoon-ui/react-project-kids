/** @jsx jsx */
import { jsx,css } from '@emotion/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loding from '../common/Loding';
import { INNER, TABLE } from '../common/Tag';
import MapContent from '../found/MapContent';
import Icon from '../common/Icon';






const Detailstyle = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  #Mymap{
    height:500px;
  }
  @media (min-width: 1024px) {
    /* pc */

  }
  @media (max-width: 1024px) {
    /* m */

  }
`;





const Detail = ({ match }) => {
  const [datalists, setDatalists] = useState(null); //axios로 불러온 데이터 담긴곳
  const [loading, setLoading] = useState(false); //로딩 컴포넌트
  const [error, setError] = useState(null);
  //const [hello] = useState(match.params.id);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 datalist 를 초기화하고
        setError(null);
        setDatalists(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          `https://shrouded-escarpment-56668.herokuapp.com/api/stores/${match.params.id}`,
        );
        /* 에러용 URL */
        //const response = await axios.get('https://jsonplaceholder.typicode.com/users/showmeerror');
        /* 에러용 URL */
        setDatalists(response.data); //뿌려질용
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [match.params.id]);

  if (loading) return <Loding />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!datalists) return null;

  return (
    <div css={Detailstyle}>
      <INNER>
        <h2><Icon type="IoIosArrowDroprightCircle" />매장안내</h2>
        <TABLE>
          <colgroup>
            <col width="20%" />
            <col width="30%" />
            <col width="20%" />
            <col width="30%" />
          </colgroup>
          <tbody>
            <tr>
              <th>매장명</th>
              <td>{datalists.name}</td>
              <th>주소</th>
              <td>{datalists.address}</td>
            </tr>
            <tr>
              <th>전화</th>
              <td>{datalists.address}</td>
              <th>시간</th>
              <td>{datalists.hour}</td>
            </tr>
            <tr>
              <th>특징</th>
              <td colSpan="3">
                {datalists.facilities.map((post, index) => (
                  <span key={index}>
                    {index > 0 && ','}
                    {post}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </TABLE>
      </INNER>

      <INNER>
        <h2><Icon type="IoIosArrowDroprightCircle" />매장위치</h2>
        <MapContent code1={datalists.location.coordinates[0]} code2={datalists.location.coordinates[1]} />
      </INNER>
    </div>
  );
};

export default Detail;
