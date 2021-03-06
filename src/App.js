/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';

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
import FoundAdd from './containers/FoundAdd';
import Branch from './containers/Branch';
import Cs from './containers/Cs';
import MemberJoin from './containers/MemberJoin';
import Login from './containers/Login';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Commonstyle /> {/* Globalstyle을 컴포넌트로 만든것 Commonstyle */}
        <Switch>
          <Route exact path={['/', '/main']} component={Main} />
          <Route path="/info" component={Info} />
          <Route path="/menu" component={Menu} />
          <Route exact path="/found" component={Found} />
          <Route path="/found/add" component={FoundAdd} />
          <Route path="/branch" component={Branch} />
          <AuthRoute path="/cs" component={Cs} />
          <Route path="/memberJoin" component={MemberJoin} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
