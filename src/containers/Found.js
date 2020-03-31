import React, { useState, useEffect } from 'react';

import Subtitle from '../components/Subtitle';
import Pathtitle from '../components/Pathtitle';


import FoundList from '../components/FoundList';


import axios from 'axios';



const Found = () => {







  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setArticles(response.data);
      } catch (e) {
        console.log('에러');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기 중일 때
  if (loading) {
    return <div>대기중...</div>;
  }

  //아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }















  return (
    <div>
      <Subtitle title="지점소개" />
      <Pathtitle pathtext="지점소개 > 정보페이지" />
      
      
      <FoundList articles={articles}/>
    </div>
  );
};

export default Found;
