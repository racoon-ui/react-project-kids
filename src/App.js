/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* style */
import './styles/common.scss';
import Commonstyle from './components/Commonstyle';

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
        
        <Commonstyle /> {/* Globalstyle을 컴포넌트로 만든것 Commonstyle */}
        
        <Switch>
          <Route exact path={['/', '/main']} component={Main} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/found" component={Found} />
          <Route exact path="/branch" component={Branch} />
          <Route exact path="/cs" component={Cs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
