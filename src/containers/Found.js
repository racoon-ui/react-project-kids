import React from 'react';

import Subtitle from '../components/Subtitle';
import Pathtitle from '../components/Pathtitle';

import NewsList from '../components/NewsList';

const Found = () => {
  return (
    <div>
      <Subtitle title="지점소개" />
      <Pathtitle pathtext="지점소개 > 정보페이지" />

      <NewsList />
    </div>
  );
};

export default Found;
