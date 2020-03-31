
import React from 'react';


const FoundList = (props) => {

  //articles 값이 유효할 때
  return (
    <div>
      {props.articles.map(article => (
        <div key={article._id}>
          {article.name}<br/>
          주소 : {article.address}<br/>
          전화번호 : {article.phone}<br/>
          영업시간 : {article.hour}<br/><br/><br/>
        </div>
      ))}
    </div>
  );
};

export default FoundList;
