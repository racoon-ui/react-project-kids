
/** @jsx jsx */
import { jsx } from '@emotion/core';





/* page,components */
import Subtitle from '../components/Subtitle';
import Pathtitle from '../components/common/Pathtitle';

import FoundList from '../components/found/FoundList';


const Found = () => {
  // const [token] = useState(sessionStorage.getItem('token'));




  return (
    <div>
      <Subtitle title="지점소개" />
      <div className="container">
        <Pathtitle pathtext="지점소개 > 정보페이지" />

        <FoundList  />
      </div>
    </div>
  );
};

export default Found;
