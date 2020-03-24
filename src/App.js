import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './containers/css/reset.css';
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
