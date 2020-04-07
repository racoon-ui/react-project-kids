import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Subtitle from '../components/Subtitle';

/* page,components */
import Info_01 from './Info/Info_01';
import Info_02 from './Info/Info_02';
import Info_03 from './Info/Info_03';
import Info_04 from './Info/Info_04';

const Info = () => {
  return (
    <div>
      <Subtitle title="브랜드소개" />
      <div className="links">
        <Link to="/info/info01">브랜드 스토리</Link>/<Link to="/info/info02">브랜드 경쟁력</Link>/
        <Link to="/info/info03">인테리어 컨셉</Link>/<Link to="/info/info04">본사 안내</Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path={['/info/info01', '/info']} exact component={Info_01} />
          <Route path="/info/info02" component={Info_02} />
          <Route path="/info/info03" component={Info_03} />
          <Route path="/info/info04" component={Info_04} />
        </Switch>
      </div>
    </div>
  );
};

export default Info;
