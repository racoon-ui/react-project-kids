
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled'
import { useState, useEffect } from 'react';
/* data_api */
import axios from 'axios';

//<ListItem  key={article._id}>
//{article.name}<br/>
//주소 : {article.address}<br/>
//전화번호 : {article.phone}<br/>
//영업시간 : {article.hour}<br/><br/><br/>
//</ListItem>





let TableBox = styled.table`
  text-align: ${props => props.align || 'left'};
`








const ListItem = props =>{
  const [listdata] = useState(props.data);
  return (
  <div>
    <h3>{listdata.name}</h3>
    <TableBox align="center">
      <tbody>
        <tr>
          <td>주소</td>
          <td>{listdata.address}</td>
        </tr>
        <tr>
          <td>전화</td>
          <td>{listdata.phone}</td>
        </tr>
        <tr>
          <td>영업시간</td>
          <td>{listdata.hour}</td>
        </tr>
      </tbody>
    </TableBox>
  </div>
  )
}



const FoundList = (props) => {
  const [foundlists, setFoundlist] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setFoundlist(response.data);
      } catch (e) {
        if(e.message === 'Request failed with status code 401'){
          alert('401에러입니다.')
        }
      }
      setLoading(false);
    };
    fetchData();
 }, []);

  //로딩(컴포넌트로 뺄예정)
  if (loading) {
    return <div>대기중...</div>;
  }

//아직 articles 값이 설정되지 않았을 때
if (!foundlists) {
  return null;
}



  return (
    <div>
      {foundlists.map(foundlist => (
        <ListItem key={foundlist._id} data={foundlist} />
      ))}
    </div>
  );
};

export default FoundList;
