
/** @jsx jsx */
import { jsx } from '@emotion/core';

/* page,components */
import Subtitle from '../components/Subtitle';
import Pathtitle from '../components/common/Pathtitle';
import FoundList from '../components/found/FoundList';
import {CONTAINER} from '../components/common/Tag';

const Found = () => {
  return (
    <div>
      <Subtitle title="지점소개" />

      <CONTAINER padding="70px 0">
        <Pathtitle pathtext="지점소개 > 정보페이지" />
        <FoundList  />
      </CONTAINER>
    </div>
  );
};

export default Found;
