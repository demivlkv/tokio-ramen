import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Menu = () => (
  <Layout>
    <h1>Menu</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Menu;