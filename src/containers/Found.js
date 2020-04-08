/** @jsx jsx */
import { jsx } from '@emotion/core';
import {  Switch, Route } from 'react-router-dom';
/* page,components */
import Subtitle from '../components/Subtitle';
import Pathtitle from '../components/common/Pathtitle';
import ListWrap from '../components/found/ListWrap';
import FoundAdd from '../components/found/FoundAdd';
import { CONTAINER } from '../components/common/Tag';

const Found = () => {
  return (
    <div>
      <Subtitle title="지점소개" />

      <CONTAINER padding="70px 0">
        <Pathtitle pathtext="지점소개 > 정보페이지" />
        <Switch>
          {/* <Route path={['/', '/found']} exact component={ListWrap} /> */}
          <Route path="/found" exact component={FoundAdd} />
          <Route path="/hello"  component={ListWrap} />
          {/* <Route path="/found/add" component={FoundAdd} />
           */}

        </Switch>
      </CONTAINER>
    </div>
  );
};

export default Found;
