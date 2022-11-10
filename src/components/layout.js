import * as React from 'react';
import '../styles/global.css';

// import components
import Header from './header';
import Hero from './Hero';
import About from './About';
import Menu from './Menu';
import Info from './Info';
import Contact from './Contact';
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
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;