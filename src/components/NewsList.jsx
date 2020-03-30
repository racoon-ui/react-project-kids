import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://shrouded-escarpment-56668.herokuapp.com/api/stores');
        setArticles(response.data.articles);
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

  //articles 값이 유효할 때
  return (
    <div>
      {articles.map(article => (
        <NewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
