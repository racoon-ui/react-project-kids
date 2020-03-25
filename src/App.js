import React from 'react';

import './containers/css/reset.css';
import './containers/scss/common.scss';

import Header from './components/Header';
import Main from './containers/Main';
import Footer from './components/Footer';




const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
