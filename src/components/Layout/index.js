import * as React from 'react';
import { motion } from 'framer-motion';
import '../../styles/global.css';

// import components
import Header from '../Header';
import Hero from '../Hero';
import About from '../About';
import Menu from '../Menu';
import Info from '../Info';
import Contact from '../Contact';
import Footer from '../Footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>Tokio Ramen | {pageTitle}</title>
      <Header />
      <Hero />
        <motion.main
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          {children}
        </motion.main>
      <About />
      <Menu />
      <Info />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;