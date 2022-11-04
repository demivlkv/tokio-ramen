import * as React from 'react';
import '../styles/global.css';

// import components
import Header from '../components/header';
import Hero from '../components/hero';
import Home from '../components/home';

const IndexPage = () => (
  <div>
    <Header />
    <Hero />
    <Home />
  </div>
);

export default IndexPage;
