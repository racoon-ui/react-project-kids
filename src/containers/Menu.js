import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Subtitle from '../components/Subtitle';

/* layout */
import Menu_01 from '../components/Menu_01';
import Menu_02 from '../components/Menu_02';
import Menu_03 from '../components/Menu_03';
import Menu_04 from '../components/Menu_04';

const Menu = () => {
  return (
    <div>
      <Subtitle title="메뉴" />
      <Switch>
        <Route path={['/menu/menu01', '/menu']} exact component={Menu_01} />
        <Route path="/menu/menu02" component={Menu_02} />
        <Route path="/menu/menu03" component={Menu_03} />
        <Route path="/menu/menu04" component={Menu_04} />
      </Switch>
    </div>
  );
};

export default Menu;
