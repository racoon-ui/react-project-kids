import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Subtitle from '../components/Subtitle';
import Pathtitle from '../components/common/Pathtitle';

/* page,components */

import ListWrap from '../components/found/ListWrap';
import FoundAdd from '../components/found/FoundAdd';
import Detail from '../components/found/Detail';
import { CONTAINER } from '../components/common/Tag';

const Found = () => {
  return (
    <div>
      <Subtitle title="지점소개" />
      <CONTAINER padding="70px 0">
        <Pathtitle pathtext="지점소개" />
        <Switch>
          <Route path={['/found/list', '/found']} exact component={ListWrap} />
          <Route path="/found/add" component={FoundAdd} />
          <Route path="/found/detail/:id" component={Detail} />
        </Switch>
      </CONTAINER>
    </div>
  );
};

export default Found;
