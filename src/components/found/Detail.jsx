/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { useState } from 'react';

import Loading from '../common/Loading';
import { INNER, TABLE } from '../common/Tag';
import MapContent from '../found/MapContent';
import Icon from '../common/Icon';
import useRestApi from '../../utils/api';
const Detailstyle = css`
  .inner {
    margin-bottom: 40px;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  table {
    td,
    th {
      border-top: 1px solid #d6d6d6;
      height: 40px;
      font-size: 13px;
    }
    th {
      font-size: 15px;
      font-weight: bold;
    }
  }

  #Mymap {
    height: 500px;
  }
  @media (min-width: 1024px) {
    /* pc */
  }
  @media (max-width: 1024px) {
    /* m */
  }
`;

const Detail = ({ match }) => {
  const [{ loading, data: datalists, error }] = useRestApi(`/api/stores/${match.params.id}`, { manual: false });

  // 대기 중일 때
  if (loading) return <Loading />;
  // 에러
  if (error) return <div>에러가 발생했습니다</div>;
  //아직 값이 설정되지 않았을 때
  if (!datalists) return null;

  return (
    <div className="detail-wrap" css={Detailstyle}>
      <INNER>
        <h2>
          <Icon type="IoIosArrowDroprightCircle" />
          매장안내
        </h2>
        <TABLE align="left" row_height="30px" titlesize="24px" titlecolor="#333" subsize="16px">
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
        <h2>
          <Icon type="IoIosArrowDroprightCircle" />
          매장위치
        </h2>
        <MapContent code1={datalists.location.coordinates[0]} code2={datalists.location.coordinates[1]} />
      </INNER>
    </div>
  );
};

export default Detail;
