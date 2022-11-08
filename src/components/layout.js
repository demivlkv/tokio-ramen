import * as React from 'react';
import '../styles/global.css';

// import components
import Header from '../components/header';
import Hero from './hero';
import About from './about';
import Menu from './menu';
import Info from './info';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>Tokio Ramen | {pageTitle}</title>
      <Header />
      <Hero />
        <main>{children}</main>
      <About />
      <Menu />
      <Info />
      <Footer />
    </>
  );
};

export default Layout;