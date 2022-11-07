import * as React from 'react';
import '../styles/global.css';

// import components
import Header from '../components/header';
import Hero from './hero';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>Tokio Ramen | {pageTitle}</title>
      <Header />
      <Hero />
        <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;