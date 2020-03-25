import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* style */
import './containers/css/reset.css';
import './containers/scss/common.scss';

/* layout */
import Header from './components/Header';
import Footer from './components/Footer';

/* Error */
import { NotFound } from './components/Errors';

/* page,components */
import Main from './containers/Main';
import Info from './containers/Info';
import Menu from './containers/Menu';
import Found from './containers/Found';
import Branch from './containers/Branch';
import Cs from './containers/Cs';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={['/', '/main']} component={Main} />
          <Route path="/info" component={Info} />
          <Route path="/menu" component={Menu} />
          <Route path="/found" component={Found} />
          <Route path="/branch" component={Branch} />
          <Route path="/cs" component={Cs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
