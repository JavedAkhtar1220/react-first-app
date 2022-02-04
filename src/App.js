import React from 'react';

// Components 
import Header from './components/Header';

import './App.css';
import Cover from './components/Cover';
import Intro from './components/Intro';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Cover />
      <Intro />
      <Footer />
    </React.Fragment>
  )
};

export default App;
